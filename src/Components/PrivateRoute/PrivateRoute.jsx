
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../FIrebaseProvider/Hooks/UseAuth';

const PrivateRoute = ({children}) => {
    const {user} = UseAuth();
    const location = useLocation();
    

    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div >
            {children}
        </div>
    );
};

export default PrivateRoute;