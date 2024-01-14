import useAllProperties from "../../../../Hooks/useAllProperties";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


const MyAddedProperties = () => {
    const [allProperties] = useAllProperties("")
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
                        <th>verification status</th>
                        <th>Price range</th>
                        <th className="text-center">Action</th>
                        <th className="text-center">Action</th>
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
                                {property.property_status}
                            </td>
                            <td>
                                {property.price_range}
                            </td>
                            <th className="text-center">
                                <button className="btn bg-transparent hover:bg-green-600 text-white border-green-600 btn-md">
                                    <FaEdit/>
                                    Update
                                    </button>
                            </th>
                            <th className="text-center">
                                <button className="btn bg-transparent hover:bg-red-600 text-white border-red-600 btn-md">
                                    <MdDeleteForever/>
                                    Delete
                                    </button>
                            </th>
                            
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    </div>
    );
};

export default MyAddedProperties;