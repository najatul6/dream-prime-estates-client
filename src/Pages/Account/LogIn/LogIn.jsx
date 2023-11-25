import Lottie from 'lottie-react';
import loginImg from '../../../assets/LogIn/login.json'

const LogIn = () => {
    return (
        <div className='bg-[#00113B]'>
            <div className='max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen'>
                <div className=''>
                    <Lottie animationData={loginImg} />
                </div>
                <div className='lg:w-1/2'>

                </div>
            </div>
        </div>
    );
};

export default LogIn;