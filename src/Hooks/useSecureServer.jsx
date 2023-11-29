import axios from "axios";

const secureServer = axios.create({
    baseURL:'http://localhost:5000'
})

const useSecureServer = () => {
    return secureServer;
};

export default useSecureServer;