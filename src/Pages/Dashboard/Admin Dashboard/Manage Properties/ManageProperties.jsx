import { IoCheckmarkSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import useAllProperties from "../../../../Hooks/useAllProperties";

const ManageProperties = () => {
    const [allProperties] = useAllProperties();
    return (
        <div>
            <h2 className="text-center my-10 text-2xl font-bold text-white">Total Properties : {allProperties?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table text-white">
                    {/* head */}
                    <thead className="text-white">
                        <tr>
                            <th>Position</th>
                            <th>Property image</th>
                            <th>Property title & location</th>
                            <th>Agent Info</th>
                            <th>verification status</th>
                            <th>Price range</th>
                            <th>Approve</th>
                            <th>Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProperties?.map((property, index) => <tr key={property._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
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
                                    <span className="badge badge-ghost badge-sm">{property.property_location}</span>
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
                                <td>
                                    Approved
                                </td>
                                <td>
                                    {property.price_range}
                                </td>
                                <th>
                                    <button className="btn btn-outline btn-md"><IoCheckmarkSharp className="text-xl font-bold"/></button>
                                </th>
                                <th>
                                    <button className="btn btn-outline btn-md"><ImCross/></button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageProperties;