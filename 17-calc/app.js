'use strict';

function checkNumbers(a, b) {
  if (a === undefined || b === undefined) {
    return false
  }
  if (a === 0 && b === 0) {
    return false
  }
  if (isNaN(a) || isNaN(b)) {
    return false
  }
  return true
}

function calculate(operation) {
  const inputs = document.querySelectorAll('.number');
  const num1 = Number(inputs[0].value);
  const num2 = Number(inputs[1].value);

  if (!checkNumbers(num1, num2)) {
    console.log('Enter 2 numbers, please')
    document.querySelector('.result').textContent = 'Incorrect numbers'
    return;
  }

  let result;

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        console.log('Divide by zero')
        result = 'Divide by zero'
        break
      }
      result = num1 / num2;
      break;
    default:
      return;
  }

  document.querySelector('.result').textContent = result;

  inputs.forEach(input => input.value = '');
}

function onClick() {
  const operation = this.getAttribute('data-operation');
  calculate(operation);
}

document.querySelectorAll('.operation').forEach(button => {
  button.addEventListener('click', onClick);
});


