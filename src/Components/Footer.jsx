import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-28">
      <div className="flex justify-center">
        <div className="flex flex-col pr-16 border-r">
          <p className="text-xl">CodeCode</p>
          <p className="flex items-center mt-4 text-lg">
            <span className="mr-2">
              <FaGithub />
            </span>
            Github
          </p>
          <p className="mt-3 text-sm text-dull">
            © Copyright 2024 CodeCode. All <br />
            Commercial Rights Reserved.
          </p>
        </div>
        <div className="pl-16 flex">
            <div className="mr-28">
                <p className="text-semibold">Features</p>
                <ul className="text-dull text-sm">
                    <li className="mt-4">Table of Contents</li>
                    <li className="mt-4">About</li>
                </ul>
            </div>
            <div className="mr-32">
                <p className="text-semibold">About</p>
                <ul className="text-dull text-sm">
                    <li className="mt-4 cursor-not-allowed">Developers</li>
                    <li className="mt-4 cursor-not-allowed">Students</li>
                </ul>
            </div>
            <div className="mr-32">
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
