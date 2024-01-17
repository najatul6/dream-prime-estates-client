import useAuth from "../../../../Hooks/useAuth";
import useWishlist from "../../../../Hooks/useWishlist";
import UseUserProfile from "../../../../Hooks/UseUserProfile";
import useBoughtItem from "../../../../Hooks/useBoughtItem";
import { useEffect, useState } from "react";
import useSecureServer from "../../../../Hooks/useSecureServer";

const UserProfile = () => {
  const { user } = useAuth();
  const [wishlist] = useWishlist();
  const [userprofile] = UseUserProfile();
  const [boughtItem] = useBoughtItem();
  const [allReviews, setAllReviews] = useState();
  const secureServer = useSecureServer();
  useEffect(() => {
    secureServer.get(`/AllREviews?email=${user?.email}`).then((res) => {
      setAllReviews(res.data);
    });
  }, [secureServer, user?.email]);

  return (
    <div className="max-w-[1440px] mx-auto text-white">
      <div className="">
        <div className="flex justify-center items-center gap-10 my-6">
          <div className="avatar">
            <div className="w-56 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
          <div className="space-y-5">
            <h2 className="text-xl">
              <span className="text-[#FC0] font-bold">Name : </span> {" "}
              {userprofile?.name}
            </h2>
            <h2 className="text-xl">
              <span className="text-[#FC0] font-bold">Email : </span> {" "}
              {userprofile?.email}
            </h2>
            <h2 className="text-xl uppercase">
              <span className="text-[#FC0] font-bold capitalize">Role : </span> {" "}
              {userprofile?.role}
            </h2>
          </div>
        </div>
        <div className="divider my-24"></div>
        <div className="flex justify-center items-center gap-10">
          <h2 className="text-2xl font-bold"> Wishlist : {wishlist?.length}</h2>
          <h2 className="text-2xl font-bold"> Total Buy : {boughtItem?.length}</h2>
          <h2 className="text-2xl font-bold"> Total Reviews : {allReviews?.length}</h2>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
