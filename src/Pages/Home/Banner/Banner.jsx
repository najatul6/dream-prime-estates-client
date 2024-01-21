import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import img1 from '../../../assets/Banner/1.jpeg'
import img2 from '../../../assets/Banner/2.jpeg'
import img3 from '../../../assets/Banner/3.jpeg'
import img4 from '../../../assets/Banner/4.jpeg'
import img5 from '../../../assets/Banner/5.jpeg'
import img6 from '../../../assets/Banner/6.jpeg'
import img7 from '../../../assets/Banner/7.jpeg'
import img8 from '../../../assets/Banner/8.jpeg'
import img9 from '../../../assets/Banner/9.jpeg'
import img10 from '../../../assets/Banner/10.jpeg'
import img11 from '../../../assets/Banner/11.jpeg'
import img12 from '../../../assets/Banner/12.jpeg'
import img13 from '../../../assets/Banner/13.jpeg'
import img14 from '../../../assets/Banner/15.jpeg'

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
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src={img5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src={img6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src={img7} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src={img8} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src={img9} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src={img10} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src={img11} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src={img12} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src={img13} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover h-[100vh] md:h-[400px] lg:h-[600px]' src={img14} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;