import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProblemTabs() {
  const [isOpen, setIsOpen] = useState(true);

  const unit1Problems = [
    {
      id: "caesar-cipher",
      name: "Caesar Cipher",
    },
  ];

  return (
    <div
      className={`min-h-screen  overflow-y-auto transition-all relative z-50 ${
        isOpen ? "min-w-[280px]" : "w-0"
      }`}
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
        <UnitTab title={"JS Algorithms"} problems={unit1Problems}/>
      </ul>
    </div>
  );
}

function UnitTab({ title, problems }) {
  const [isTabOpen, toggleTabOpen] = useState(false)
  return (
    <li className="w-full border-t border-blue text-[13px] cursor-pointer " onClick={() => toggleTabOpen(!isTabOpen)}>
      <div className="flex justify-between items-center py-3.5  px-4 hover:bg-greyBlue">
        <p>
          <span className="mr-1.5">1.</span>
          {title}
        </p>
        <span className="transition-all" style={{transform: isTabOpen ? "rotate(180deg)" : "rotate(0deg)"}}>
          <FaChevronDown />
        </span>
      </div>
      <div className="">
       {isTabOpen && problems.map((problem, index) => (
        <ProblemTab problem={problem} index={index} key={problem.id}/>
       ))}
      </div>
    </li>
  );
}

function ProblemTab({problem, index}) {
  return (
    <Link to={`/code/${problem.id}`}>
    <div className="flex justify-between items-center py-2.5 pl-8 pr-4 hover:bg-greyBlue">
      <p>1.{index + 1} {problem.name}</p>
      <span className="h-5 w-5 rounded-full border border-lightBlue"></span>
    </div>
    </Link>
  );
}
