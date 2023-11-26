import Lottie from 'lottie-react';
import loginImg from '../../../assets/LogIn/Login2.json'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className='bg-[#00113B] min-h-screen'>
            <div className='max-w-[1440px] mx-auto'>
                <div className="flex justify-center items-center gap-6 flex-col lg:flex-row">
                    <div className="w-full flex-1">
                        <Lottie animationData={loginImg} />
                    </div>
                    <div className="card w-full flex-1 px-5 py-8 shadow-inner shadow-white bg-transparent">
                        <h2 className='text-3xl font-bold text-white'>Hello, <br />Welcome Back!</h2>
                        <div className='grid md:grid-cols-2 gap-3 my-5'>
                            <button className='btn w-full btn-outline font-bold btn-md text-xl text-white hover:bg-[#FC0] hover:text-white'>
                                <FcGoogle />
                                Log in with Google
                            </button>
                            <button className='btn w-full btn-outline font-bold btn-md text-xl text-white hover:bg-[#FC0] hover:text-white'>
                                <FaGithub />
                                Log in with Github
                            </button>
                        </div>
                        <div className="divider text-white">OR</div>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered text-white bg-transparent" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered bg-transparent" required />
                                <label className="label justify-end">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline font-bold uppercase text-white text-xl hover:bg-[#FC0] hover:text-white">Login</button>
                            </div>
                        </form>
                        <p className='text-white text-center text-lg'>
                            New Here? <Link to="/register" className='font-bold text-[#ffcc00af] hover:text-[#FC0]'>Create an account.</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;