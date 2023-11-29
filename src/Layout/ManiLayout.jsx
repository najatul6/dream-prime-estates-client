import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navbar";

const ManiLayout = () => {
    return (
        <div className="bg-[#00113B] mx-auto">
            <Navbar/>
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default ManiLayout;