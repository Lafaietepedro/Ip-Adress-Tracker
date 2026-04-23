function RecentSearches({ items, onSelect, onClear }) {
  return (
    <section className="panel section-panel">
      <div className="section-heading section-heading--split">
        <div>
          <p className="section-heading__eyebrow">Session History</p>
          <h2>Recent lookups</h2>
        </div>
        {items.length ? (
          <button className="button button--secondary button--compact" type="button" onClick={onClear}>
            Clear history
          </button>
        ) : null}
        <p className="section-heading__body">
          Keeping lightweight search memory gives the interface a more product-like feel without
          adding unnecessary complexity.
        </p>
      </div>

      {items.length ? (
        <div className="history-list">
          {items.map((item) => (
            <button
              key={item}
              type="button"
              className="history-list__item"
              onClick={() => onSelect(item)}
            >
              <span>{item}</span>
              <strong>Run again</strong>
            </button>
          ))}
        </div>
      ) : (
        <p className="empty-copy">
          Your latest searches will appear here once you query a few IP addresses or domains.
        </p>
      )}
    </section>
  );
}

export default RecentSearches;
