
const crypto = (password) => {

  const array = password.split('');
  const half = array.length / 2;

  return array.slice(0, half).reverse().concat(array.slice(half).reverse()).join('');
}

const check = (encryptedPassword, password) => {
  return crypto(encryptedPassword) === password;
}

// let password = 'password1';
// let encryptedPassword = crypto(password);
//
// console.log(password)
// console.log(encryptedPassword);
// console.log(check(encryptedPassword, password));
// console.log(check('tyiodnvkv', password));
