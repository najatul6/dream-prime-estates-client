import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../../../../Hooks/useAuth";
import useSecureServer from "../../../../../Hooks/useSecureServer";
import Swal from "sweetalert2";
import useWishlist from "../../../../../Hooks/useWishlist";
const OfferPage = () => {
  const offerItem = useLoaderData();
  const {
    property_title,
    property_location,
    agent_name,
    agent_email,
    property_image,
    user_email,
    user_name,
    price_range,
    _id,
    status,
  } = offerItem;
  const { user } = useAuth();
  const secureServer = useSecureServer();
  const [, refetch] = useWishlist();
  const navigate = useNavigate();
  const handleMakeOffer = (e) => {
    e.preventDefault();
    const offer_price = e.target.price_offer.value;

    if (user && user?.email) {
      const propertyInfo = {
        property_title,
        property_image,
        property_location,
        agent_name,
        agent_email,
        price_range,
        offer_price,
        user_email,
        user_name,
        status,
      };

      secureServer.post("/offeredItem", propertyInfo).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-left",
            icon: "success",
            title: "Property offered Successfully",
            showConfirmButton: false,
            timer: 1000,
          });
          secureServer.delete(`/AllWishlist/${_id}`,).then((res) => {
            if (res.data.acknowledged === true) {
              refetch();
              navigate("/dashboard/offeredProperties")
            }
          });
        }
      });
    } else {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Try Again later",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold my-5 text-white">
        Make An Offer
      </h2>
      <hr />
      <div className="my-5 bg-[#203874] m-3 rounded-xl">
        <form onSubmit={handleMakeOffer} className="p-5 text-white">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Property Location</span>
            </label>
            <input
              defaultValue={property_title}
              readOnly
              type="text"
              name="title"
              placeholder="Title"
              className="input input-bordered text-white bg-transparent"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Property Location</span>
            </label>
            <input
              defaultValue={property_location}
              readOnly
              type="text"
              name="location"
              placeholder="Location"
              className="input input-bordered text-white bg-transparent"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Agent Name</span>
            </label>
            <input
              defaultValue={agent_name}
              readOnly
              type="text"
              name="agent_name"
              placeholder="Location"
              className="input input-bordered text-white bg-transparent"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              defaultValue={user_name}
              readOnly
              type="text"
              name="user_name"
              placeholder="Location"
              className="input input-bordered text-white bg-transparent"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              defaultValue={user_email}
              readOnly
              type="text"
              name="user_email"
              placeholder="Location"
              className="input input-bordered text-white bg-transparent"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                Offer Price ({price_range})
              </span>
            </label>
            <input
              type="number"
              min={parseInt(price_range.split("-")[0].replace('$', '').trim())}
              name="price_offer"
              placeholder="Type your Offer Price"
              className="input input-bordered text-white bg-transparent"
              required
            />
          </div>

          <div className="flex justify-center items-center my-4">
            <button className="btn btn-md bg-transparent border-2 border-[#FC0] font-bold uppercase text-[#FC0] hover:bg-transparent hover:border-white hover:text-white">
              Make a offer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OfferPage;
