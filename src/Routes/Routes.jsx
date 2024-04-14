import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePage from "../Page/HomePage/HomePage";

const routes = createBrowserRouter([

    {
        path:'/',
        element: <Root></Root>,
        children:[
           {
            path:'/',
            element:<HomePage></HomePage>
           },

        ]
        
    }
])

export default routes;