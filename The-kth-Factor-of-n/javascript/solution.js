/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
  if (n == 1 || k == 1) return 1;
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      k--;
    }
    if (k == 1) return i;
  }
  return -1;
};
