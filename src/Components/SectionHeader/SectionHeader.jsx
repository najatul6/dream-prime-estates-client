
const SectionHeader = ({heading,subHeading}) => {
    return (
        <div className="text-center my-7">
            <h2 className="text-[#FC0] text-2xl font-bold capitalize"><span className="text-sm text-white">&#9733;&#9733;</span> {heading} <span className="text-sm text-white">&#9733;&#9733;</span></h2>
            <hr className="w-3/12 h-1 bg-[#FFF] border-0 rounded-xl mx-auto my-3"/>
            <p className="text-4xl font-bold capitalize text-white mb-14">{subHeading}</p>
        </div>
    );
};

export default SectionHeader;