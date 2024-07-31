
const query = (params) => {
  return Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
}

// const params = {search: "Вася", take: 10};
// console.log(query(params));
