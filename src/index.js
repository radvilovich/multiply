module.exports = function multiply(first, second) {
  num = BigInt(first) * BigInt(second);
  result = num.toString();
  return result;
}
