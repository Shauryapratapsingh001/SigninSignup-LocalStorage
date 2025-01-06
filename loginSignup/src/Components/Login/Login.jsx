import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Msg, setMsg] = useState("");

  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if ("email" == name) {
      setemail(value);
    }
    if ("password" == name) {
      setpassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == " " || password == " ") {
      alert("Enter email and password");
    } else {
      const getDetail = JSON.parse(localStorage.getItem("userData"));
      console.log(getDetail);
      getDetail.map((currValue) => {
        console.log(currValue.password);
        const checkemail = currValue.email;
        const checkpassword = currValue.password;

        if (checkemail == email && checkpassword == password) {
          // alert("Login successfully");
          navigate("/Home");
        } else {
          return setMsg("invalid email or password");
        }
      });
    }
  };

  return (
    <>
      <p className=" bg-gray-200 text-orange-600 text-2xl ">{Msg}</p>
      <div className="flex justify-center items-center h-[89vh] bg-gray-200 ">
        <form
          onSubmit={handleSubmit}
          className="bg-lime-950 p-6 rounded-xl w-96 h-96  "
        >
          <h1 className="text-orange-600 text-2xl font-bold text-center">
            <span>L</span>ogin
          </h1>
          <label
            htmlFor="email"
            className="block text-xl font-medium text-white mt-4"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          <label
            htmlFor="password"
            className="mt-2 block text-xl font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter your password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="mt-5 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
          <p className="text-white mt-6 text-x text-center">
            Create an account :{" "}
            <Link to="/Signup" className="text-orange-600 underline">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};
