import React from "react";

export const Home = () => {
  return (
    <>
      <section className="mt-12 ml-[25%]  w-[50%] h-[69vh] p-4 shadow rounded-xl bg-gray-900 flex items-center">
        <p className="text-xl font-bold text-center text-white">
          This website is all about learning logics, responsive website with
          login and signup validation using Tailwind CSS for styling and JWT
          (JSON Web Tokens) for secure authentication. Tailwind provides
          utility-first classes to design user-friendly forms, while JWT ensures
          safe transmission of user credentials. The flow includes collecting
          user input, validating it on the frontend, and securely sending it to
          a backend API. Upon successful login or signup, a JWT is generated,
          signed, and sent to the client. The token is stored (e.g., in
          localStorage or cookies) and used for protected route access. This
          approach enhances security and ensures a seamless user experience.
        </p>       
      </section>
          <button className="mt-4 ml-[50%] w-35 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Logout
          </button>
    </>
  );
};
