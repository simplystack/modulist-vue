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

/**
 * Check if a val exists in arr using looseEqual comparison
 */
export function looseIndexOf(arr, val) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }

  return -1;
}

/**
 * Transform first letter to uppercase
 */
export function toUpperCaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
