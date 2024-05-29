import React, {useState} from 'react'
import { FaChevronDown } from "react-icons/fa";

export default function ProblemTabs() {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={`h-screen transition-all relative z-50 ${isOpen ? "w-72" : "w-0"}`}
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
  )
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
