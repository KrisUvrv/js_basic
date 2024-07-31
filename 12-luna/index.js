const isValidCardNumber = (cardNumber) => {
  cardNumber = cardNumber.replace(/[- .\/]/g, '');
  if ((cardNumber.length !== 16) || (isNaN(cardNumber))) {
    return false;
  }

  const digits = cardNumber.split('').map(Number);
  let sum = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];
    if (i % 2 === 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;

  }
  return sum % 10 === 0;
}

//
// const tests = [
//   ['5467-8799-7890-5547', true],
//   ['5467/8799.7890 5543', false],
//   ['5467/8799/7890/5543', false],
//   ['5467/8799/7890/55437890', false],
//   ['aaaa-bbbb-cccc-dddd', false],
//   ['aaaa-1234-ccc-ddd', false],
//   ['111-222-3333-3444', false],
//   ['4627100101654724', true],
//   ['5467929858074128', true]];
// tests.forEach(([cardNumber, result]) => {
//   console.log(isValidCardNumber(cardNumber), result)
// });



