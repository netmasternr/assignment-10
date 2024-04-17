import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePage from "../Page/HomePage/HomePage";
import Login from "../Components/Login/Login";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import HouseDetails from "../Components/HouseDetails/HouseDetails";
import Contract from "../Components/Contract/Contract";
import Register from "../Components/Register/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
                loader: () => fetch('/home.json'),
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/houseDetails/:id',
                element: <PrivateRoute>
                    <HouseDetails />
                </PrivateRoute>,
                loader: () => fetch('/home.json'),

            },
            {
                path: '/contract',
                element: <Contract></Contract>
            }


        ]

    }
])

export default routes;