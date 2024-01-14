import useRequestedProperties from "../../../../Hooks/useRequestedProperties";
import { IoCheckmarkSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";
import useSecureServer from "../../../../Hooks/useSecureServer";

const RequestedProperties = () => {
    const [requestList,refetch] = useRequestedProperties();
    const secureServer = useSecureServer();
    console.log(requestList)
    
    const handleApproved=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to Approve?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!",
          }).then((result) => {
            if (result.isConfirmed) {
              secureServer
                .patch(`/offeredItem/${id}`, { status: "Approved" })
                .then((res) => {
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
    }

    const handleReject=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to Approve?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!",
          }).then((result) => {
            if (result.isConfirmed) {
              secureServer
                .patch(`/offeredItem/${id}`, { status: "Rejected" })
                .then((res) => {
                  refetch();
                  if (res.data.acknowledged === true) {
                    Swal.fire({
                      title: "Congrats!",
                      text: "Property Rejected",
                      icon: "success",
                    });
                  }
                });
            }
          });
    }
    return (
        <div>
            <h2 className="text-center my-10 text-2xl font-bold text-white">Total Requested Properties : {requestList?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table text-white">
                    {/* head */}
                    <thead className="text-white">
                        <tr>
                            <th>Position</th>
                            <th>Property title & location</th>
                            <th>Agent Info</th>
                            <th>Status</th>
                            <th>Offered Price</th>
                            <th>Offered Price</th>
                            <th>Approve</th>
                            <th>Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requestList?.map((property, index) => <tr key={property._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    {property.property_title}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{property.property_location}</span>
                                </td>
                                <td>
                                            <div className="font-bold">{property.user_name}</div>
                                            <div className="font-bold text-gray-600">{property.user_email}</div>
                                </td>
                                <td>
                                    {property.status}
                                    
                                </td>
                                <td>
                                    {property.price_range}
                                </td>
                                <td>
                                    {property.offer_price}
                                </td>
                                <th>
                                    <button onClick={() => handleApproved(property?._id)} className={`btn btn-outline btn-md hover:bg-green-600 border-white ${property?.property_status === "Approved"? "text-dark-blue" :"text-white"}`} disabled={property?.status==="Approved"}><IoCheckmarkSharp className="text-xl font-bold"/></button>
                                </th>
                                <th>
                                    <button onClick={() => handleReject(property?._id)} className={`btn btn-outline btn-md hover:bg-red-600 ${property?.status === "Rejected" ? "text-dark-blue":"text-white"}`} disabled={property?.property_status==="Rejected"}><ImCross /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default RequestedProperties;