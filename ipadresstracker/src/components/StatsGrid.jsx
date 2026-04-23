import { formatLocation, formatTimezone, formatValue } from '../utils/formatters';

function resolveValue(value, isLoading) {
  if (isLoading) return 'Refreshing…';
  return formatValue(value);
}

function StatsGrid({ data, isLoading }) {
  const cards = [
    {
      label: 'IP Address',
      value: resolveValue(data?.ip, isLoading),
    },
    {
      label: 'Location',
      value: resolveValue(formatLocation(data?.location), isLoading),
    },
    {
      label: 'Timezone',
      value: resolveValue(formatTimezone(data?.location?.timezone), isLoading),
    },
    {
      label: 'Provider',
      value: resolveValue(data?.isp, isLoading),
    },
  ];

  return (
    <section className="panel section-panel">
      <div className="section-heading">
        <div>
          <p className="section-heading__eyebrow">Core Snapshot</p>
          <h2>Primary lookup summary</h2>
        </div>
        <p className="section-heading__body">
          The most important details stay visible at a glance, with a denser hierarchy that
          reads more like a real dashboard.
        </p>
      </div>

      <div className="stats-grid">
        {cards.map((card) => (
          <article className="stat-card" key={card.label}>
            <span className="stat-card__label">{card.label}</span>
            <strong className="stat-card__value">{card.value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StatsGrid;
