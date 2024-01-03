import { Link } from "react-router-dom";
import PropertiesCard from "../../AllProperties/PropertiesCard/PropertiesCard";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useAllProperties from "../../../Hooks/useAllProperties";

const AllPropertisesHome = () => {
    const [allproperties] = useAllProperties('');
    console.log(allproperties)
    return (
        <div>
            <SectionHeader heading="Property" subHeading="Some property is show here Please explore more and see our all property"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
                {
                    allproperties?.slice(0, 6).map(proparties => <PropertiesCard key={proparties?._id} proparties={proparties}></PropertiesCard>)
                }
            </div>
                <Link to="/allProperties" className="flex justify-center items-center">
                    <button className="btn btn-outline btn-md font-bold text-xl text-[#FC0] border-2 border-[#FC0] hover:bg-[#FC0] hover:text-white">
                        Explore More
                    </button>
                </Link>
        </div>
    );
};

export default AllPropertisesHome;