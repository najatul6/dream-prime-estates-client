import { Parallax } from "react-parallax";
import bgImage from "../../../assets/Cover/contactCover.jpg"
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";



const ContactSection = () => {
    return (
        <div>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={bgImage}
                strength={-200}
            >
                <div className='w-full h-[300px] md:h-[500px] lg:h-[600px] flex justify-center items-center'>
                    <div className='bg-[#020E2D] bg-opacity-80 md:w-3/4 py-10 md:py-20 px-3 md:px-10 text-center text-white space-y-5'>
                        <h2 className='text-3xl md:text-5xl lg:text-7xl uppercase font-bold'>WORK WITH US</h2>
                        <p className='text-base md:text-xl uppercase text-center font-bold'>
                            In Dream Prime Estates our passion is to help guide and lead a team of like-minded people who want to set a higher standard in the real estate industry and who believe our clients deserve more from their real estate experiences.
                        </p>
                        <Link to="/contact">
                            <button className="btn btn-outline hover:bg-transparent border-4 border-white text-xl font-bold text-white hover:text-[#FC0] hover:border-[#FC0]">
                                Contact Us <FaArrowCircleRight />
                            </button>
                        </Link>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default ContactSection;