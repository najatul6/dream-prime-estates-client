import { MdVerified } from "react-icons/md";
import { VscUnverified } from "react-icons/vsc";
import { useLoaderData } from "react-router-dom";


const PropertiesDetails = () => {
    const properties = useLoaderData();
    const { property_image, property_title, property_location, description, agent_name, agent_image, verification_status, price_range, agent_position } = properties;
    const handleaddwishlist = (item) => {

    }
    return (
        <div className="max-w-[1440px] mx-auto">
            <div>
                <img className="w-full" src={property_image} alt="" />
                <div className="py-10 text-white">
                    <p className="text-3xl">
                        <span className="text-xl font-bold text-[#FC0]"> Title :</span> {property_title}
                    </p>
                    <p className="text-2xl">
                        <span className="text-xl font-bold text-[#FC0]"> Price-range :</span>  {price_range}
                    </p>
                    <p className="text-2xl">
                        <span className="text-xl font-bold text-[#FC0]"> Location :</span> {property_location}
                    </p>
                    <p className="text-2xl">
                        <span className="text-xl font-bold text-[#FC0]"> Description :</span> {description}
                    </p>
                    <p className="text-2xl">
                        <span className="text-xl font-bold text-[#FC0]"> Verification-Status :</span> Approved
                    </p>
                </div>
            </div>
            <div className="text-white my-5">
                <hr />
                <div className="px-5 my-3 flex justify-between">
                    <div className="flex items-center gap-4">
                        <div className="avatar">
                            <div className="w-14 rounded-full ring ring-[#4ADB61] ">
                                <img src={agent_image} alt={agent_name} />
                            </div>
                        </div>
                        <div>
                            <p className="text-xl flex items-center gap-1">
                                {agent_name}
                                <span>
                                    {
                                        verification_status === "Verified" ? <MdVerified className="text-green-600" /> : <VscUnverified className="text-red-600" />
                                    }
                                </span>
                            </p>
                            <p className="text-sm">{agent_position}</p>
                        </div>
                    </div>
                    <button onClick={() => handleaddwishlist(item)} className="btn btn-outline btn-md font-bold text-xl text-[#FC0] border-2 border-[#FC0] hover:bg-[#FC0] hover:text-white">
                        Add to Wishlist
                    </button>
                </div>
                <hr />
            </div>
        </div >
    );
};

export default PropertiesDetails;