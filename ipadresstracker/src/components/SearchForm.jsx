function SearchForm({
  value,
  onChange,
  onSubmit,
  onUseCurrentIp,
  onExampleSelect,
  examples,
  isLoading,
}) {
  return (
    <section className="search-panel">
      <form className="search-form" onSubmit={onSubmit}>
        <label className="search-form__label" htmlFor="lookup-input">
          Search an IPv4, IPv6, or domain
        </label>

        <div className="search-form__controls">
          <input
            id="lookup-input"
            className="search-form__input"
            type="text"
            inputMode="search"
            autoComplete="off"
            spellCheck="false"
            value={value}
            onChange={onChange}
            placeholder="Try 8.8.8.8 or github.com"
          />

          <button className="button button--primary" type="submit" disabled={isLoading}>
            {isLoading ? 'Querying…' : 'Track target'}
          </button>
        </div>
      </form>

      <div className="search-panel__footer">
        <button
          className="button button--secondary"
          type="button"
          onClick={onUseCurrentIp}
          disabled={isLoading}
        >
          Detect my public IP
        </button>
        <p className="search-panel__hint">
          Domains are resolved automatically and enriched with reverse DNS and autonomous system
          context when the provider returns it.
        </p>
      </div>

      <div className="preset-list" aria-label="Suggested lookups">
        {examples.map((example) => (
          <button
            key={example}
            className="preset-list__item"
            type="button"
            onClick={() => onExampleSelect(example)}
          >
            {example}
          </button>
        ))}
      </div>
    </section>
  );
}

export default SearchForm;
