import { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import UsePublicServer from "../../../../Hooks/usePublicSever";

const MyReviews = () => {
  const publicServer = UsePublicServer();
  const { user } = useAuth();
  const [allReviews, setAllReviews] = useState();
  useEffect(() => {
    publicServer.get(`/AllREviews?email=${user?.email}`).then((res) => {
      setAllReviews(res.data);
    });
  }, [publicServer, user?.email]);

  console.log(allReviews);
  return (
    <div className="px-3 pb-5">
      <h2 className="text-center py-5 text-2xl font-bold text-white">
        Total Reviews : {allReviews?.length}
      </h2>
      <hr className="py-5" />
      {allReviews?.length > 0 ? (
        <div className="flex flex-col gap-6">
          {allReviews?.map((review, index) => (
            <div
              key={review?._id}
              className="card bg-transparent shadow-xl rounded-xl py-2"
            >
              <div className="card-body shadow-inner shadow-white rounded-xl">
                <h2 className="text-xl font-bold text-white text-center">
                  {index + 1}
                </h2>
                <p className="text-center underline font-bold uppercase text-dark-yellow">
                  {review?.property_title}
                </p>
                <p className="text-justify text-white">
                  {review?.review_description}
                </p>
                {/* <div className="card-actions justify-center">
            <button className="btn btn-outline btn-md font-bold text-xl text-[#FC0] border-2 border-[#FC0] hover:bg-[#FC0] hover:text-white">Delete</button>
          </div> */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-3xl font-bold text-center text-white">No Reviews</p>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
