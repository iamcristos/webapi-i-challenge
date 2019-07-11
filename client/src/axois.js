import axois from 'axios';

const axoisInstance = axois.create({
    baseURL: 'http://localhost:3000/api/users/'
  });

export default axoisInstance;