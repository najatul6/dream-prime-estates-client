import { Link } from "react-router-dom";
import useBoughtItem from "../../../../Hooks/useBoughtItem";
// import useSecureServer from "../../../../Hooks/useSecureServer";

const PropertyBought = () => {
  const [boughtItem] = useBoughtItem();
  // const secureSever = useSecureServer();
  return (
    <div>
      <h2 className="text-center my-10 text-2xl font-bold text-white">
        Total Wishlist : {boughtItem?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table text-white">
          {/* head */}
          <thead className="text-white">
            <tr>
              <th>Position</th>
              <th>Property image</th>
              <th>Property title & location</th>
              <th>Agent Info</th>
              <th>status</th>
              <th>Offered Price</th>
              <th>Make Payment</th>
            </tr>
          </thead>
          <tbody>
            {boughtItem?.map((property, index) => (
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
                <td>{property.status}</td>
                <td>$ {property.offer_price}</td>
                <th>
                  {
                    property.status=== "pending" || property.status==="rejected"?
                    <button className="btn btn-outline btn-xs" disabled>
                     {property.status}
                    </button>
                   :
                  <Link to={`/dashboard/offerPage/${property._id}`}>
                  <button className="btn btn-outline btn-xs bg-green-600 text-white hover:bg-green-600 hover:text-[#FC0]">
                    Pay Now
                  </button>
                </Link>
                  }
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertyBought;
