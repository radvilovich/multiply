module.exports = function multiply(first, second) {
  num = BigInt(first) * BigInt(second);
  //console.log(num);
  result = num.toString();
  return result;
}
