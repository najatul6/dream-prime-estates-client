import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useSecureServer from "../../../../Hooks/useSecureServer";
import useAuth from "../../../../Hooks/useAuth";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddProperties = () => {
    const secureServer = useSecureServer();
    const {user}= useAuth()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const imageFile = { image: data.profileImage[0] }
        const res = await secureServer.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const productInfo = {
                property_image: res.data.data.display_url,
                property_title: data.property_title,
                property_location: data.location,
                agent_name: user?.displayName,
                agent_position: data.agent_position,
                agent_image: user?.photoURL,
                verification_status: "pending",
                price_range: data.price_range,
                description: data.details,
            }
            secureServer.post("/AllProperties", productInfo)
                .then(res => {
                    if (res.data.acknowledged === true) {
                        Swal.fire({
                            title: "Property Added",
                            text: "Property Added successful",
                            icon: "success"
                        });
                        reset()
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
    return (
        <div className="m-3 my-5">
            <div className="my-5">
                <h2 className="text-2xl font-bold text-white text-center">Add Product</h2>
                <hr />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="text-lg text-white font-bold">
                    Property Title
                </label>
                <div className="space-y-3 flex-1">
                    <div>
                        <input type="text" name="name"  {...register("property_title", { required: true })}
                            placeholder="Type here"
                            className="input input-bordered text-white bg-transparent w-full"
                        />
                        {errors.name && <span className="font-bold text-red-600">This field is required</span>}
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="text-lg text-white font-bold">
                        Property Location
                    </label>
                    <div>
                        <input
                            type="text" {...register("location", { required: true })}
                            placeholder="Type your location here"
                            className="input input-bordered text-white bg-transparent w-full"
                        />
                        {errors.email && <span className="font-bold text-red-600">This field is required</span>}
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="text-lg text-white font-bold">
                        Price Range
                    </label>
                    <div>
                        <input
                            type="text" {...register("price_range", { required: true })}
                            placeholder="Type your location here"
                            className="input input-bordered text-white bg-transparent w-full"
                        />
                        {errors.email && <span className="font-bold text-red-600">This field is required</span>}
                    </div>
                </div>
                <div className="space-y-3">
                    <label className="text-lg text-white font-bold">
                        Your Position
                    </label>
                    <div>
                        <input
                            type="text" {...register("agent_position", { required: true })}
                            placeholder="Type your Position here"
                            className="input input-bordered text-white bg-transparent w-full"
                        />
                        {errors.email && <span className="font-bold text-red-600">This field is required</span>}
                    </div>
                </div>

                {/* Image Upload  */}
                <div className="space-y-3 my-2">
                    <label className="text-lg text-white font-bold">
                        Property Image
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
                <div className="space-y-3">
                    <label className="text-lg text-white font-bold">
                        Agent Name
                    </label>
                    <div>
                        <textarea type="text" {...register("details", { required: true })} name="details"
                            placeholder="Type your details here"
                            className="input input-bordered text-white bg-transparent w-full"></textarea>
                        {errors.email && <span className="font-bold text-red-600">This field is required</span>}
                    </div>
                </div>


                <input className="btn w-full btn-outline font-bold uppercase text-white text-xl hover:bg-[#FC0] hover:text-white" type="submit" />
            </form>
        </div>
    );
};

export default AddProperties;