import axios from "axios";

const publicServer = axios.create({
    baseURL:'https://dream-prime-estates-server.vercel.app'
})

const UsePublicServer = () => {
    return publicServer;
};

export default UsePublicServer;