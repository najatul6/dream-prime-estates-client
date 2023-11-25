import Advertisement from "./Advertisement/Advertisement";
import Banner from "./Banner/Banner";
import BuyerGuide from "./BuyerGuide/BuyerGuide";
import ContactSection from "./ContactSection/ContactSection";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <Banner/>
            <Advertisement/>
            <Testimonial/>
            <BuyerGuide/>
            <ContactSection/>
        </div>
    );
};

export default Home;