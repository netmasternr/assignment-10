import { Link, useLocation, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
import SocialLogin from "../Tittle/SocialLogin/SocialLogin";
import UseAuth from "../FIrebaseProvider/Hooks/UseAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const { signInUser } = UseAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // navigation
    const navigate = useNavigate();
    const location = useLocation()
    const form = location?.state || '/'


    const onSubmit = (data) => {
        const { email, password } = data;
        // signUser call
        signInUser(email, password)

            .then(result => {
                if (result.user) {
                    
                    // navigate
                    navigate(form)

                }
               
            })
            toast.success('Login successfully')

            .catch(error => {
                // console.log(error.message)
                toast.error(error.message)
            })
    }

    return (
        <div className="max-w-8xl mx-auto -mt-1  md:-mt-4  pt-28">

            <div className="bg-gray-600 rounded-lg glass max-w-lg mx-auto p-8">

                <form onSubmit={handleSubmit(onSubmit)} className=" px-7 md:px-0 md:max-w-md mx-auto">

                    <div className="mb-4">
                        <label
                            htmlFor="email" className="block text-sm font-medium text-white">Email</label>

                        <input type="email" id="email" name="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md"
                            {...register("email", { required: true })} />

                        {errors.email && <span className="text-red-800 font-bold">This field is required</span>}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="password" className="block text-sm font-medium  text-white">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md"
                            {...register("password", { required: true })} />

                        {errors.password && <span className="text-red-800 font-bold">This field is required</span>}
                    </div>

                    <button
                        type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">Login</button>
                </form>

                <div className="divider">OR</div>

                <div className="flex gap-8 justify-center">
                    <SocialLogin></SocialLogin>

                </div>

                <div className="flex items-center justify-center gap-10 mt-6">
                    <p className="text-white mt-2 text-center">Do not have an account ?</p>

                    <Link to='/register' >
                        <button
                            type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 "> Register</button>
                    </Link>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;