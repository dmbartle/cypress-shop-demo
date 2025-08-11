export function regExpEscape(string) {
  // Note: this function should be replaced by the RegExp.escape method once that is available, See:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/escape
  // This was released in May 2025 but is not yet in the bundled versions of Node used by the cypress test
  return String(string).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
