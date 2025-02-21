import { useState } from "react";
import PropertiesCard from "./PropertiesCard/PropertiesCard";
import { FaSadCry } from "react-icons/fa";
import useAllProperties from "../../Hooks/useAllProperties";

const AllProperties = () => {
  const [search, setSearch] = useState("");
  const [allProperties] = useAllProperties(search);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <form
        onSubmit={handleSearch}
        className="shadow-2xl shadow-[#4c40f767] rounded-xl pt-48"
      >
        <div className="flex items-center p-6 space-x-6  rounded-xl shadow-inner shadow-[#FC0] ">
          <div className="flex bg-gray-100 p-4 w-full space-x-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              name="search"
              className="bg-transparent outline-none w-full text-[#4c40f767] font-bold"
              type="text"
              placeholder="Search Property Location..."
            />
          </div>
          <button
            type="submit"
            className="btn hover:bg-[#FC0] hover:text-blue-800 hover:shadow-[#FC0] border-0 text-xl bg-red-600  text-white font-semibold rounded-lg hover:shadow-lg cursor-pointer"
          >
            Search
          </button>
        </div>
      </form>
      <h1 className="text-xl font-bold text-[#FC0] mt-5 ml-5">{allProperties?.length} data found</h1>
      {allProperties?.length === 0 ? (
        <div className="flex justify-center items-center py-10">
          <p className="text-2xl font-bold text-white text-center">
            <FaSadCry className="mx-auto"/>
            No Data Found ...
          </p>{" "}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
          {allProperties?.map((properties) => (
            <PropertiesCard
              key={properties._id}
              properties={properties}
            ></PropertiesCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProperties;
