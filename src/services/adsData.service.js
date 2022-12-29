import Axios from 'axios';
const BASE_URL =
  process.env.NODE_ENV === 'production' ? '/api/' : 'https://adsparser-api.onrender.com/api/';
// const BASE_URL = process.env.NODE_ENV === 'production' ? '/api/' : '//localhost:3030/api/';
var axios = Axios.create({
  withCredentials: true,
});

export const httpService = {
  get(endpoint, data) {
    return ajax(endpoint, 'GET', data);
  },
};

async function ajax(endpoint, method = 'GET', data = null) {
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params: data,
    });
    return res;
  } catch (error) {
    console.error(
      `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`
    );
    throw error;
  }
}
