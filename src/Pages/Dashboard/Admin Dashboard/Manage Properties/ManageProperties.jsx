import { IoCheckmarkSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { MdDeleteForever } from "react-icons/md";
import useAllProperties from "../../../../Hooks/useAllProperties";
import useSecureServer from "../../../../Hooks/useSecureServer";
import Swal from "sweetalert2";

const ManageProperties = () => {
  const secureServer = useSecureServer();
  const [allProperties, refetch, isLoading] = useAllProperties("");
  if (isLoading) {
    return (
      <div className="min-h-screen mx-auto flex justify-center items-center bg-transparent">
        <span className="loading loading-spinner text-warning text-4xl"></span>
      </div>
    );
  }

  const handleApprove = (id) => {
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
          .patch(`/AllProperties/update/${id}`, { property_status: "Approved" })
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
  };
  const handleReject = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to Reject?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        secureServer
          .patch(`/AllProperties/update/${id}`, { property_status: "Rejected" })
          .then((res) => {
            refetch();
            if (res.data.acknowledged === true) {
              Swal.fire({
                title: "Congrats!",
                text: "Great Property Reject Successfully",
                icon: "success",
              });
            }
          });
      }
    });
  };

  //   Delete Property
  const handleDeleteProperty = (id) => {
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
        secureServer.delete(`/AllProperties/${id}`).then((res) => {
          refetch();
          if (res.data.acknowledged === true) {
            Swal.fire({
              title: "Deleted!",
              text: "Property has been deleted form your PropertyList.",
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
        Total Properties : {allProperties?.length}
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
              <th>verification status</th>
              <th>Price range</th>
              <th>Approve</th>
              <th>Reject</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {allProperties?.map((property, index) => (
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
                    <td>{property.property_status}</td>
                    <td>{property.price_range}</td>
                    <th>
                      <button
                        onClick={() => handleApprove(property?._id)}
                        className={`btn btn-outline btn-md hover:bg-green-600 border-white ${
                          property?.property_status === "Approved"
                            ? "text-dark-blue"
                            : "text-white"
                        }`}
                        disabled={property?.property_status === "Approved"}
                      >
                        <IoCheckmarkSharp className="text-xl font-bold" />
                      </button>
                    </th>
                    <th>
                      <button
                        onClick={() => handleReject(property?._id)}
                        className={`btn btn-outline btn-md hover:bg-red-600 ${
                          property?.property_status === "Rejected"
                            ? "text-dark-blue"
                            : "text-white"
                        }`}
                        disabled={property?.property_status === "Rejected"}
                      >
                        <ImCross />
                      </button>
                    </th>
                    <th>
                      <button
                        onClick={() => handleDeleteProperty(property?._id)}
                        className="btn btn-outline btn-md hover:bg-red-600 text-white"
                      >
                        <MdDeleteForever className="text-white text-xl font-bold" />
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

export default ManageProperties;
