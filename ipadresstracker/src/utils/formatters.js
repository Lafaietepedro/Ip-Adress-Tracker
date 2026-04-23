const EMPTY_VALUE = 'Not available';

export function formatValue(value) {
  if (value === null || value === undefined || value === '') {
    return EMPTY_VALUE;
  }

  return value;
}

export function formatLocation(location) {
  const locationParts = [location?.city, location?.region, location?.country].filter(Boolean);

  if (!locationParts.length) {
    return EMPTY_VALUE;
  }

  return locationParts.join(', ');
}

export function formatTimezone(timezone) {
  return timezone ? `UTC ${timezone}` : EMPTY_VALUE;
}

export function formatCoordinates(location) {
  if (typeof location?.lat !== 'number' || typeof location?.lng !== 'number') {
    return EMPTY_VALUE;
  }

  return `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`;
}

export function formatLocalTime(timezone) {
  if (!timezone) {
    return EMPTY_VALUE;
  }

  const match = timezone.match(/^([+-])(\d{2}):(\d{2})$/);

  if (!match) {
    return formatTimezone(timezone);
  }

  const [, signal, hours, minutes] = match;
  const offsetInMinutes =
    (Number.parseInt(hours, 10) * 60 + Number.parseInt(minutes, 10)) *
    (signal === '+' ? 1 : -1);
  const date = new Date(Date.now() + offsetInMinutes * 60 * 1000);

  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(date);
}

export function formatLastUpdated(date) {
  if (!date) {
    return 'Waiting for the first live response';
  }

  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

export function stripProtocol(value) {
  if (!value) {
    return EMPTY_VALUE;
  }

  return value.replace(/^https?:\/\//i, '').replace(/\/$/, '');
}
