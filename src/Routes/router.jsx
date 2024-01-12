import { createBrowserRouter } from "react-router-dom";
import ManiLayout from "../Layout/ManiLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import AllProperties from "../Pages/AllProperties/AllProperties";
import Contact from "../Pages/Contact/Contact";
import LogIn from "../Pages/Account/LogIn/LogIn";
import Register from "../Pages/Account/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import PropertiesDetails from "../Pages/AllProperties/PropertiesDetails/PropertiesDetails";
import Dashboard from "../Layout/Dashboard/Dashboard";
import UserProfile from "../Pages/Dashboard/User Dashboard/My Profile/UserProfile";
import AgentProfile from "../Pages/Dashboard/Agent Dashboard/Agent Profile/AgentProfile";
import AdminProfile from "../Pages/Dashboard/Admin Dashboard/Admin Profile/AdminProfile";
import MyReviews from "../Pages/Dashboard/User Dashboard/My reviews/MyReviews";
import PropertyBought from "../Pages/Dashboard/User Dashboard/Property bought/PropertyBought";
import MyAddedProperties from "../Pages/Dashboard/Agent Dashboard/My added properties/MyAddedProperties";
import MysoldProperties from "../Pages/Dashboard/Agent Dashboard/My sold properties/MysoldProperties";
import RequestedProperties from "../Pages/Dashboard/Agent Dashboard/Requested properties/RequestedProperties";
import ManageProperties from "../Pages/Dashboard/Admin Dashboard/Manage Properties/ManageProperties";
import ManageReviews from "../Pages/Dashboard/Admin Dashboard/Manage reviews/ManageReviews";
import ManageUser from "../Pages/Dashboard/Admin Dashboard/Manage Users/ManageUser";
import WishList from "../Pages/Dashboard/User Dashboard/WishList/WishList";
import OfferPage from "../Pages/Dashboard/User Dashboard/WishList/Offer Page/OfferPage";
import AddProperties from "../Pages/Dashboard/Agent Dashboard/Add Properties/AddProperties";
import OfferedProperties from "../Pages/Dashboard/User Dashboard/OfferedProperties/OfferedProperties";
import Payment from "../Pages/Dashboard/User Dashboard/Payment/Payment";

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
    {
        path:'/dashboard',
        element:<Dashboard/>,
        children:[
            // User Section 
            {
            
                path:'userProfile',
                element:<UserProfile/>
            },
            {
                path:'Reviews',
                element:<MyReviews/>
            },
            {
                path:'propertyBought',
                element:<PropertyBought/>
            },
            {
                path:'offerPage/:id',
                element:<OfferPage/>,
                loader:({params})=>fetch(`http://localhost:5000/AllWishlist/${params.id}`)
            },
            {
                path:'wishlist',
                element: <PrivateRoute><WishList/></PrivateRoute>
            },
            {
                path:'offeredProperties',
                element: <PrivateRoute><OfferedProperties/></PrivateRoute>
            },
            {
                path:'payment',
                element: <Payment/>
            },

            // Agent Section 
            {
                path:'agentProfile',
                element:<AgentProfile/>
            },
            {
            
                path:'addproperties',
                element:<AddProperties/>
            },
            {
                path:'addedProperties',
                element:<MyAddedProperties/>
            },
            {
                path:'soldProperties',
                element:<MysoldProperties/>
            },
            {
                path:'requestProperties',
                element:<RequestedProperties/>
            },

            // Admin Section
            {
                path:'adminProfile',
                element:<AdminProfile/>
            },
            {
                path:'manageProperties',
                element:<ManageProperties/>
            },
            {
                path:'manageReviews',
                element:<ManageReviews/>
            },
            {
                path:'ManageUser',
                element:<ManageUser/>
            },

        ]
    }
]);

export default router;