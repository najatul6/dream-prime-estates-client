import Swal from "sweetalert2";
import useWishlist from "../../../../Hooks/useWishlist";
import useSecureServer from "../../../../Hooks/useSecureServer";
import { Link } from "react-router-dom";

const WishList = () => {
  const [wishlist, refetch] = useWishlist();
  const secureServer = useSecureServer();
  const handleDeleteWishlist = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        secureServer.delete(`/AllWishlist/${id}`).then((res) => {
          refetch();
          if (res.data.acknowledged === true) {
            Swal.fire({
              title: "Deleted!",
              text: "Property has been deleted form your wishlist.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <h2 className="text-center my-10 text-2xl font-bold text-white">
        Total Wishlist : {wishlist?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table text-white">
          {/* head */}
          <thead className="text-white capitalize">
            <tr>
              <th>Position</th>
              <th>Property image</th>
              <th>Property title & location</th>
              <th>Agent Info</th>
              <th>Status</th>
              <th>Price range</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {wishlist?.map((property, index) => (
              <tr key={property._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask  w-12 h-12">
                        <img src={property.property_image} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {property.property_title}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {property.property_location}
                  </span>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-circle w-12 h-12">
                        <img src={property.agent_image} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{property.agent_name}</div>
                    </div>
                  </div>
                </td>
                <td>{property?.status}</td>
                <td>{property.price_range}</td>
                <th>
                    <Link to={`/dashboard/offerPage/${property._id}`}>
                      <button
                        className="btn border-white btn-outline btn-xs"
                      >
                        Make an Offer
                      </button>
                    </Link>
                </th>
                <th>
                  <button
                    onClick={() => handleDeleteWishlist(property._id)}
                    className="btn border-white btn-outline btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishList;
