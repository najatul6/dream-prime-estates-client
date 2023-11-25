import { MdVerified } from "react-icons/md";
import { VscUnverified } from "react-icons/vsc";
import { FaMagnifyingGlassArrowRight } from "react-icons/fa6";

const PropertiesCard = ({ proparties }) => {
    const { property_image, property_title, property_location, agent_name, agent_image, verification_status, price_range, agent_position } = proparties
    return (
        <div className="card card-compact bg-[#00113B] text-white shadow-2xl shadow-[#4c40f767]">
            <figure><img src={property_image} alt={property_title} /></figure>
            <div className="card-body shadow-inner shadow-[#4c40f7] rounded-b-xl">
                <p className="text-[#4ADB61] font-bold text-lg">{price_range}</p>
                <h2 className="text-3xl font-bold">{property_title}</h2>
                <p className="text-[#FC0] text-sm">{property_location}</p>

                <div className="card-actions mt-5 justify-between">
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
                    <div>
                        <button className="btn btn-outline btn-md font-bold text-xl text-[#FC0] border-2 border-[#FC0] hover:bg-[#FC0] hover:text-white">Details <FaMagnifyingGlassArrowRight/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertiesCard;