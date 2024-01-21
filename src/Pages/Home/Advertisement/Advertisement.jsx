import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useAdvertisement from "../../../Hooks/useAdvertisement";

const Advertisement = () => {
    const [advertisement]= useAdvertisement();
    console.log(advertisement)
    
    return (
        <div className="my-20">
            <div className="my-5">
                <SectionHeader
                heading='Advertisement'
                subHeading="We are a premier real estate agency dedicated to transforming dreams into reality, with a distinct focus on delivering top-tier and prime real estate offerings."
                />
            </div>
            <div>
                <Swiper
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={10}
                    modules={[Autoplay,]}
                    className="mySwiper"
                >
                    {
                        advertisement?.map(item => <SwiperSlide key={item?._id}>
                            <img className="w-full h-[300px]" src={item?.property_image} alt="" />
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Advertisement;