import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-2019.firebaseio.com/'
});

export default instance;