import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const Advertisement = () => {
    const [advertisement, setAdvertisement] = useState();
    console.log(advertisement)
    useEffect(() => {
        fetch('/advertise.json')
            .then(res => res.json())
            .then(data => setAdvertisement(data))
    }, [])
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
                        advertisement?.map(item => <SwiperSlide key={item.id}>
                            <img className="w-full h-[300px]" src={item.property.image} alt="" />
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Advertisement;