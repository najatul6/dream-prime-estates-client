/* eslint-disable react/prop-types */
import { MdVerified } from "react-icons/md";
import { VscUnverified } from "react-icons/vsc";
import { FaMagnifyingGlassArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PropertiesCard = ({ properties }) => {

  return (
    <div className="card card-compact bg-[#00113B] text-white shadow-2xl shadow-[#4c40f767]">
      <figure>
        <img className="w-full h-[300px]" src={properties?.property_image} alt={properties?.property_title} />
      </figure>
      <div className="card-body shadow-inner shadow-[#4c40f7] rounded-b-xl">
        <p className="text-[#4ADB61] font-bold text-lg">{properties?.price_range}</p>
        <h2 className="text-3xl font-bold">{properties?.property_title} </h2>
        <p
          className={`text-[#FC0] text-sm font-bold ${
            properties?.property_status === "Approved" ? "text-green-500" : "text-red-600"
          }`}
        >
          {properties?.property_status}
        </p>
        <p className="text-[#FC0] text-sm">{properties?.property_location}</p>

        <div className="card-actions mt-5 justify-between">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-14 rounded-full ring ring-[#4ADB61] ">
                <img src={properties?.agent_image} alt={properties?.agent_name} />
              </div>
            </div>
            <div>
              <p className="text-xl flex items-center gap-1">
                {properties?.agent_name}
                <span>
                  {properties?.verification_status === "Verified" ? (
                    <MdVerified className="text-green-600" />
                  ) : (
                    <VscUnverified className="text-red-600" />
                  )}
                </span>
              </p>
              <p className="text-sm">{properties?.agent_position}</p>
            </div>
          </div>
          <Link to={`/allProperties/${properties?._id}`}>
            <button className="btn btn-outline btn-md font-bold text-xl text-[#FC0] border-2 border-[#FC0] hover:bg-[#FC0] hover:text-white">
              Details <FaMagnifyingGlassArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default PropertiesCard;
