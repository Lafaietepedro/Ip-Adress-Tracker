import { describe, expect, it } from 'vitest';
import { validateLookupQuery } from './query';

describe('validateLookupQuery', () => {
  it('accepts ipv4 addresses', () => {
    expect(validateLookupQuery('8.8.8.8')).toMatchObject({
      isValid: true,
      normalizedQuery: '8.8.8.8',
      kind: 'ip',
    });
  });

  it('normalizes protocol and path from domains', () => {
    expect(validateLookupQuery('https://developer.mozilla.org/en-US/docs')).toMatchObject({
      isValid: true,
      normalizedQuery: 'developer.mozilla.org',
      kind: 'domain',
    });
  });

  it('accepts bracketed ipv6 values', () => {
    expect(validateLookupQuery('[2001:4860:4860::8888]')).toMatchObject({
      isValid: true,
      normalizedQuery: '2001:4860:4860::8888',
      kind: 'ip',
    });
  });

  it('rejects malformed targets', () => {
    expect(validateLookupQuery('not a valid lookup')).toMatchObject({
      isValid: false,
      kind: null,
    });
  });
});
