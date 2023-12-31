import { TiThMenu } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";
import useWishlist from "../../Hooks/useWishlist";
import { CgProfile } from "react-icons/cg";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { VscFeedback } from "react-icons/vsc";
import { BsFillHouseDownFill } from "react-icons/bs";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdLandslide } from "react-icons/md";
import { MdRoundaboutRight } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdManageHistory } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { SiManageiq } from "react-icons/si";
import { MdDomainAdd } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { TbShoppingBagCheck } from "react-icons/tb";
import { RiGitPullRequestFill } from "react-icons/ri";
import useUserRole from "../../Hooks/useUserRole";

const Dashboard = () => {
    const [wishlist] = useWishlist();

    // TODO: GET AGENT VELUE FROM DATABASE
    const {isAdmin,isAgent,isLoading} = useUserRole();
    if(isLoading){
        return <p>Loading.....</p>
    }
    // console.log( isAgent)
    // let isAgent = false;
    // Agent Dashboard Links 
    const adminLinks = <>
        <li>
            <NavLink to="/dashboard/adminProfile" className="text-xl font-semibold"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#FC0" : "",
                    };
                }}
            >
                <CgProfile />
                Admin Profile
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/manageProperties" className="text-xl font-semibold"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#FC0" : "",
                    };
                }}
            >
                <MdManageHistory />
                Manage Properties
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/ManageUser" className="text-xl font-semibold"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#FC0" : "",
                    };
                }}
            >
                <MdManageAccounts />
                Manage Users
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/manageReviews" className="text-xl font-semibold"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#FC0" : "",
                    };
                }}
            >
                <SiManageiq />
                Manage reviews
            </NavLink>
        </li>
    </>

    // Agent Dashboard Links 
    const agentLinks = <>
        <li>
            <NavLink to="/dashboard/agentProfile" className="text-xl font-semibold"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#FC0" : "",
                    };
                }}
            >
                <CgProfile />
                Agent Profile
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/addproperties" className="text-xl font-semibold"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#FC0" : "",
                    };
                }}
            >
                <MdDomainAdd />
                Add Properties
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/addedProperties" className="text-xl font-semibold"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#FC0" : "",
                    };
                }}
            >
                <FaShop />
                My added properties
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/soldProperties" className="text-xl font-semibold"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#FC0" : "",
                    };
                }}
            >
                <TbShoppingBagCheck />
                My sold properties
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/requestProperties" className="text-xl font-semibold"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#FC0" : "",
                    };
                }}
            >
                <RiGitPullRequestFill />
                Requested properties
            </NavLink>
        </li>

    </>

    // User Dashboard Links 
    const userLinks = <>
        <li>
            <NavLink to="/dashboard/userProfile" className="text-xl font-semibold"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#FC0" : "",
                    };
                }}
            >
                <CgProfile />
                My Profile
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/wishlist" className="text-xl font-semibold"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#FC0" : "",
                    };
                }}
            >
                <PiShoppingBagOpenFill />
                My Wishlist <span className='font-bold text-[#FC0]'>( +{wishlist?.length} )</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/propertyBought" className="text-xl font-semibold"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#FC0" : "",
                    };
                }}
            >
                <BsFillHouseDownFill />
                Property Bought
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/myReviews" className="text-xl font-semibold"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#FC0" : "",
                    };
                }}
            >
                <VscFeedback />
                My Reviews
            </NavLink>
        </li>
    </>
    const navlinks = <>
        <li>
            <NavLink to="/" className="text-xl font-semibold"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#FC0" : "",
                    };
                }}
            >
                <SiHomeassistantcommunitystore />
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/allProperties" className="text-xl font-semibold"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#FC0" : "",
                    };
                }}
            >
                <MdLandslide />
                All Properties
            </NavLink>
        </li>
        <li>
            <NavLink to="/about" className="text-xl font-semibold"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#FC0" : "",
                    };
                }}
            >
                <MdRoundaboutRight />
                About
            </NavLink>
        </li>
        <li>
            <NavLink to="/contact" className="text-xl font-semibold"
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "transparent" : "",
                        color: isActive ? "#FC0" : "",
                    };
                }}
            >
                <MdConnectWithoutContact />
                Contact
            </NavLink>
        </li>
    </>
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn bg-transparent border-0 text-2xl font-extrabold text-white drawer-button lg:hidden"><TiThMenu /></label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-[#0f2a6df2] text-white shadow-inner shadow-[#7872d6]">
                    <h1 className="uppercase text-2xl font-bold py-3 text-[#FC0]">dream-prime-estates</h1>
                    <hr className="mb-8"/>
                    {
                        isAdmin ? <>
                            {adminLinks}
                        </> :
                            isAgent ? <>
                                {agentLinks}
                            </> : <>
                                {userLinks}
                            </>
                    }
                    <hr className="my-8"/>
                    {navlinks}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;