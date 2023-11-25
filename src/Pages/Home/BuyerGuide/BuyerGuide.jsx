import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const BuyerGuide = () => {
    return (
        <div className="my-20">
            <SectionHeader
                heading="BUYER'S GUIDE"
                subHeading="STEPS TO SUCCESS FOR BUYING YOUR HOME"
            />
            <div className="text-white grid grid-cols-3 gap-8">
                <div className="shadow-inner shadow-slate-400 p-5 space-y-4">
                    <h4 className="text-xl font-bold">STEP - 1</h4>
                    <h2 className="text-3xl font-bold">Let&#39;s Connect</h2>
                    <p className="text-lg text-justify">During our initial call or meeting, we&#39;ll get to know you and your goals and determine if we want to work together. We&#39;ll also take this time to explain how we plan to represent and guide you at every step of the process.</p>
                </div>
                <div className="shadow-inner shadow-slate-400 p-5 space-y-4">
                    <h4 className="text-xl font-bold">STEP - 2</h4>
                    <h2 className="text-3xl font-bold">Discuss Options</h2>
                    <p className="text-lg text-justify">Next, we&#39;ll uncover what you&#39;re truly looking for and create your ultimate wishlist. This wishlist should include things like your likes, dislikes, and must-haves so we can begin narrowing down the homes on the market that fit your criteria.</p>
                </div>
                <div className="shadow-inner shadow-slate-400 p-5 space-y-4">
                    <h4 className="text-xl font-bold">STEP - 3</h4>
                    <h2 className="text-3xl font-bold">Get Pre-Approved</h2>
                    <p className="text-lg text-justify">The last thing you want to do is fall in love with a home that&#39;s simply outside of your price range. Getting pre-approved for a loan will prevent this from happening and allow you to focus on looking at homes that not only meet your criteria but more importantly, fit within your price range.</p>
                </div>
                <div className="shadow-inner shadow-slate-400 p-5 space-y-4">
                    <h4 className="text-xl font-bold">STEP - 4</h4>
                    <h2 className="text-3xl font-bold">Find The One</h2>
                    <p className="text-lg text-justify">Not only will we send you listings that meet your criteria, but we&#39;ll also set you up on MLS alerts so new listings are sent straight to your inbox. After browsing homes online and visiting the ones you really love in person, we&#39;ll get together and decide which home is the one!</p>
                </div>
                <div className="shadow-inner shadow-slate-400 p-5 space-y-4">
                    <h4 className="text-xl font-bold">STEP - 5</h4>
                    <h2 className="text-3xl font-bold">Write An Offer</h2>
                    <p className="text-lg text-justify">We&#39;ll offer our professional opinion of value and help you write a competitive offer, which is important in such a competitive market. Lucky for you, we&#39;re experts in this market and you can count on us to always do what&#39;s in your best interest.</p>
                </div>
                <div className="shadow-inner shadow-slate-400 p-5 space-y-4">
                    <h4 className="text-xl font-bold">STEP - 6</h4>
                    <h2 className="text-3xl font-bold">Close & Celebrate!</h2>
                    <p className="text-lg text-justify">Congratulations! It&#39;s time to close on your dream home. On settlement day, the final paperwork is signed and the home is officially handed over to you. You&#39;ll receive the keys and that&#39;s it, you&#39;re officially a new homeowner!</p>
                </div>
            </div>
        </div>
    );
};

export default BuyerGuide;