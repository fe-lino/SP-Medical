import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.4.49:5000/api',
  });

  export default api;