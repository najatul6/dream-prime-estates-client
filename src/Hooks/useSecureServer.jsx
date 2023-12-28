import axios from "axios";

const secureServer = axios.create({
    baseURL:'http://localhost:5000'
})

const useSecureServer = () => {
    secureServer.interceptors.request.use(function(config){
        const token = localStorage.getItem('user-token')
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    }, function(error){
        return Promise.reject(error)
    })

    secureServer.interceptors.response.use(function(response){
        return response;
    }, function(error){
        return Promise.reject(error)
    })

    return secureServer;
};

export default useSecureServer;