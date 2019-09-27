import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_CONNECTION_STRING,
});

export default api;
