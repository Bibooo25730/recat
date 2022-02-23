import axios from "axios";
// import { useNavigate } from "react-router-dom"

const initDeploy = axios.create({
    baseURL: "http://localhost:3001/api",
    timeout:3001
})

initDeploy.interceptors.request.use(function (config) {
    // const token = localStorage.getItem('Movie');
    // if (token) {
    //     config.headers.Authorization = token;
    // }
    return config;
})

initDeploy.interceptors.response.use(function (config) {
   
    return config
}, function (err) {
    // const Navigate = useNavigate()
    // if (err.response.data === 'Unauthorized') {
    //     console.log('1')
    //     error()
    //     setTimeout(() => {
    //         Navigate('/login')
    //     },1000)
      
        
    // }
    return Promise.reject(err.response);
})

export default initDeploy;