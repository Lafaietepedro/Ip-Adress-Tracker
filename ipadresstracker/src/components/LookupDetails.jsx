import {
  formatCoordinates,
  formatLocalTime,
  formatValue,
  stripProtocol,
} from '../utils/formatters';

function LookupDetails({ data, activeLookup, lastUpdated }) {
  const overviewItems = [
    { label: 'Search target', value: activeLookup },
    { label: 'Coordinates', value: formatCoordinates(data?.location) },
    { label: 'Postal code', value: formatValue(data?.location?.postalCode) },
    { label: 'Estimated local time', value: formatLocalTime(data?.location?.timezone) },
    { label: 'Last refresh', value: lastUpdated },
    { label: 'City geoname ID', value: formatValue(data?.location?.geonameId) },
  ];

  const networkItems = [
    { label: 'Autonomous system', value: formatValue(data?.as?.name) },
    { label: 'ASN number', value: formatValue(data?.as?.asn) },
    { label: 'Route', value: formatValue(data?.as?.route) },
    { label: 'ASN type', value: formatValue(data?.as?.type) },
    { label: 'ASN domain', value: stripProtocol(data?.as?.domain) },
    { label: 'Internet provider', value: formatValue(data?.isp) },
  ];

  const reverseDomains = data?.domains ?? [];

  return (
    <section className="panel section-panel">
      <div className="section-heading">
        <div>
          <p className="section-heading__eyebrow">Analyst View</p>
          <h2>Lookup context and network metadata</h2>
        </div>
        <p className="section-heading__body">
          Extra detail makes the project feel more intentional and helps demonstrate a fuller
          understanding of what an IP intelligence interface can surface.
        </p>
      </div>

      <div className="details-grid">
        <article className="detail-card">
          <h3>Lookup details</h3>
          <dl className="detail-list">
            {overviewItems.map((item) => (
              <div className="detail-list__row" key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </article>

        <article className="detail-card">
          <h3>Network fingerprint</h3>
          <dl className="detail-list">
            {networkItems.map((item) => (
              <div className="detail-list__row" key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>

      <article className="detail-card detail-card--domains">
        <div className="detail-card__header">
          <h3>Reverse domains</h3>
          <span>{reverseDomains.length ? `${reverseDomains.length} returned` : 'No data available'}</span>
        </div>

        {reverseDomains.length ? (
          <div className="tag-list">
            {reverseDomains.map((domain) => (
              <span className="tag-list__item" key={domain}>
                {domain}
              </span>
            ))}
          </div>
        ) : (
          <p className="empty-copy">
            Some lookups do not expose reverse DNS records. When IPify returns them, they appear
            here as compact scan-ready tags.
          </p>
        )}
      </article>
    </section>
  );
}

export default LookupDetails;
