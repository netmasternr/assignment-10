import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="max-w-8xl mx-auto -mt-1  md:-mt-4  pt-28">

            <form className=" px-7 md:px-0 md:max-w-md mx-auto">

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md" />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md" />
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">Register</button>
            </form>

            <div className="flex items-center justify-center gap-10 mt-6">
                <p className="text-white mt-2 text-center">Don't have an account ?</p>
                
                <Link to='/register' >
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 "> Register</button>
                </Link>
            </div>
        </div>
    );
};

export default Login;