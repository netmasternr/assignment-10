import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <Navbar />
            </div>
            <Outlet />
           
        </div>
    );
};

export default Root;