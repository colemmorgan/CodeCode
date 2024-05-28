import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";
import { PiHandWavingDuotone } from "react-icons/pi";
import { auth } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

export default function SignUp() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if(!newUser) return
      navigate("/code")
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if(error) alert(error.message)
  },[error])

  return (
    <>
      <Nav />
      <section className="overflow-hidden w-full bg-blue pt-24 flex flex-col">
        <div className="flex flex-col items-center justify-center p-8 ">
          <span className="text-5xl">
            <PiHandWavingDuotone />
          </span>
          <p className="mt-2 text-2xl font-semibold">Welcome Back</p>
          <p className="mt-2 font-sm text-dull">
            Please enter your credentials to login
          </p>
          <form
            action=""
            className="mt-6 max-w-[470px] w-full flex flex-col"
            onSubmit={handleRegister}
          >
            <div className="flex">
              <div className="w-1/2 pr-2">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full bg-greyBlue mt-1 px-4 py-3 rounded-md text-sm"
                  placeholder="John"
                  onChange={(e) => handleChangeInput(e)}
                  required
                />
              </div>
              <div className="w-1/2 pl-2">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full bg-greyBlue mt-1 px-4 py-3 rounded-md text-sm"
                  placeholder="Doe"
                  onChange={(e) => handleChangeInput(e)}
                  required
                />
              </div>
            </div>
            <label htmlFor="" className="mt-5">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full bg-greyBlue mt-1 px-4 py-3 rounded-md text-sm"
              placeholder="email@email.com"
              onChange={(e) => handleChangeInput(e)}
              required
            />
            <label htmlFor="" className="mt-5">
              Password
            </label>
            <input
              required
              type="text"
              name="password"
              className="w-full bg-greyBlue mt-1 px-4 py-3 rounded-md text-sm"
              placeholder="Secure Password"
              onChange={(e) => handleChangeInput(e)}
            />
            <button
              className="w-full bg-lightBlue text-sm mt-5 py-2.5 rounded-md"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-6">
            Already have an account?
            <Link to={"/login"}>
              <span className="text-lightBlue font-semibold"> Log in</span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
