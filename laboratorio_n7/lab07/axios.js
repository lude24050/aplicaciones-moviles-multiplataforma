import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.8.103:5000'
});

export default instance;