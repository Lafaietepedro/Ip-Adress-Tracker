import { startTransition, useEffect, useRef, useState } from 'react';
import './App.css';
import { fetchIpLookup } from './services/ipLookup';
import { formatLastUpdated } from './utils/formatters';
import { readStringArrayStorage, writeStringArrayStorage } from './utils/storage';
import SearchForm from './components/SearchForm';
import StatsGrid from './components/StatsGrid';
import LookupDetails from './components/LookupDetails';
import RecentSearches from './components/RecentSearches';
import MapPanel from './components/MapPanel';

const EXAMPLE_LOOKUPS = ['8.8.8.8', '1.1.1.1', 'github.com', 'developer.mozilla.org'];
const HISTORY_LIMIT = 5;
const RECENT_SEARCHES_STORAGE_KEY = 'ip-tracker-recent-searches';

function describeLookupMode(kind) {
  if (kind === 'ip') return 'Direct IP geolocation';
  if (kind === 'domain') return 'Domain resolution + geolocation';
  return 'Current public IP lookup';
}

function updateHistory(history, query) {
  if (!query) return history;

  const nextHistory = history.filter((item) => item !== query);
  nextHistory.unshift(query);

  return nextHistory.slice(0, HISTORY_LIMIT);
}

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const [lookupData, setLookupData] = useState(null);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [recentSearches, setRecentSearches] = useState(() =>
    readStringArrayStorage(RECENT_SEARCHES_STORAGE_KEY, HISTORY_LIMIT),
  );
  const [lastUpdated, setLastUpdated] = useState(null);
  const [activeLookup, setActiveLookup] = useState('Current public IP');
  const [activeLookupMode, setActiveLookupMode] = useState(describeLookupMode('current'));
  const activeRequestRef = useRef({ id: 0, controller: null });

  useEffect(() => {
    const controller = new AbortController();
    const requestId = activeRequestRef.current.id + 1;

    activeRequestRef.current.controller?.abort();
    activeRequestRef.current = { id: requestId, controller };

    async function bootstrapLookup() {
      try {
        setStatus('loading');
        setErrorMessage('');

        const result = await fetchIpLookup('', { signal: controller.signal });

        if (activeRequestRef.current.id !== requestId) return;

        setLookupData(result.data);
        setActiveLookup('Current public IP');
        setActiveLookupMode(describeLookupMode(result.kind));
        setLastUpdated(new Date());
        setStatus('success');
      } catch (error) {
        if (error.name === 'AbortError' || activeRequestRef.current.id !== requestId) {
          return;
        }

        setErrorMessage(error.message);
        setStatus('error');
      } finally {
        if (activeRequestRef.current.id === requestId) {
          activeRequestRef.current.controller = null;
        }
      }
    }

    bootstrapLookup();

    return () => {
      controller.abort();
      activeRequestRef.current.controller?.abort();
    };
  }, []);

  useEffect(() => {
    writeStringArrayStorage(RECENT_SEARCHES_STORAGE_KEY, recentSearches);
  }, [recentSearches]);

  async function runLookup(rawQuery, options = {}) {
    const { syncInput = false, addToHistory = true } = options;
    const controller = new AbortController();
    const requestId = activeRequestRef.current.id + 1;

    activeRequestRef.current.controller?.abort();
    activeRequestRef.current = { id: requestId, controller };

    setStatus('loading');
    setErrorMessage('');

    try {
      const result = await fetchIpLookup(rawQuery, { signal: controller.signal });
      const displayLookup = result.normalizedQuery || 'Current public IP';

      if (activeRequestRef.current.id !== requestId) {
        return;
      }

      setLookupData(result.data);
      setActiveLookup(displayLookup);
      setActiveLookupMode(describeLookupMode(result.kind));
      setLastUpdated(new Date());
      setStatus('success');

      if (syncInput) {
        setSearchValue(result.normalizedQuery);
      }

      if (addToHistory && result.normalizedQuery) {
        startTransition(() => {
          setRecentSearches((currentHistory) =>
            updateHistory(currentHistory, result.normalizedQuery),
          );
        });
      }
    } catch (error) {
      if (error.name === 'AbortError' || activeRequestRef.current.id !== requestId) {
        return;
      }

      setErrorMessage(error.message);
      setStatus('error');
    } finally {
      if (activeRequestRef.current.id === requestId) {
        activeRequestRef.current.controller = null;
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    runLookup(searchValue, { syncInput: true });
  }

  function handleUseCurrentIp() {
    setSearchValue('');
    runLookup('', { addToHistory: false });
  }

  function handleExampleSelect(example) {
    setSearchValue(example);
    runLookup(example, { syncInput: true });
  }

  function handleInputChange(event) {
    setSearchValue(event.target.value);

    if (errorMessage) {
      setErrorMessage('');
      setStatus(lookupData ? 'success' : 'idle');
    }
  }

  function handleClearHistory() {
    setRecentSearches([]);
  }

  const statusSummary =
    status === 'loading'
      ? 'Refreshing live network data'
      : errorMessage
        ? 'Action required before the next lookup'
        : 'Ready for the next search';

  return (
    <div className="app-shell">
      <div className="app-shell__shape app-shell__shape--one" aria-hidden="true" />
      <div className="app-shell__shape app-shell__shape--two" aria-hidden="true" />
      <div className="app-shell__shape app-shell__shape--three" aria-hidden="true" />

      <main className="app-layout" aria-busy={status === 'loading'}>
        <section className="panel hero-panel">
          <div className="hero-panel__grid">
            <div className="hero-panel__copy">
              <p className="eyebrow">Editorial Geolocation Explorer</p>
              <h1>Read the internet like a map, not a form.</h1>
              <p className="hero-panel__lede">
                This version shifts the project away from the usual dark dashboard aesthetic
                and into a more art-directed interface with stronger typography, warmer tones,
                and a layout that feels more like a digital product story.
              </p>
            </div>

            <aside className="hero-panel__spotlight" aria-live="polite">
              <p className="hero-panel__spotlight-label">Current briefing</p>
              <div className="hero-panel__spotlight-value">{activeLookup}</div>
              <div className="hero-panel__spotlight-list">
                <article className="metric-chip">
                  <span className="metric-chip__label">Mode</span>
                  <strong>{activeLookupMode}</strong>
                </article>
                <article className="metric-chip">
                  <span className="metric-chip__label">Status</span>
                  <strong>{statusSummary}</strong>
                </article>
                <article className="metric-chip">
                  <span className="metric-chip__label">Updated</span>
                  <strong>{formatLastUpdated(lastUpdated)}</strong>
                </article>
              </div>
            </aside>
          </div>

          <SearchForm
            value={searchValue}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            onUseCurrentIp={handleUseCurrentIp}
            onExampleSelect={handleExampleSelect}
            examples={EXAMPLE_LOOKUPS}
            isLoading={status === 'loading'}
          />

          {errorMessage ? (
            <p className="status-banner status-banner--error" role="alert">
              {errorMessage}
            </p>
          ) : (
            <p className="status-banner">
              Live lookup powered by IPify, presented in a portfolio direction designed to feel
              distinct from the usual challenge-derived layouts.
            </p>
          )}
        </section>

        <section className="dashboard-grid">
          <div className="dashboard-grid__main">
            <StatsGrid data={lookupData} isLoading={status === 'loading'} />
            <LookupDetails
              data={lookupData}
              activeLookup={activeLookup}
              lastUpdated={formatLastUpdated(lastUpdated)}
            />
            <RecentSearches
              items={recentSearches}
              onSelect={handleExampleSelect}
              onClear={handleClearHistory}
            />
          </div>

          <MapPanel data={lookupData} isLoading={status === 'loading'} />
        </section>
      </main>
    </div>
  );
}
