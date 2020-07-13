import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rocketshoes-back.herokuapp.com/',
});

export default api;
