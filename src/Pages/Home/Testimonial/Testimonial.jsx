import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css';
import testimonialbg from '../../../assets/Cover/testimonial cover.jpg'
import { Parallax } from "react-parallax";

const myStyles = {
    itemShapes: Star,
    activeFillColor: '#CD9003',
    inactiveFillColor: '#A1A1A1'
}

const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([]);
    console.log(testimonial)
    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])

    return (
        <div className="my-20">
            <div className="my-5">
                <SectionHeader
                    heading='Testimonial'
                    subHeading="We Exceed Client Expectations, Always."
                />
            </div>
            <div>
                <Parallax
                    blur={{ min: -50, max: 50 }}
                    bgImage={testimonialbg}
                    strength={-200}
                >
                    <div className="bg-[#020E2D] bg-opacity-40">
                        <Swiper
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            slidesPerView={1}
                            spaceBetween={10}
                            modules={[Autoplay,]}
                            className="mySwiper"
                        >
                            {
                                testimonial?.map(review => <SwiperSlide key={review?.reviewer_name}>
                                    <div className="md:m-24 flex flex-col justify-center items-center space-y-8 text-white text-center">
                                        <div className="avatar">
                                            <div className="w-24 rounded-full ring ring-[#FC0] ring-offset-base-100 ring-offset-2">
                                                <img src={review.reviewer_image} />
                                            </div>
                                        </div>
                                        <h2 className="text-white text-xl font-bold">
                                            {review?.reviewer_name}
                                        </h2>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            itemStyles={myStyles}
                                            value={review?.rating}
                                            readOnly
                                        />
                                        <p className="text-center text-xl">
                                            {review?.property_title}
                                        </p>
                                        <p>
                                            {review?.review_description}
                                        </p>

                                    </div>
                                </SwiperSlide>)
                            }

                        </Swiper>
                    </div>

                </Parallax>
                {/* <img className="w-full" src={testimonialbg} alt="" /> */}
                {/* <Swiper
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={10}
                    modules={[Autoplay,]}
                    className="mySwiper"
                >
                    {
                        testimonial?.map(review => <SwiperSlide key={review?.reviewer_name}>
                            <div className="md:m-24 flex flex-col justify-center items-center space-y-8">
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-[#FC0] ring-offset-base-100 ring-offset-2">
                                        <img src={review.reviewer_image} />
                                    </div>
                                </div>
                                <h2 className="text-white text-xl font-bold">
                                    {review?.reviewer_name}
                                </h2>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    itemStyles={myStyles}
                                    value={review?.rating}
                                    readOnly
                                />
                                <p className="text-center text-xl">
                                    {review?.property_title}
                                </p>
                                <p>
                                    {review?.review_description}
                                </p>
                                
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper> */}
            </div>
        </div>
    );
};

export default Testimonial;