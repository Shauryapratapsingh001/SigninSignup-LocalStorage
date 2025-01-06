import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const userData = {
    Username: "",
    email: "",
    password: "",
  };

  const [data, setdata] = useState(userData);
  const navigate = useNavigate()
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
  };
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.Username=="" || data.email=="" || data.password==""){
      alert("Somethimg is missing")
    }
    else{
      const getdata = JSON.parse(localStorage.getItem("userData") || "[ ]");
    let arr = [ ];
    arr = [...getdata];
    arr.push(data);
    localStorage.setItem("userData", JSON.stringify(arr));
    alert("Signup successfully")
    navigate("/Login")
    }
  };

  return (
    <>
      <div className=" mb-30 flex justify-center items-center h-[89vh] bg-gray-100 ">
        <form
          onSubmit={handleSubmit}
          className="bg-lime-950 p-6 rounded-xl w-96 h-128 "
        >
          <h1 className="text-orange-600  text-2xl font-bold text-center">
            <span className="">S</span>ignup
          </h1>
          <label
            htmlFor="Username"
            className="mt-2 block text-xl font-medium text-white"
          >
            Name
          </label>
          <input
            type="text"
            name="Username"
            placeholder="Enter your Username"
            onChange={handleInput}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          <label
            htmlFor="email"
            className="block text-xl font-medium text-white "
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleInput}
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
            placeholder="Enter your password"
            onChange={handleInput}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="mt-5 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
          <p className="text-white mt-6 text-x text-center">
            Already have an account:{" "}
            <Link to="/Login" className="text-orange-600 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};
