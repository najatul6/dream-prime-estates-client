import useSoldProperties from "../../../../Hooks/useSoldProperties";

const MysoldProperties = () => {
  const [soldItem] = useSoldProperties();
  return (
    <div>
      <h2 className="text-center my-10 text-2xl font-bold text-white">
        Total Sold : {soldItem?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table text-white">
          {/* head */}
          <thead className="text-white capitalize">
            <tr>
              <th className="text-center"></th>
              <th className="text-center">Property title</th>
              <th className="text-center">Property location</th>
              <th className="text-center">buyer name</th>
              <th className="text-center">buyer email</th>
              <th className="text-center">sold price</th>
            </tr>
          </thead>
          <tbody>
            {soldItem?.map((property, index) => (
              <tr key={property._id}>
                <th className="text-center">
                  <label>{index + 1}</label>
                </th>
                <td className="text-center">{property.property_title}</td>
                <td className="text-center">
                  <div className="font-bold"> {property.property_location}</div>
                </td>
                <td className="text-center">{property?.user_name}</td>
                <td className="text-center">{property?.user_email}</td>
                <th className="text-center">
                  {property?.offer_price}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MysoldProperties;
