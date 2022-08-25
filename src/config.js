const BASE_URL = 'http://10.58.7.170:3000';
const API = {
  home: `${BASE_URL}/product/main`,
  product: `${BASE_URL}/product/all`,
  cart: `${BASE_URL}/cart`,
  email: `${BASE_URL}/users/emailCheck`,
  password: `${BASE_URL}/users/login`,
};

export default API;
