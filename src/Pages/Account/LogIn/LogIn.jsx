import Lottie from 'lottie-react';
import loginImg from '../../../assets/LogIn/Login2.json'
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import UsePublicServer from '../../../Hooks/usePublicSever';

const LogIn = () => {
    const { logIn, googleLogIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const form = location?.state?.from?.pathname || "/";
    const publicServer = UsePublicServer();

    const handleLogin = e => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        logIn(email, password)
            .then(res => {
                if (res.user) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Log in successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                navigate(form, { replace: true })
            })
            .catch(error => {
                setError(error.code);
            })
    }


    // Google Log in 

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                if (result.user) {
                    const userInformation = {
                        name: result.user.displayName,
                        email: result.user.email,
                        role: 'user',
                        profileImage: result.user.photoURL,
                    }
                    publicServer.post('/AllUsers', userInformation)
                        .then(res => {
                            if (res.data.acknowledged === true) {
                                Swal.fire({
                                    position: "top-start",
                                    icon: "success",
                                    title: "User Created Successful",
                                    showConfirmButton: false,
                                    timer: 1200
                                });
                                navigate(form, { replace: true })
                            }
                        })
                }
            })
    }


    return (
        <div className='bg-[#00113B] min-h-screen'>
            <div className='max-w-[1440px] mx-auto'>
                <div className="flex justify-center items-center gap-6 flex-col lg:flex-row">
                    <div className="w-full flex-1">
                        <Lottie animationData={loginImg} />
                    </div>
                    <div className="card w-full flex-1 px-5 py-8 shadow-inner shadow-white bg-transparent">
                        <h2 className='text-3xl font-bold text-white'>Hello, <br />Welcome Back!</h2>
                        <button onClick={handleGoogleLogIn} className='my-5 btn w-full btn-outline font-bold btn-md text-xl text-white hover:bg-[#FC0] hover:text-white'>
                            <FcGoogle />
                            Log in with Google
                        </button>
                        <div className="divider text-white">OR</div>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered text-white bg-transparent" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered bg-transparent" required />
                                <label className="label justify-end">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className='text-red-600 font-bold'>{error}</p>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-outline font-bold uppercase text-white text-xl hover:bg-[#FC0] hover:text-white">Login</button>
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