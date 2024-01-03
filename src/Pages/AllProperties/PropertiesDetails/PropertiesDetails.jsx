import { MdVerified } from "react-icons/md";
import { VscUnverified } from "react-icons/vsc";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useSecureServer from "../../../Hooks/useSecureServer";
import useWishlist from "../../../Hooks/useWishlist";

const PropertiesDetails = () => {
  const properties = useLoaderData();
  const {
    property_image,
    property_title,
    property_location,
    description,
    agent_name,
    agent_email,
    agent_image,
    verification_status,
    property_verification_status,
    price_range,
    agent_position,
  } = properties;
  const { user } = useAuth();
  const secureServer = useSecureServer();
  const [, refetch] = useWishlist();
  const handleaddwishlist = () => {
    if (user && user.email) {
      const wishlistInfo = {
        property_image,
        property_title,
        property_location,
        agent_name,
        agent_email,
        agent_image,
        property_verification_status,
        price_range,
        user_email: user.email,
        user_name: user.displayName,
      };
      secureServer.post("/AllWishlist", wishlistInfo).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-left",
            icon: "success",
            title: "Property is Added in your wishlist",
            showConfirmButton: false,
            timer: 1000,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Pleas Log in",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="max-w-[1440px] mx-auto">
      <div>
        <img className="w-full" src={property_image} alt={property_title} />
        <div className="py-10 text-white">
          <p className="text-3xl">
            <span className="text-xl font-bold text-[#FC0]"> Title :</span>{" "}
            {property_title}
          </p>
          <p className="text-2xl">
            <span className="text-xl font-bold text-[#FC0]">
              {" "}
              Price-range :
            </span>{" "}
            {price_range}
          </p>
          <p className="text-2xl">
            <span className="text-xl font-bold text-[#FC0]"> Location :</span>{" "}
            {property_location}
          </p>
          <p className="text-2xl">
            <span className="text-xl font-bold text-[#FC0]">
              {" "}
              Description :
            </span>{" "}
            {description}
          </p>
          <p className="text-2xl">
            <span className="text-xl font-bold text-[#FC0]">
              {" "}
              Verification-Status :
            </span>{" "}
            Approved
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
                  {verification_status === "Verified" ? (
                    <MdVerified className="text-green-600" />
                  ) : (
                    <VscUnverified className="text-red-600" />
                  )}
                </span>
              </p>
              <p className="text-sm">{agent_position}</p>
            </div>
          </div>
          <button
            onClick={handleaddwishlist}
            className="btn btn-outline btn-md font-bold text-xl text-[#FC0] border-2 border-[#FC0] hover:bg-[#FC0] hover:text-white"
          >
            Add to Wishlist
          </button>
        </div>
        <hr />
        <div className="my-5">
          <h1 className="text-xl font-bold text-[#FC0]">
            Reviews {properties?.reviews?.length}
          </h1>
          <div>
            {properties?.reviews?.map((review, index) => (
              <div className="my-5" key={index}>
                <div className="flex gap-6 flex-col lg:flex-row items-center">
                  <div className="avatar">
                    <div className="w-10 rounded">
                      <img
                        src={review.userImage}
                        className="rounded-full"
                        alt={review.username}
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[#FC0] text-lg">{review.username}</h1>
                    <h1 className="text-yellow-200">{review.useremail}</h1>
                  </div>
                </div>
                <p className="text-justify py-1 pl-16 text-white text-lg">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesDetails;
