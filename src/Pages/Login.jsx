import React, { useEffect, useState } from "react";
import { PiHandWavingDuotone } from "react-icons/pi";
import Nav from "../Components/Nav";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

export default function Login() {
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [inputs, setInputs] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const newUser = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      navigate("/code");
    } catch {
      alert(error.message);
    }
  };

  useEffect(() => {
    if(error) alert(error)
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
            onSubmit={handleLogin}
          >
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              required
              className="w-full bg-greyBlue mt-1 px-4 py-3 rounded-md text-sm"
              onChange={handleInputChange}
              placeholder="email@email.com"
            />
            <label htmlFor="" className="mt-5">
              Password
            </label>
            <input
              type="text"
              name="password"
              className="w-full bg-greyBlue mt-1 px-4 py-3 rounded-md text-sm"
              placeholder="Password"
              onChange={handleInputChange}
              required
            />
            <button
              className="w-full bg-lightBlue text-sm mt-5 py-2.5 rounded-md"
              type="submit"
            >
              Login
            </button>
          </form>
          <p className="mt-6">
            Don't have an account?{" "}
            <Link to={"/signup"}>
              <span className="text-lightBlue font-semibold">Sign Up</span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
