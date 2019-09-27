import axios from 'axios';

require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env',
});

const api = axios.create({
  baseURL: process.env.BASE_URL,
});

export default api;
