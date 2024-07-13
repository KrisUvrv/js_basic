const language = prompt('Выберите язык: ' +
  'Aнглийский (введите EN), ' +
  'Французский (введите FR), ' +
  'Испанский (введите ES), ' +
  'Итальянский (введите IT), ' +
  'Русский (введите RU)').toUpperCase();

switch(language) {
  case 'EN':
    console.log('Hello!');
    break;

  case 'FR':
    console.log('Bonjour!');
    break;

  case 'ES':
    console.log('Hola!');
    break;

  case 'IT':
    console.log('Ciao!');
    break;

  case 'RU':
    console.log('Здравствуйте!');
    break;

  default:
    console.log('Hello / Bonjour / Hola / Ciao / Здравствуйте');
}
