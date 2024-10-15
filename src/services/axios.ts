import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.120.157.165:3030/api',
});
