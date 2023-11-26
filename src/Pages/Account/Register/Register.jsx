import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import registerBG from "../../../assets/LogIn/signUp.json"
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { Formik } from "formik";

const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Register = () => {
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
                            <Formik
                                initialValues={{ name: '', email: '', password: '', profileImage: '' }}
                                validate={values => {
                                    const errors = {};
                                    // Name Validation 
                                    const isName = !values.name || /[!@#$%^&*(),.?":{}|<>]/.test(values.name);
                                    // Email Validation 
                                    const isEmail = !values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email);
                                    // Password Validatin 
                                    const isPassword = !values.password || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(values.password);
                                    if (isName) {
                                        errors.name = 'Remove special character';
                                    }
                                    if (isEmail) {
                                        errors.email = 'Invalid email address';
                                    }
                                    if (isPassword) {
                                        errors.password = 'Minimum 8 characters, Use one uppercase letter, one lowercase letter, one number and one special character';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        // alert(JSON.stringify(values, null, 2));
                                        console.log('Form Values:',values)
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    setFieldValue,
                                    isSubmitting,
                                }) => (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className='flex flex-col gap-6 my-5'>
                                            <button className='btn w-full btn-outline font-bold btn-md text-xl text-white hover:bg-[#FC0] hover:text-white'>
                                                <FcGoogle />
                                                Log in with Google
                                            </button>
                                            <button className='btn w-full btn-outline font-bold btn-md text-xl text-white hover:bg-[#FC0] hover:text-white'>
                                                <FaGithub />
                                                Log in with Github
                                            </button>
                                        </div>
                                        <div className="divider text-white mb-10">OR</div>
                                        <div className="space-y-3">
                                            <label className="text-lg text-white font-bold">
                                                Your Name
                                            </label>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.name}
                                                    placeholder="Type here"
                                                    className="input input-bordered text-white bg-transparent w-full"
                                                />
                                                <p className="font-bold text-red-600">
                                                    {errors.name && touched.name && errors.name}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Email Field  */}
                                        <div className="space-y-3">
                                            <label className="text-lg text-white font-bold">
                                                Your Email
                                            </label>
                                            <div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                    placeholder="Type here"
                                                    className="input input-bordered text-white bg-transparent w-full"
                                                />
                                                <p className="font-bold text-red-600">
                                                    {errors.email && touched.email && errors.email}
                                                </p>
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
                                                    name="password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password}
                                                    placeholder="Type here"
                                                    className="input input-bordered text-white bg-transparent w-full"
                                                />
                                                <p className="font-bold text-red-600">
                                                    {errors.password && touched.password && errors.password}
                                                </p>
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
                                                    onChange={(event) => {
                                                        // Update Formik values and setFieldValue for profileImage
                                                        setFieldValue('profileImage', event.currentTarget.files);
                                                      }}
                                                    onBlur={handleBlur}
                                                    required
                                                    className="file-input file-input-bordered w-full bg-transparent"
                                                />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn w-full btn-outline font-bold uppercase text-white text-xl hover:bg-[#FC0] hover:text-white" disabled={isSubmitting}>
                                            Sign Up
                                        </button>
                                    </form>
                                )}
                            </Formik>
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