import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const ErrorPage = () => {

    return (
        <div className="">
            <div className="bg-indigo-900 relative overflow-hidden h-[600px] lg:h-screen">
                <img src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9" className="absolute h-full w-full object-cover" />
                <div className="inset-0 bg-black opacity-25 absolute">
                </div>
                <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-2 xl:py-40">
                    <div className="w-full flex flex-col items-center relative z-10">
                        <h1 className="font-extrabold text-3xl md:text-5xl text-center text-white leading-tight mt-4">
                            Data Not Found! <br /> You are all alone here!
                        </h1>
                        <p className="font-extrabold text-8xl my-44 text-white animate-bounce flex flex-col justify-center items-center">
                            404
                        <Link to='/' className="">
                            <button className="btn btn-lg text-white bg-[#FC0] font-bold border-0 shadow-inner shadow-gray-600">
                                <RiArrowGoBackFill />
                                Back to home
                            </button>
                        </Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;