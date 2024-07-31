
const LONG_MONTH = [1, 3, 5, 7, 8, 10, 12];

const parseStr = (str) => {

  let day, month, year;

  if ((str.length >= 8) && ((str.includes('.')) || (str.includes('/')) || (str.includes('-')))) {
    if (str.includes('.')) {
      [day, month, year] = str.split('.');
    } else if (str.includes('-')) {
      [day, month, year] = str.split('-');
    } else if (str.includes('/')) {
      [month, day, year] = str.split('/');
    }
  } else return null;
    return [day, month, year];
}

const checkDate = (dateArray) => {
  if (!dateArray) {
    return false;
  }

  let numbers = dateArray.map(Number).filter(value => !isNaN(value));

  if (numbers.length < 3) {
    return false;
  }
  const [day, month, year] = numbers;
  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  if (month < 1 || month > 12) {
    return false;
  }

  if (year < 0) {
    return false;
  }

  if (day < 1 || day > 31) {
    return false;
  }

  if (day === 31 && !LONG_MONTH.includes(month)) {
    return false;
  }

  if (month === 2) {
    if (day > 29 || (day === 29 && !isLeapYear(year))) {
      return false;
    }
  }
  return true;
}

const dateArray = (arr) => {
  return arr.map(parseStr).filter(checkDate).map(date => date.join('-'));
}

const array = ['10-02-2022', 'test', '11/12/2023', '00/13/2022', '41/12/2023', '11.12.23', '41.12', '0.13.22', '12.12.590', '12.12.tr'];
console.log(dateArray(array));
