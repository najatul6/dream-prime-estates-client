import { Link } from "react-router-dom";
import useBoughtItem from "../../../../Hooks/useBoughtItem";
// import useSecureServer from "../../../../Hooks/useSecureServer";

const PropertyBought = () => {
  const [boughtItem] = useBoughtItem();
  // const secureSever = useSecureServer();
  return (
    <div>
      <h2 className="text-center my-10 text-2xl font-bold text-white">
        Total Bought : {boughtItem?.length}
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
              <th>Offered Price</th>
              <th className="text-center">status</th>
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
                <td>$ {property.offer_price}</td>
                <th className="text-center text-green-600">
                    
                     {property.status}
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
