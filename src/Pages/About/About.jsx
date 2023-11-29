import Lottie from 'lottie-react';
import Img1 from '../../assets/About/Focus.json'
import Img2 from '../../assets/About/Tenacity.json'
import Img3 from '../../assets/About/Transparency.json'
import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const About = () => {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const worldClock = (timezone, title) => {
        const formatted = value.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
            timeZone: timezone,
        });
        return (
            <div key={timezone} className="my-5 flex flex-col justify-center items-center space-y-5">
                <p>{`${title}`}</p>
                <Clock value={value} />
                <p>{formatted}</p>
            </div>
        );
    };

    return (

        <div className="max-w-[1440px] mx-auto">
            <div className="py-20">
                <div className="shadow-2xl shadow-[#4C40F7] rounded-xl my-10">
                    <div className="grid grid-cols-4 bg-[#00113B] rounded-xl shadow-[#FFF] shadow-inner text-white">
                        <div>
                            {worldClock('Asia/Dhaka', 'Bangladesh')}
                        </div>
                        <div>
                            {worldClock('America/New_York', 'New York Time')}
                        </div>
                        <div>
                            {worldClock('America/Los_Angeles', 'Los Angeles Time')}
                        </div>
                        <div>
                            {worldClock('Europe/London', 'London Time')}
                        </div>
                    </div>
                </div>
                <hr />
                <h2 className="text-4xl uppercase text-white font-bold text-center my-5">Our Values</h2>
                <hr />
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-16'>
                    <div className="shadow-xl shadow-[#4C40F7]">
                        <div className="bg-[#00113B] shadow-inner text-white shadow-[#4C40F7] text-justify p-5">
                            <div className="p-5 h-[400px]">
                                <Lottie animationData={Img3} />
                            </div>
                            <hr className="my-5" />
                            <h2 className="text-2xl font-bold text-center mb-5">Focus</h2>
                            <hr className="my-5" />
                            <p className="text-lg font-bold">
                                We are focused on providing a great investing experience, and focused on the details. We are in the business of earning trust every day.
                            </p>
                        </div>
                    </div>
                    <div className="shadow-xl shadow-[#4C40F7]">
                        <div className="bg-[#00113B] shadow-inner text-white shadow-[#4C40F7] text-justify p-5">
                            <div className="p-5 h-[400px]">
                                <Lottie animationData={Img2} />
                            </div>
                            <hr className="my-5" />
                            <h2 className="text-2xl font-bold text-center mb-5">Tenacity</h2>
                            <hr className="my-5" />
                            <p className="text-lg font-bold">
                                We are here because the status quo is not good enough. We are tirelessly striving to provide better real estate investing through technology.
                            </p>
                        </div>
                    </div>
                    <div className="shadow-xl shadow-[#4C40F7]">
                        <div className="bg-[#00113B] shadow-inner text-white shadow-[#4C40F7] text-justify p-5">
                            <div className="p-5 h-[400px]">
                                <Lottie animationData={Img1} />
                            </div>
                            <hr className="my-5" />
                            <h2 className="text-2xl font-bold text-center mb-5">Transparency</h2>
                            <hr className="my-5" />
                            <p className="text-lg font-bold">
                                We maintain investor trust through sound reporting, frequent project updates, and being forthright with each other, our investors, and our partners.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row px-5 justify-between items-center text-white">
                <div className="md:w-1/2 md:p-5">
                    <h2 className="text-4xl font-bold uppercase mb-5 md:mb-10">Our Mission</h2>
                    <p className="text-xl font-bold">
                        We are a premier real estate agency dedicated to transforming dreams into reality, with a distinct focus on delivering top-tier and prime real estate offerings
                    </p>
                </div>
                <div className="md:w-1/2 md:p-5">
                    <div className="mx-auto mask mask-hexagon border-white ">
                        <img src="https://i.ibb.co/LpLygTX/owner.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;