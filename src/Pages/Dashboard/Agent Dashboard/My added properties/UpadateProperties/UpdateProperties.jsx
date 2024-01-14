import { useLoaderData,  useNavigate } from "react-router-dom";
import useSecureServer from "../../../../../Hooks/useSecureServer";
import Swal from "sweetalert2";

const UpdateProperties = () => {
  const property = useLoaderData();
  const { _id, property_title, property_location, price_range, description } =
    property;
  const secureServer = useSecureServer();
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    const from = e.target;
    const title = from.title.value;
    const location = from.location.value;
    const price = from.price.value;
    const description = from.description.value;
    secureServer
      .patch(`/AllProperties/${_id}`, {
        property_status:"pending",
        property_title: title,
        property_location: location,
        price_range: price,
        description: description,
      })
      .then((res) => {
        if (res.data.acknowledged === true) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Property has been Updated",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(`/dashboard/addedProperties`);
        }
        console.log(res.data);
      });
  };

  return (
    <div>
      <h2 className="text-center my-10 text-2xl font-bold text-white">
        Update now
      </h2>
      <hr />
      <div className="w-3/4 mx-auto my-10">
        <form onSubmit={handleUpdate}>
          <div className="flex flex-col text-white my-5">
            <label className="font-bold text-xl my-1">Property Title</label>
            <input
              className="bg-transparent border rounded-lg py-1 text-lg px-1"
              type="text"
              defaultValue={property_title}
              name="title"
              id=""
            />
          </div>
          <div className="flex flex-col text-white my-5">
            <label className="font-bold text-xl my-1">Property Address</label>
            <input
              className="bg-transparent border rounded-lg py-1 text-lg px-1"
              type="text"
              defaultValue={property_location}
              name="location"
              id=""
            />
          </div>
          <div className="flex flex-col text-white my-5">
            <label className="font-bold text-xl my-1">Price Range</label>
            <input
              className="bg-transparent border rounded-lg py-1 text-lg px-1"
              type="text"
              defaultValue={price_range}
              name="price"
              id=""
            />
          </div>
          <div className="flex flex-col text-white my-5">
            <label className="font-bold text-xl my-1">Description</label>
            <textarea
              className="bg-transparent border rounded-lg py-1 text-lg px-1"
              type="text"
              defaultValue={description}
              name="description"
              id=""
            />
          </div>
          <button
            type="submit"
            className="btn w-full bg-transparent hover:bg-[#FC0] border-[#FC0] border-2 text-xl font-bold text-white"
          >
            Update Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProperties;
