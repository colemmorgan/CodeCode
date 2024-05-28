import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { IoLogOutSharp } from "react-icons/io5";
import { useSignOut } from 'react-firebase-hooks/auth';

export default function Nav() {
  const [user] = useAuthState(auth);
  const [showLogout, setShowLogout] = useState(false);
  const [signOut, loading, error] = useSignOut(auth);
  const handleLogout = () => {
    signOut()
    setShowLogout(false)
  }

  return (
    <>
      <nav className=" bg-blue">
        <div className=" h-16 px-8 max-w-[1280px] mx-auto flex items-center ">
          <div className="text-xl font-semibold w-1/4">CodeCode</div>
          
            <ul className="flex w-1/2 justify-center">
              <Link to={"/"}>
                <li className="text-sm px-4 py-2 mx-5 link-hover rounded-lg cursor-pointer">
                  Home
                </li>
              </Link>
              <li className="text-sm px-4 py-2 mx-5 link-hover rounded-lg cursor-pointer">
                Students
              </li>
              <li className="text-sm px-4 py-2 mx-5 link-hover rounded-lg cursor-pointer">
                Instructors
              </li>
              <Link to="/code">
                <li className="text-sm px-4 py-2 mx-5 link-hover rounded-lg cursor-pointer">
                  Code
                </li>
              </Link>
            </ul>
          <div className="flex items-center w-1/4 justify-end">
            {user ? (
              <Link to={"/code"}>
                <button className="rounded-lg  p-[2px] gradient-b group">
                  <p className="py-2 px-4 bg-greyBlue rounded-md text-sm group-hover:bg-blue transition-all ease">
                    Problems
                  </p>
                </button>
              </Link>
            ) : (
              <Link to={"/login"}>
                <button className="rounded-lg  p-[2px] gradient-b group">
                  <p className="py-2 px-4 bg-greyBlue rounded-md text-sm group-hover:bg-blue transition-all ease">
                    Login
                  </p>
                </button>
              </Link>
            )}
            {user && (
              <div className="ml-4 h-9 w-9  rounded-full bg-white">
                {" "}
                <p></p>
              </div>
            )}
            {user && (
              <span
                className="ml-4 text-4xl text-white cursor-pointer"
                onClick={() => setShowLogout(true)}
              >
                <IoLogOutSharp />
              </span>
            )}
          </div>
        </div>
      </nav>
      {showLogout && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-blue bg-opacity-90 z-50 backdrop-blur-md flex items-center justify-center">
          <div className="w-[500px] h-64 bg-white rounded-md px-8 py-12 border bord">
            <p className="text-center text-3xl font-semibold text-blue">
              Sign Out?
            </p>
            <div className="flex mx-auto justify-center mt-12">
              <button className="mx-2 bg-red-500 px-8 py-3 font-semibold cursor-pointer" onClick={handleLogout}>
                Sign Out
              </button>
              <button className="mx-2 bg-green px-12 py-3 font-semibold cursor-pointer" onClick={() => setShowLogout(false)}>
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
