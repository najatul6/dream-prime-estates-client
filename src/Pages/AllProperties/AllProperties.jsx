import { useEffect, useState } from "react";
import PropertiesCard from "./PropertiesCard/PropertiesCard";

const AllProperties = () => {
    const [allProperties, setAllProperties] = useState([]);
    useEffect(() => {
        fetch('/allpropartise.json')
            .then(res => res.json())
            .then(data => setAllProperties(data))
    }, [])
    return (
        <div className="max-w-[1440px] mx-auto">
            <div className="shadow-2xl shadow-[#4c40f767] rounded-xl">
                <div className="flex items-center p-6 space-x-6  rounded-xl shadow-inner shadow-[#FC0] ">
                    <div className="flex bg-gray-100 p-4 w-full space-x-4 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input className="bg-gray-100 outline-none w-full" type="text" placeholder="Article name or keyword..." />
                    </div>
                    <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
                        <span>All categorie</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <div className="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                        <span>Search</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-10 my-20">
                {
                    allProperties?.map(proparties => <PropertiesCard key={proparties?.property_title} proparties={proparties}></PropertiesCard>)
                }
            </div>
        </div>
    );
};

export default AllProperties;