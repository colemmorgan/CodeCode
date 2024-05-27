import React, { useState } from "react";

import { FaChevronDown } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import CodeNav from "../Components/CodeNav";
import CodeEditor from "../Components/CodeEditor";
import CodeResults from "../Components/CodeResults";

export default function Code() {
  return (
    <section className="flex bg-blue">
      <CodeNav />
      <Menu />
      <div class="grid grid-cols-2 grid-rows-5 gap-2 h-screen w-full p-3">
        <QuestionMenu />
          <CodeEditor/>
        <CodeResults/>
      </div>
    </section>
  );
}


function QuestionMenu() {
  return (
    <div className="bg-greyBlue h-full w-full rounded-lg pt-12 row-span-5 overflow-auto">
      <div className="px-10 ">
        <h3 className="underline text-3xl font-semibold">Shift Cipher</h3>
        <div className="flex pt-4 items-center">
          <p className="bg-blue px-4 py-2 text-sm rounded-lg">
            Difficulty: Easy 5-10 Minutes
          </p>
          <span className="text-green text-2xl pl-4 cursor-pointer">
            <AiOutlineLike />
          </span>
          <span className="text-red-500 text-2xl pl-4 cursor-pointer">
            <AiOutlineDislike />
          </span>
        </div>
        <div className="pt-10">
          <h5 className="font-semibold text-lg">Problem Statement</h5>
          <p className="pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            officia aliquam vel sunt, reprehenderit adipisci unde molestias,
            accusantium doloremque cumque deleniti ipsum incidunt hic assumenda
            distinctio tenetur maxime corrupti! Laborum.
          </p>
        </div>
        <div className="pt-10 ">
          <h5 className="text-2xl">Sample Test Cases</h5>
          <p className="pt-5 font-semibold text-lg">Example 1:</p>
          <div className="bg-blue w-full px-4 rounded-md mt-3 py-1">
            <code className="block py-1">Input: [2,3,5]</code>
            <code className="block py-1">Output: True</code>
            <code className="block py-1">Explanation: Each string can be rearranged to match another.</code>
          </div>
          <p className="pt-5 font-semibold text-lg">Example 2:</p>
          <div className="bg-blue w-full px-4 rounded-md mt-3 py-1">
            <code className="block py-1">Input: [2,3,5]</code>
            <code className="block py-1">Output: True</code>
            <code className="block py-1">Explanation: Each string can be rearranged to match another.</code>
          </div>  
        </div>
        <div className="pt-10">
        <h5 className="text-2xl">Contraints</h5>
        <ul className="py-1 list-disc pl-10">
          <li className="pt-2">Must use the map function</li>
          <li className="pt-2">Must use the map function</li>
        </ul>
        </div>
        
      </div>
    </div>
  );
}

function Menu() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={`h-screen transition-all ${isOpen ? "w-72" : "w-0"}`}
      style={{ background: "rgb(25, 34, 49)" }}
    >
      <p className="px-4 py-4 text-dull border-b border-blue">All Content</p>
      <div className="py-2 flex text-dull justify-center px-2">
        <button className="text-sm px-3 py-1.5 bg-green bg-opacity-10 rounded-lg mx-1 min-w-[82px]">
          View All
        </button>
        <button className="text-sm px-3 py-1.5  bg-opacity-10 rounded-lg mx-1">
          Problems
        </button>
        <button className="text-sm px-3 py-1.5  bg-opacity-10 rounded-lg mx-1">
          Lessons
        </button>
      </div>
      <ul className="w-full border-b border-blue">
        <ProblemTab title={"JavaScipt"} />
        <ProblemTab title={"JavaScipt"} />
        <ProblemTab title={"Map/Filter/Reduce"} />
        <ProblemTab title={"JavaScipt"} />
        <ProblemTab title={"JavaScipt"} />
        <ProblemTab title={"JavaScipt"} />
        <ProblemTab title={"JavaScipt"} />
      </ul>
    </div>
  );
}

function ProblemTab({ title }) {
  return (
    <li className="w-full border-t border-blue py-3.5 flex justify-between px-4 items-center text-dull text-sm cursor-pointer hover:bg-greyBlue">
      <p>
        <span className="mr-1.5">1.</span>
        {title}
      </p>
      <span>
        <FaChevronDown />
      </span>
    </li>
  );
}
