import { Link } from "react-router-dom";
import useOfferList from "../../../../Hooks/useOfferList";

const OfferedProperties = () => {
  const [offerList] = useOfferList();
  console.log(offerList);
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
                    <Link to={`/dashboard/offerPage/${property._id}`}>
                      <button className="btn btn-outline btn-xs">
                        Pay Now
                      </button>
                    </Link>
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
