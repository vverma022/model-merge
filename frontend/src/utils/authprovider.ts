import axios from 'axios';


const authProvider = axios.create({
    baseURL: 'http://localhost:6030',
});

authProvider.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('token'); // Get token from sessionStorage
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
);

export default authProvider;