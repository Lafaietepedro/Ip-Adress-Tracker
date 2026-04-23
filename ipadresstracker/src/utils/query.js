const IPV4_SEGMENT = '(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)';
const IPV4_REGEX = new RegExp(`^(${IPV4_SEGMENT}\\.){3}${IPV4_SEGMENT}$`);
const DOMAIN_REGEX =
  /^(?=.{1,253}$)(?!-)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i;

function sanitizeQuery(value = '') {
  const trimmed = value.trim().toLowerCase();

  if (!trimmed) {
    return '';
  }

  const withoutProtocol = trimmed.replace(/^[a-z]+:\/\//i, '');
  const withoutPath = withoutProtocol.split('/')[0];

  if (withoutPath.startsWith('[')) {
    const closingBracketIndex = withoutPath.indexOf(']');
    return closingBracketIndex > -1 ? withoutPath.slice(1, closingBracketIndex) : withoutPath;
  }

  const colonCount = withoutPath.match(/:/g)?.length ?? 0;
  const withoutPort =
    colonCount <= 1 ? withoutPath.replace(/:\d+$/, '') : withoutPath;

  return withoutPort;
}

function isLikelyIpv6(value) {
  if (!value.includes(':')) {
    return false;
  }

  const normalizedValue = value.replace('::', ':');
  const segments = normalizedValue.split(':');

  return (
    segments.length >= 3 &&
    segments.length <= 8 &&
    segments.every((segment) => segment === '' || /^[0-9a-f]{1,4}$/i.test(segment))
  );
}

function getQueryKind(value) {
  if (!value) return 'current';
  if (IPV4_REGEX.test(value) || isLikelyIpv6(value)) return 'ip';
  if (DOMAIN_REGEX.test(value)) return 'domain';
  return null;
}

export function validateLookupQuery(rawQuery) {
  const normalizedQuery = sanitizeQuery(rawQuery);
  const kind = getQueryKind(normalizedQuery);

  if (!kind) {
    return {
      isValid: false,
      normalizedQuery,
      kind: null,
      message: 'Enter a valid IPv4, IPv6, or domain to continue.',
    };
  }

  return {
    isValid: true,
    normalizedQuery,
    kind,
  };
}
