import axios from 'axios'; 

const api = axios.create({
    baseURL: 'http://192.168.0.20:2000'
})

export default api; 