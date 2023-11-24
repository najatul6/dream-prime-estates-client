import { createBrowserRouter } from "react-router-dom";
import ManiLayout from "../Layout/ManiLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import AllProperties from "../Pages/AllProperties/AllProperties";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import LogIn from "../Pages/Account/LogIn/LogIn";
import Register from "../Pages/Account/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ManiLayout/>,
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
                path:'dashboard',
                element:<Dashboard/>
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