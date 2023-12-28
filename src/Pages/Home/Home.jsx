import useAuth from "../../Hooks/useAuth";
import Advertisement from "./Advertisement/Advertisement";
import AllPropertisesHome from "./AllPropertisesHome/AllPropertisesHome";
import Banner from "./Banner/Banner";
import BuyerGuide from "./BuyerGuide/BuyerGuide";
import ContactSection from "./ContactSection/ContactSection";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  const { user } = useAuth();
  console.log(user?.email)
  return (
    <div className="">
      <Banner />
      <div className="max-w-[1920px] mx-auto px-5">
        <Advertisement />
        <AllPropertisesHome />
        <Testimonial />
        <BuyerGuide />
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
