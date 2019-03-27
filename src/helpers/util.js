/**
 * Quick object check
 */
export function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/**
 * Check if two values are loosely equal
 */
export function looseEqual(a, b) {
  // eslint-disable-next-line
  return a == b || (
    isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false
  );
}
