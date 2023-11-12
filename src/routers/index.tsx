import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthorizedLayout from "../layout/AuthorizedLayout";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/error";

const Login = lazy(() => import("../pages/login"));
const Home = lazy(() => import("../pages/home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <AuthorizedLayout />,
        children: [
          {
            path: "/home",
            element: <Home />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
