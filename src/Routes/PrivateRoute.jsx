import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <progress className="progress w-56 flex justify-center items-center "></progress>
    }
    if(user){
        return children ;
    }
    return <Navigate to='/logIn' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;