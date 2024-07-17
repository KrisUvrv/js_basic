const EUR_RUB = 95.84;
const EUR_USD = 1.09;
const USD_RUB = 87.85;

const converter = (sum, sourceCurrency, targetCurrency) => {

  if (sourceCurrency.toUpperCase() === targetCurrency.toUpperCase()) {
    return sum;
  }

  const currencyPair = `${sourceCurrency.toUpperCase()}-${targetCurrency.toUpperCase()}`;

  switch(currencyPair) {
    case 'EUR-RUB':
      return sum * EUR_RUB;
    case 'RUB-EUR':
      return sum / EUR_RUB;
    case 'EUR-USD':
      return sum * EUR_USD;
    case 'USD-EUR':
      return sum / EUR_USD;
    case 'USD-RUB':
      return sum * USD_RUB;
    case 'RUB-USD':
      return sum / USD_RUB;
    default:
      return null;
  }
};

// console.log(converter(10000, 'rub', 'USD'));
// console.log(converter(114, 'usd', 'ruB'));
// console.log(converter(300, 'RUB', 'eur'));
// console.log(converter(444, 'usd', 'eur'));
// console.log(converter(60, 'rub', 'RUB'));
// console.log(converter(600, 'eur', 'RUB'));
// console.log(converter(60, 'EUR', 'uSd'));
// console.log(converter(44, 'rub', 'GBP'));
