const sumAll = function(min, max) {
  // Validate that both inputs are non-negative integers
  if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
  if (min < 0 || max < 0) return 'ERROR';

  // Ensure min is the smaller number and max is the larger number
  if (min > max) {
    [min, max] = [max, min];
  }

  let total = 0;
  for (let i = min; i <= max; i++) {
    total += i;
  }

  return total;
};

module.exports = sumAll;
