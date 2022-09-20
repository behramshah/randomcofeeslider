const axios = require('axios').default;

export const axiosInstance = axios.create({
    baseURL: 'https://dog.ceo/api/breeds/image/random',
    timeout: 2000,
});