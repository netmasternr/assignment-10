import { FaGoogle, FaGithub   } from "react-icons/fa6";
import UseAuth from "../../FIrebaseProvider/Hooks/UseAuth";

const SocialLogin = () => {

    const {googleLogin, githubLogin} = UseAuth();

    return (
        <div>
            <button onClick={()=>googleLogin()} className="btn btn-outline mr-4"><FaGoogle /> Google</button>

            <button onClick={()=>githubLogin()} className="btn btn-outline"><FaGithub /> Github</button>
        </div>
    );
};

export default SocialLogin;