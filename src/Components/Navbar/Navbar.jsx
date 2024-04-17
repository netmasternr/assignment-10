import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
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
                to="/login"
                className={({ isActive }) =>
                    isActive ? 'text-green-500 bg-gray-600 p-2 rounded-lg font-bold' : 'font-bold  p-2'
                }>
                Login
            </NavLink>
            <NavLink
                to="/contract"
                className={({ isActive }) =>
                    isActive ? 'text-green-500 bg-gray-600 p-2 rounded-lg font-bold' : 'font-bold  p-2'
                }>
               contract
            </NavLink>
        </>
    );

    return (

        <div className="navbar  md:px-4 fixed z-10  md:z-10 max-w-7xl mx-auto md:mb-6 md:glass text-black ">
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
                    <div className="w-10">
                        <img
                            className="rounded-full"
                            alt="Tailwind CSS Navbar component"
                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        />
                    </div>
                </Link>
                <div className="dropdown dropdown-hover ">
                    <div tabIndex={0} role="button " className="btn md:m-4 bg-slate-800 text-green-400 glass">Login</div>
                    <ul tabIndex={0} className="dropdown-content z-[2] menu p-1  shadow glass rounded-box w-24 text-green-500 bg-gray-800 text-base font-bold">
                        <li><a>Profile</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;
