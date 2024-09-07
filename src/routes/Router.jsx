import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Layouts/Root";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import AllArtCraft from "../pages/AllArt&Craft/AllArtCraft";
import AddCraft from "../pages/AddCraft/AddCraft";
import MyArtCraftList from "../pages/MyArtCraftList/MyArtCraftList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/allArt&Craft",
          element: <AllArtCraft/>
        },
        {
          path: "/addCraft",
          element: <AddCraft/>
        },
        {
          path: "/myArt&Craft",
          element: <MyArtCraftList/>
        },
      ],
    },
  ]);