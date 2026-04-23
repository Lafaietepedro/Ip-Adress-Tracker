export function readStringArrayStorage(key, maxItems = Infinity) {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const rawValue = window.localStorage.getItem(key);

    if (!rawValue) {
      return [];
    }

    const parsedValue = JSON.parse(rawValue);

    if (!Array.isArray(parsedValue)) {
      return [];
    }

    return parsedValue
      .filter((item) => typeof item === 'string' && item.trim())
      .slice(0, maxItems);
  } catch {
    return [];
  }
}

export function writeStringArrayStorage(key, values) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(values));
  } catch {
    // Ignore persistence failures so storage issues never block live lookups.
  }
}
