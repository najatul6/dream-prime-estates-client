import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                slidesPerView={'auto'}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                pagination={true}
                modules={[Autoplay,Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src="https://i.ibb.co/h9kPrX7/213734019-home-for-sale-real-estate-sign-and-beautiful-new-house.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src="https://i.ibb.co/s6358St/72513589-home-for-sale-sign-in-front-of-new-home.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src="https://i.ibb.co/GxNTrML/images.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src="https://i.ibb.co/BPSqDRG/360-F-35364059-stt-HHZOkx3d-OSc5-Ns8k-WOd-Sn-ZX53-DKKv.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src="https://i.ibb.co/Fbk62xQ/depositphotos-11884590-stock-photo-house-for-sale.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src="https://i.ibb.co/wWKRjPc/4d4aae238ac9e98f1d7f42c3098472cd.jpg" alt="" />
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Banner;