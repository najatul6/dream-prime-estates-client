import { FcGoogle } from "react-icons/fc";
import registerBG from "../../../assets/LogIn/signUp.json"
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import UsePublicServer from "../../../Hooks/usePublicSever";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Register = () => {
    const { userCreate, updateUserProfile, googleLogIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const publicServer = UsePublicServer();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const imageFile = { image: data.profileImage[0] }
        const res = await publicServer.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const userinfo = {
                name: data.name,
                email: data.email,
                profileImage: res.data.data.display_url
            }
            userCreate(data.email, data.password)
                .then(result => {
                    if (result.user) {
                        updateUserProfile(userinfo.name, userinfo.profileImage)
                            .then(() => {
                                const createdUserInfo = {
                                    name: data.name,
                                    email: data.email,
                                    role: data.role,
                                    profileImage: res.data.data.display_url,
                                }
                                publicServer.post('/AllUsers', createdUserInfo)
                                    .then(res => {
                                        if (res.data.acknowledged === true) {
                                            Swal.fire({
                                                position: "top-start",
                                                icon: "success",
                                                title: "User Created Successful",
                                                showConfirmButton: false,
                                                timer: 1200
                                            });
                                            navigate('/')
                                        }
                                    })
                            })
                            .catch(error => {
                                Swal.fire({
                                    position: "top",
                                    icon: "warning",
                                    title: error.code,
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            })
                    }
                })
        }
        else {
            Swal.fire({
                position: "top",
                icon: "warning",
                title: "Please Try again",
                showConfirmButton: false,
                timer: 1500
            });
        }

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
                                navigate('/')
                            }
                        })
                }
            })
    }


    return (
        <div>
            <div className='bg-[#00113B] min-h-screen'>
                <div className='max-w-[1440px] mx-auto'>
                    <div className="flex justify-center items-center gap-6 flex-col-reverse lg:flex-row py-5">
                        <div className="w-full flex-1">
                            <Lottie animationData={registerBG} />
                        </div>
                        <div className="card w-full flex-1 px-5 py-8 shadow-inner shadow-white bg-transparent">
                            <h2 className='text-3xl font-bold text-white text-center mb-5'>Welcome to Dream Prime Estates! <br /> SignUp</h2>
                            <button onClick={handleGoogleLogIn} className='my-5 btn w-full btn-outline font-bold btn-md text-xl text-white hover:bg-[#FC0] hover:text-white'>
                                <FcGoogle />
                                Log in with Google
                            </button>
                            <div className="divider text-white mb-10">OR</div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label className="text-lg text-white font-bold">
                                    Your Name
                                </label>
                                <div className="flex justify-between items-center gap-6 ">
                                    <div className="space-y-3 flex-1">
                                        <div>
                                            <input type="text" name="name"  {...register("name", { required: true })}
                                                placeholder="Type here"
                                                className="input input-bordered text-white bg-transparent w-full"
                                            />
                                            {errors.name && <span className="font-bold text-red-600">This field is required</span>}
                                        </div>
                                    </div>
                                    <div >
                                        <select className="input input-bordered bg-transparent text-[#FC0]  w-full " {...register("role", { required: true })}>
                                            <option className="text-[#00113B]" value="user">Buy Property</option>
                                            <option className="text-[#00113B]" value="Agent">Sell Property</option>
                                        </select>
                                        {errors.role && <span className="font-bold text-red-600">This field is required</span>}
                                    </div>
                                </div>

                                {/* Email Field  */}
                                <div className="space-y-3">
                                    <label className="text-lg text-white font-bold">
                                        Your Email
                                    </label>
                                    <div>
                                        <input
                                            type="email" {...register("email", { required: true })} name="email"
                                            placeholder="Type your email here"
                                            className="input input-bordered text-white bg-transparent w-full"
                                        />
                                        {errors.email && <span className="font-bold text-red-600">This field is required</span>}
                                    </div>
                                </div>

                                {/* Password Field  */}
                                <div className="space-y-3 my-2">
                                    <label className="text-lg text-white font-bold">
                                        Your Password
                                    </label>
                                    <div>
                                        <input
                                            type="password"
                                            name="password" {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i })}
                                            placeholder="Type here"
                                            className="input input-bordered text-white bg-transparent w-full"
                                        />
                                        {errors.password?.type === "required" && (<p>Password is required</p>)}
                                        {errors.password?.type === "pattern" && (<p className="font-bold text-red-600">Minimum 8 characters, one uppercase letter, one lowercase letter, one number and one special character</p>)}
                                    </div>
                                </div>

                                {/* Image Upload  */}
                                <div className="space-y-3 my-2">
                                    <label className="text-lg text-white font-bold">
                                        Your Profile Picture
                                    </label>
                                    <div>
                                        <input
                                            type="file"
                                            name="profileImage"
                                            {...register("profileImage", { required: true })}
                                            className="file-input file-input-bordered w-full bg-transparent"
                                        />
                                        {errors.profileImage?.type === "required" && (<p>Image file is required</p>)}
                                    </div>
                                </div>

                                <input className="btn w-full btn-outline font-bold uppercase text-white text-xl hover:bg-[#FC0] hover:text-white" type="submit" />
                            </form>
                            <p className='text-white text-center text-lg my-5'>
                                Already Have an account? <Link to="/login" className='font-bold text-[#ffcc00af] hover:text-[#FC0]'>LogIn</Link>
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;