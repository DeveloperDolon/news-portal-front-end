
import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/Login/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import SingleNews from "../Pages/SingleNews/SingleNews";
import FavNews from "../Pages/FavNews/FavNews";
import AddNews from "../Pages/AddNews/AddNews";

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }, 
            {
                path: "/news/:id",
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`, {credentials: "include"}),
                element: <PrivateRoute><SingleNews></SingleNews></PrivateRoute>
            },
            {
                path: "/fav-news",
                element: <PrivateRoute><FavNews></FavNews></PrivateRoute>
            },
            {
                path: "/add-news",
                element: <PrivateRoute><AddNews></AddNews></PrivateRoute>
            }
        ]
    },
    {
        path: "/login",
        element: <LogIn></LogIn>
    },
    {
        path: "/register",
        element: <SignUp></SignUp>
    }
])

export default MainRoute;