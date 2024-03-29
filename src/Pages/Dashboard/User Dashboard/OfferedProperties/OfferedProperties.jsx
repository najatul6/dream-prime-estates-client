import { Link } from "react-router-dom";
import useOfferList from "../../../../Hooks/useOfferList";
import Swal from "sweetalert2";
import useSecureServer from "../../../../Hooks/useSecureServer";

const OfferedProperties = () => {
  const [offerList, refetch] = useOfferList();
  const secureServer = useSecureServer();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to Delete?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        secureServer.delete(`/offeredItem/${id}`).then((res) => {
          refetch();
          if (res.data.acknowledged === true) {
            Swal.fire({
              title: "Congrats!",
              text: "Great Property Approved",
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
        Total Offered : {offerList?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table text-white">
          {/* head */}
          <thead className="text-white capitalize">
            <tr>
              <th></th>
              <th>Property image</th>
              <th>Property title & location</th>
              <th>Agent Info</th>
              <th>Status</th>
              <th>Offer Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {offerList?.map((property, index) => (
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
                  <div className="font-bold">{property.agent_name}</div>
                </td>
                <td>{property?.status}</td>
                <td>{property.offer_price}</td>
                <th className="text-center">
                  {property.status === "Approved" ? (
                    <Link to={`/dashboard/payment/${property?._id}`}>
                      <button className="btn btn-outline btn-xs">
                        Pay Now
                      </button>
                    </Link>
                  ) : property.status === "Rejected" ? (
                    <button
                      onClick={() => handleDelete(property?._id)}
                      className="btn btn-outline btn-xs"
                    >
                      Delete
                    </button>
                  ) : (
                    <button className="btn btn-outline btn-xs" disabled>
                      Pay Now
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OfferedProperties;
