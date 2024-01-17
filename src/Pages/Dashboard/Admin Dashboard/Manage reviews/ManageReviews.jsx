import useAllReviews from "../../../../Hooks/useAllReviews";

const ManageReviews = () => {
  const [allReviews] = useAllReviews();
  return (
    <div className="px-3 pb-5">
      <h2 className="text-center py-5 text-2xl font-bold text-white">
        Total Reviews : {allReviews?.length}
      </h2>
      <hr className="py-5" />
      {allReviews?.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          {allReviews?.map((review, index) => (
            <div
              key={review?._id}
              className="card bg-transparent shadow-xl rounded-xl py-2"
            >
              <div className="card-body shadow-inner shadow-white rounded-xl">
                <h2 className="text-xl font-bold text-white">
                  No. : {index + 1}
                </h2>
                <p className="font-bold text-white">
                  <span className="font-bold text-dark-yellow uppercase">Name : </span>
                  {review?.reviewer_name}
                </p>
                <p className="font-bold text-white">
                  <span className="font-bold text-dark-yellow uppercase">
                    Title :
                  </span>{" "}
                  {review?.property_title}
                </p>
                <p className="text-justify text-white font-bold">
                  <span className="font-bold text-dark-yellow uppercase">Description : </span>
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
          <p className="text-3xl font-bold text-center text-white">
            No Reviews
          </p>
        </div>
      )}
    </div>
  );
};

export default ManageReviews;
