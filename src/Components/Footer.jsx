import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-20 px-8 lg:py-28">
      <div className="flex flex-col-reverse items-center lg:justify-center lg:flex-row">
        <div className="flex flex-col items-center  border-r-none mt-12 lg:max-w-[320px] lg:border-r lg:mt-0 lg:items-start lg:pr-16">
          <p className="text-xl">CodeCode</p>
          <p className="flex items-center  mt-4 text-lg">
            <span className="mr-2">
              <FaGithub />
            </span>
            Github
          </p>
          <p className="mt-3 text-sm text-dull text-center lg:text-left">
            © Copyright 2024 CodeCode. All 
            Commercial Rights Reserved.
          </p>
        </div>
        <div className="flex max-w-[730px] w-full justify-center lg:pl-12 sm:justify-around ">
            <div className="mr-16 sm:mr-0">
                <p className="text-semibold">Features</p>
                <ul className="text-dull text-sm">
                    <a href="#toc"><li className="mt-4">Table of Contents</li></a>
                    <a href="#about"><li className="mt-4">About</li></a>
                </ul>
            </div>
            <div className="hidden md:block">
                <p className="text-semibold">About</p>
                <ul className="text-dull text-sm">
                    <li className="mt-4 cursor-not-allowed">Developers</li>
                    <li className="mt-4 cursor-not-allowed">Students</li>
                </ul>
            </div>
            <div className="hidden sm:block">
                <p className="text-semibold">Legal</p>
                <ul className="text-dull text-sm">
                    <li className="mt-4 cursor-not-allowed">Privacy Policy</li>
                    <li className="mt-4 cursor-not-allowed">Terms of Use</li>
                </ul>
            </div>
            <div className="">
                <p className="text-semibold">Code</p>
                <ul className="text-dull text-sm">
                    <li className="mt-4"><Link to={"/code"}>Problems</Link></li>
                    <li className="mt-4"><Link to={"/account"}>Account</Link></li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  );
}
