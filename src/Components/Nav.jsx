import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { PiSignOut } from "react-icons/pi";
import { useSignOut } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

export default function Nav() {
  const [user] = useAuthState(auth);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [signOut, loading, error] = useSignOut(auth);
  const handleLogout = () => {
    signOut();
    setShowAccountMenu(false);
    toast.success("Successfully logged out", {position:"top-center", autoClose: 3000, theme: "dark"})
  };

  return (
    <>
      <nav className=" bg-blue">
        <div className=" h-16 px-12  mx-auto flex items-center ">
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
            <Link to={`/code/caesar-cipher`}>
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
              <div
                className="ml-4 h-9 w-9  rounded-full gradient-static cursor-pointer"
                onClick={() => setShowAccountMenu(!showAccountMenu)}
              ></div>
            )}
          </div>
        </div>
      </nav>
      {showAccountMenu && (
        <div className="absolute bg-greyBlue border border-lightBlue rounded-lg right-12 top-16  w-64 z-40 overflow-hidden">
          <div className=" p-4 border-b border-lightBlue flex">
            <Link to={"/account"}>
              <div className="h-8 w-8 rounded-full gradient-static cursor-pointer"></div>
            </Link>
            <div className="ml-3">
             <Link to={"/account"}> <p className="text-xs cursor-pointer">Cole Morgan</p></Link>
              <p className="text-xs text-dull">colemmorgann@gmail.com</p>
            </div>
          </div>
          <div
            className="p-4 flex text-dull items-center cursor-pointer hover:bg-lightBlue hover:bg-opacity-10 transition-all"
            onClick={handleLogout}
          >
            <span className="mr-2 text-lg">
              <PiSignOut />
            </span>
            <span className="text-xs">Sign Out</span>
          </div>
        </div>
      )}
    </>
  );
}
