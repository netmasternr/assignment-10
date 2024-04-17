import { useContext } from "react";
import { AuthContext } from "../FIrebaseProvider";

const UseAuth = () => {
    const all = useContext(AuthContext)
    return all
};

export default UseAuth;