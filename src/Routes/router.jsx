import { createBrowserRouter } from "react-router-dom";
import ManiLayout from "../Layout/ManiLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import AllProperties from "../Pages/AllProperties/AllProperties";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import LogIn from "../Pages/Account/LogIn/LogIn";
import Register from "../Pages/Account/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import PropertiesDetails from "../Pages/AllProperties/PropertiesDetails/PropertiesDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ManiLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'allProperties',
                element:<AllProperties/>
            },
            {
                path:'allProperties/:id',
                element:<PrivateRoute><PropertiesDetails/></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/AllProperties/${params.id}`)
            },
            {
                path:'dashboard',
                element:<PrivateRoute><Dashboard/></PrivateRoute>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'contact',
                element:<Contact/>
            },
        ]
    },
    {
        path:'/logIn',
        element:<LogIn/>
    },
    {
        path:'/register',
        element:<Register/>
    },
]);

export default router;