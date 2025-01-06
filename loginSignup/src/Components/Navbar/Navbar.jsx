import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-lime-950 p-3 items-center flex justify-evenly">
        <div className="color text-white t-4 text-2xl">
          <span className="color text-orange-600  text-3xl font-bold ">L</span>
          ogin
          <span className="color text-orange-600  text-3xl font-bold ">S</span>
          ignup
        </div>
        <div className="p-3 text-xl ">
          <ul className="flex justify-evenly gap-10 color text-white ">
            <li>
              <Link
                to="/Home"
                className="hover:text-red-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Signup"
                className="hover:text-red-400 transition duration-300"
              >
                Signup
              </Link>
            </li>
            <li>
              <Link
                to="/Login"
                className="hover:text-red-400 transition duration-300"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
