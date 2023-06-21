import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'http://172.20.10.5:8000/api',
  responseType: 'json',
  withCredentials: true,
});

export default ApiManager;
