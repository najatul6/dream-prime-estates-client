import useAuth from "../../../../Hooks/useAuth";
import UseUserProfile from "../../../../Hooks/UseUserProfile";

const AgentProfile = () => {
    const { user } = useAuth();
    const [userprofile] = UseUserProfile();
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
                        <h2 className="text-xl"><span className="text-[#FC0] font-bold">Name : </span> {userprofile?.name}</h2>
                        <h2 className="text-xl"><span className="text-[#FC0] font-bold">Email : </span>  {userprofile?.email}</h2>
                        <h2 className="text-xl uppercase"><span className="text-[#FC0] font-bold capitalize">Role : </span> {userprofile?.role}</h2>
                    </div>
                </div>
                <div className="divider my-24"></div>
                <div className="flex justify-center items-center gap-10">
                    {/* <h2 className="text-2xl font-bold"> Wishlist : {wishlist?.length}</h2> */}
                    <h2 className="text-2xl font-bold"> Total Buy : 500</h2>
                    <h2 className="text-2xl font-bold"> Total Reviews : 500</h2>
                </div>
            </div>
        </div>
    );
};

export default AgentProfile;