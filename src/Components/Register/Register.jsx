import { Link } from "react-router-dom";
import "aos/dist/aos.css"; 
import AOS from "aos"; 
import { useEffect } from "react";


const Register = () => {

// for aos animation
        useEffect(() => {
            AOS.init();
        }, []);
    


    return (
        <div className="max-w-8xl mx-auto -mt-1  md:-mt-4  pt-28">

            <div  data-aos="zoom-in" data-aos-delay="100" data-aos-anchor=".example-selector" className="bg-gray-600 rounded-lg glass max-w-lg mx-auto p-8 ">
                <form className=" px-7 md:px-0 md:max-w-md mx-auto">

                    <div className="mb-4">
                        <label htmlFor="name"  data-aos="fade-up" data-aos-delay="200" className="block text-sm font-medium text-white">Name</label>
                        <input type="text" id="name" name="name" placeholder="Name" className="w-full px-3 py-2 border rounded-md" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="photo" data-aos="fade-up" data-aos-delay="400" className="block text-sm font-medium text-white">Photo</label>
                        <input type="text" id="photo" name="photo" placeholder="URL" className="w-full px-3 py-2 border rounded-md" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" data-aos="fade-up" data-aos-delay="400" className="block text-sm font-medium text-white">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" data-aos="fade-up" data-aos-delay="400" className="block text-sm font-medium text-white">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <button type="submit" data-aos="fade-up" data-aos-delay="400" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">Register</button>
                </form>

                <div className="flex items-center justify-center gap-10 mt-6"> 
                    <p data-aos="fade-up" data-aos-delay="400" className="text-white mt-2 text-center"> have an account ?</p>

                    <Link to='/login'>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" data-aos="fade-up" data-aos-delay="400">Login</button>
                    </Link>

                </div>
            </div>



        </div>
    );
};

export default Register;