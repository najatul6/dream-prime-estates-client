import axios from "axios";

const publicServer = axios.create({
    baseURL:'http://localhost:5000'
})

const UsePublicServer = () => {
    return publicServer;
};

export default UsePublicServer;