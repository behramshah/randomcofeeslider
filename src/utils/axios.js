const axios = require('axios').default;

export const axiosInstance = axios.create({
    baseURL: 'https://coffee.alexflipnote.dev/random.json',
    timeout: 2000,
});