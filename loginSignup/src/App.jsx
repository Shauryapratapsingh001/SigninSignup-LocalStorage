import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { Home } from "./Components/Home/Home";
import {Signup} from "./Components/Signup/Signup"
import {Login} from "./Components/Login/Login"



const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          
          path: "/" , // Root path
          element: <Signup /> 
        },
        
        {
          path: "Signup",// Add explicit /Home route
          element: <Signup />,
        },
        {
          path: "Home", 
          element: <Home />,
        },
        {
          path: "Login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
