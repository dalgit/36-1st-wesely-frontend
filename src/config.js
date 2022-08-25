const BASE_URL = 'http://10.58.0.224:3000';
const API = {
  home: `${BASE_URL}/product/main`,
  product: `${BASE_URL}/product/all`,
  cart: `${BASE_URL}/cart`,
  signIn: `${BASE_URL}/Users/signIn`,
  signUp: `${BASE_URL}/Users/signUp`,
  auth: `${BASE_URL}/Users/authRouter`,
  detail: `${BASE_URL}/product/detail`,
};

export default API;
