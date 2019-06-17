import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.43.222:5000'
});
export default instance;