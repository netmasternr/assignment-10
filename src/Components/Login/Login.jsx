import { Link } from "react-router-dom";
import "aos/dist/aos.css"; 
import AOS from "aos"; 
import { useEffect } from "react";

const Login = () => {

    // for aos animation
    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div className="max-w-8xl mx-auto -mt-1  md:-mt-4  pt-28">

            <div data-aos="zoom-in" data-aos-delay="100" data-aos-anchor=".example-selector" className="bg-gray-600 rounded-lg glass max-w-lg mx-auto p-8">
                <form className=" px-7 md:px-0 md:max-w-md mx-auto">

                    <div className="mb-4">
                        <label 
                        data-aos="fade-up" data-aos-delay="200" htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md" />
                    </div>

                    <div className="mb-4">
                        <label 
                        data-aos="fade-up" data-aos-delay="200" htmlFor="password" className="block text-sm font-medium  text-white">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md" />
                    </div>

                    <button 
                    data-aos="fade-up" data-aos-delay="200" type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">Login</button>
                </form>

                <div className="flex items-center justify-center gap-10 mt-6">
                    <p data-aos="fade-up" data-aos-delay="200" className="text-white mt-2 text-center">Do not have an account ?</p>

                    <Link to='/register' >
                        <button 
                        data-aos="fade-up" data-aos-delay="200" type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 "> Register</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;