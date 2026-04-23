import axios from 'axios';
import { validateLookupQuery } from '../utils/query';

const IPIFY_ENDPOINT = 'https://geo.ipify.org/api/v2/country,city';
const MISSING_API_KEY_MESSAGE =
  'Add a valid VITE_IPIFY_API_KEY to query live geolocation data.';

function mapLookupError(error) {
  const status = error.response?.status;

  if (status === 401) {
    return 'The IPify API key is missing or invalid. Check your .env configuration.';
  }

  if (status === 403) {
    return 'The request was blocked by IPify. Check whether your subscription has available credits.';
  }

  if (status === 422) {
    return 'That target could not be resolved. Try another IP address or domain.';
  }

  if (status === 429) {
    return 'Too many requests were sent in a short time. Please wait a moment and try again.';
  }

  if (error.code === 'ERR_NETWORK') {
    return 'A network error interrupted the lookup. Confirm your connection and try again.';
  }

  return 'The live lookup failed unexpectedly. Please try again.';
}

export async function fetchIpLookup(rawQuery, options = {}) {
  const apiKey = import.meta.env.VITE_IPIFY_API_KEY;

  if (!apiKey) {
    throw new Error(MISSING_API_KEY_MESSAGE);
  }

  const queryState = validateLookupQuery(rawQuery);

  if (!queryState.isValid) {
    throw new Error(queryState.message);
  }

  const params = {
    apiKey,
    reverseIp: '1',
  };

  if (queryState.kind === 'ip') {
    params.ipAddress = queryState.normalizedQuery;
  }

  if (queryState.kind === 'domain') {
    params.domain = queryState.normalizedQuery;
  }

  try {
    const response = await axios.get(IPIFY_ENDPOINT, {
      params,
      signal: options.signal,
    });

    return {
      data: response.data,
      normalizedQuery: queryState.normalizedQuery,
      kind: queryState.kind,
    };
  } catch (error) {
    if (error.code === 'ERR_CANCELED') {
      const abortError = new Error('Lookup request was cancelled.');
      abortError.name = 'AbortError';
      throw abortError;
    }

    throw new Error(mapLookupError(error));
  }
}

export { MISSING_API_KEY_MESSAGE };
