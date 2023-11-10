function sumDigits(number) {
  let digits = [];
  while (number != 0) {
    digits.push(number % 10);
    number = Math.trunc(number / 10);
  }
  digits.reverse();
  return digits.reduce((a, b) => a + b, 0);
}

console.log(sumDigits(245678));
