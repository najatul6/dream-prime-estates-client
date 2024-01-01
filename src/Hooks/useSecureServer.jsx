import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const secureServer = axios.create({
    baseURL:'http://localhost:5000'
})

const useSecureServer = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth()

    secureServer.interceptors.request.use(function(config){
        const token = localStorage.getItem('user-token')
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function(error){
        return Promise.reject(error)
    })

    secureServer.interceptors.response.use(function(response){
        return response;
    }, async(error)=>{
        const status = error.response.status;
        console.log(status)
        if(status === 401|| status===403){
            await logOut();
            navigate('/logIn');
        }
        return Promise.reject(error)
    })

    return secureServer;
};

export default useSecureServer;