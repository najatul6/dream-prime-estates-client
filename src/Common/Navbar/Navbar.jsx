import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/DreamprimeLogo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { MdLogout } from 'react-icons/md';
import useWishlist from '../../Hooks/useWishlist';
import { MdAddHomeWork } from "react-icons/md";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const [wishlist] = useWishlist();
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
                Contact
            </NavLink>
        </li>
    </>

    const handleLogOut = () => [
        logOut()
    ]
    return (
        <div className="navbar fixed z-10 bg-[#00113B] bg-opacity-70 text-white max-w-[1920px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-gray-100 shadow-inner bg-[#00113B] rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <img className='md:w-[220px] w-full' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex items-center gap-3'>
                            <Link to="/dashboard/wishlist">
                                <button className='btn bg-transparent hover:bg-transparent border-0 rounded-full relative'>
                                    <MdAddHomeWork className='text-3xl text-white' />
                                    <div className='absolute right-0 bottom-0  text-[#FC0] p-1 rounded-full'>
                                        {wishlist?.length}
                                    </div>
                                </button>
                            </Link>
                            <div className="dropdown dropdown-end z-[50]">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu dropdown-content bg-base-100 rounded-box min-w-max">
                                    <li>
                                        <a className="justify-between font-bold text-[#FC0]">
                                            {user.displayName}
                                        </a>
                                    </li>
                                    <div className='my-4'>
                                        <li>
                                            <NavLink to="/dashboard/userProfile" className="text-xl font-semibold"
                                                style={({ isActive }) => {
                                                    return {
                                                        backgroundColor: isActive ? "transparent" : "",
                                                        color: isActive ? "#FC0" : "",
                                                    };
                                                }}
                                            >
                                                Dashboard
                                            </NavLink>
                                        </li>
                                    </div>
                                    <Link onClick={handleLogOut} className="btn uppercase bg-[#4C40F7] text-white hover:text-[#FC0] hover:bg-[#4C40F7] text-xl font-bold">Log Out <MdLogout></MdLogout></Link>
                                </ul>
                            </div>
                        </div>
                        :
                        <div className='flex items-center gap-3'>
                            <Link to="/dashboard/wishlist">
                                <button className='btn bg-transparent hover:bg-transparent border-0 rounded-full relative'>
                                    <MdAddHomeWork className='text-3xl text-white' />
                                    <div className='absolute right-0 bottom-0  text-[#FC0] p-1 rounded-full'>
                                        {wishlist?.length}
                                    </div>
                                </button>
                            </Link>
                            <Link to='/logIn' className="btn uppercase bg-[#4C40F7] text-white hover:text-[#FC0] hover:bg-[#4C40F7] text-xl font-bold">Log In</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;