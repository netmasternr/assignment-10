import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePage from "../Page/HomePage/HomePage";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const routes = createBrowserRouter([

    {
        path:'/',
        element: <Root></Root>,
        errorElement:<ErrorPage/>,
        children:[
           {
            path:'/',
            element:<HomePage></HomePage>
           },
           {
            path: '/login',
            element:<Login></Login>
           },
           {
            path:'/register',
            element:<Register></Register>
           }

        ]
        
    }
])

export default routes;