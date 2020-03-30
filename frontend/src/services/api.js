import axios from 'axios'; 

const api = axios.create({ 
    baseURL: "http://localhost:2001",
})

export default api; 