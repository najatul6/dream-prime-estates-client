import Swal from "sweetalert2";
import useSecureServer from "../../../../Hooks/useSecureServer";
// import { useQuery } from "@tanstack/react-query";
import useAllUser from "../../../../Hooks/useAllUser";

const ManageUser = () => {
  const secureServer = useSecureServer();
  const [AllUsers,refetch] = useAllUser();

  //   Make User
  const handleMakeUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to give User Role?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        secureServer
          .patch(`/AllUsers/${user._id}`, { role: "User" })
          .then((res) => {
            refetch();
            if (res.data.acknowledged === true) {
              Swal.fire({
                title: "Congrats!",
                text: "Now user get User Role",
                icon: "success",
              });
            }
          });
      }
    });
  };

  //   Make Agent
  const handleMakeAgent = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to give Agent Role?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        secureServer
          .patch(`/AllUsers/${user._id}`, { role: "Agent" })
          .then((res) => {
            refetch();
            if (res.data.acknowledged === true) {
              Swal.fire({
                title: "Congrats!",
                text: "Now user get Agent Role",
                icon: "success",
              });
            }
          });
      }
    });
  };

  //   Make Admin
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to give Admin Role?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        secureServer
          .patch(`/AllUsers/${user._id}`, { role: "Admin" })
          .then((res) => {
            refetch();
            if (res.data.acknowledged === true) {
              Swal.fire({
                title: "Congrats!",
                text: "Now user get Admin Role",
                icon: "success",
              });
            }
          });
      }
    });
  };

  //   User Delete
  const handleDeleteUser = (user) => {
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
        secureServer.delete(`/AllUsers/${user._id}`).then((res) => {
          refetch();
          if (res.data.acknowledged === true) {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted form your UserList.",
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
        Total Users : {AllUsers?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table text-white">
          {/* head */}
          <thead className="text-white">
            <tr>
              <th>Position</th>
              <th>Profile image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center">Action</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {AllUsers?.map((user, index) => (
              <tr key={user._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask  w-12 h-12">
                        <img src={user.profileImage} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className="flex flex-col gap-y-2 justify-center items-center">
                  <button
                    onClick={() => handleMakeAgent(user)}
                    className={`btn btn-outline btn-xs`}
                    disabled={user.role === "Agent"}
                  >
                    Make Agent
                  </button>

                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-outline btn-xs"
                    disabled={user.role === "Admin"}
                  >
                    Make Admin
                  </button>
                </td>
                <th>
                  <button
                    onClick={() => handleMakeUser(user)}
                    className="btn btn-outline btn-xs"
                    disabled={user.role === "user"}
                  >
                    Make User
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-outline btn-xs"
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

export default ManageUser;
