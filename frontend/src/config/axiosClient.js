import axios from 'axios';

const axiosClient = axios.create({
    baseUrl: 'http://localhost:8085/',
});

export default axiosClient;
