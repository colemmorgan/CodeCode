import React from "react";
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <>
      <nav className="flex justify-center items-center h-16 bg-greyBlue">
        <ul className="flex">
          <Link to={"/"} className="mx-6">
            <li className="text-dull text-sm font-semibold">Home</li>
          </Link>
          <Link to={"/"} className="mx-6">
            <li className="text-dull text-sm font-semibold">Problems</li>
          </Link>
          <Link to={"/"} className="mx-6">
            <li className="text-dull text-sm font-semibold">Logout</li>
          </Link>
        </ul>
      </nav>
      <div className="max-w-[1100px] mx-auto px-6 py-8 flex items-center justify-between ">
        <div className="flex">
          <span className="h-12 w-12 bg-lightBlue rounded-full mr-4"></span>
          <div className="">
            <p className="text-xl font-semibold">Cole Morgan</p>
            <p className=" mt-[1px] text-dull">colemmorgann@gmail.com</p>
          </div>
        </div>
        <button className="bg-greyBlue px-6 py-2.5 rounded-md border border-lightBlue text-sm">
          Edit Profile
        </button>
      </div>
      <div className="bg-greyBlue w-full ">
        <div className="max-w-[1100px] mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold">Coding Stats</h2>
          <ul className="flex flex-wrap pt-2">
            <CodingStat stat={0} desc={"Problems Solved"}/>
            <CodingStat stat={"5/31/2024"} desc={"Account Created"}/>
            <CodingStat stat={"6/30/2024"} desc={"Account Created"}/>
          </ul>
          <h2 className="text-2xl font-semibold mt-8">Recent Problems</h2>
          <ul className="flex flex-col pt-3
          ">
            <li className="bg-blue w-full h-32 mt-3 rounded-md" ></li>
          </ul>
          <div className="flex justify-center mt-12">
            <span className="mx-1 px-4 py-2 rounded-md text-dull font-semibold bg-blue">Starred</span>
            <span className="mx-1 px-4 py-2 rounded-md text-dull font-semibold">Liked</span>
            <span className="mx-1 px-4 py-2 rounded-md text-dull font-semibold">Disliked</span>
          </div>
          <ul className="flex flex-col pt-3 pb-12
          ">
            <li className="bg-blue w-full h-32 mt-3 rounded-md" ></li>
          </ul>
        </div>
      </div>
    </>
  );
}

function CodingStat({stat,desc}) {
  return (
    <li className="bg-blue p-6 mt-4 rounded-lg mr-4">
      <div className="w-56 text-center">
        <p className="text-3xl font-semibold">{stat}</p>
        <p className="mt-1 text-dull text-sm">{desc}</p>
      </div>
    </li>
  );
}
