import { FaGoogle, FaGithub   } from "react-icons/fa6";
import UseAuth from "../../FIrebaseProvider/Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin, githubLogin} = UseAuth();

    // navigation
    const navigate = useNavigate();
    const location =  useLocation()
    const form = location?.state || '/'


    const handleSocialLogin = socialProvider =>{
        socialProvider()
        .then(result =>{
            if(result.user){
                // navigate
                navigate(form)
                
            }
        })
    }

    return (
        <div>
            <button onClick={()=>handleSocialLogin(googleLogin)} className="btn btn-outline mr-4"><FaGoogle /> Google</button>

            <button onClick={()=>handleSocialLogin(githubLogin)} className="btn btn-outline"><FaGithub /> Github</button>
        </div>
    );
};

export default SocialLogin;