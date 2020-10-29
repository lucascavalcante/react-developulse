import axios from 'axios';

const api = axios.create({
    baseURL: "https://imc-hiring-test.azurewebsites.net/"
});

export default api;