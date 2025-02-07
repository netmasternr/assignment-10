import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../FIrebaseProvider/Hooks/UseAuth';


const Navbar = () => {
    const { logOut, user } = UseAuth();

    const navLinks = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? 'text-green-500 bg-gray-600 p-2 rounded-lg font-bold' : 'p-2 font-bold'
                }>
                Home
            </NavLink>

            <NavLink
                to="/contract"
                className={({ isActive }) =>
                    isActive ? 'text-green-500 bg-gray-600 p-2 rounded-lg font-bold' : 'font-bold  p-2'
                }>
                contract
            </NavLink>

            <NavLink
                to="/updateProfile"
                className={({ isActive }) =>
                    isActive ? 'text-green-500 bg-gray-600 p-2 rounded-lg font-bold' : 'font-bold  p-2'
                }>
                Update Profile
            </NavLink>
        </>
    );

    return (

        <div className="navbar  md:px-4 fixed z-10   max-w-7xl mx-auto md:mb-6 md:pt-4 glass text-white rounded-s-lg ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-x-3 text-gray-400">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn glass btn-ghost md:text-xl">
                    HomeHarbor
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2 md:gap-3 ml-auto mr-6 md:mr-0">
                <Link>
                    {
                        user?.email && (
                            <div className="w-10 group relative">
                                <img
                                    className="rounded-full max-h-8"
                                    alt="Tailwind CSS Navbar component"
                                    src={user?.photoURL ||
                                        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                    }
                                />

                                <div 
                                className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 text-white text-sm rounded shadow-lg">
                                    {user?.displayName || 'not found'}
                                </div>
                            </div>
                        )

                    }
                </Link>
                <details className="dropdown pt-2 mr-1 md:mr-6">

                    {
                        user?.email ?
                            <summary className="m-1 btn">Account</summary>
                            :
                            <summary className="m-1 btn"><a href="/login">Login</a></summary>

                    }

                    {
                        user ?
                            <ul className="p-2 shadow menu dropdown-content z-[1]  text-bla rounded-box glass  w-28 bg-gray-500">
                                <button onClick={logOut} className='font-bold'>
                                    Log Out
                                </button>
                            </ul>
                            :
                            ''
                    }
                </details>
            </div>
            
        </div>

    );
};

export default Navbar;
