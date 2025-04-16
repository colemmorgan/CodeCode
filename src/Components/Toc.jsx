import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Toc() {
  const units = [
    {
      title: "Unit 1: Basic Iteration",
      desc: "Learn the platform and complete your first unit. Iterate through simple strings, arrays, and objects to finish the challenges.",
    },
    {
      title: "Unit 2: String Manipulation",
      desc: "Learn how to format and manipulate strings. Format strings as currency, short scale notation, proper case and more.",
    },
    {
      title: "Unit 3: No Mutation!",
      desc: "Practice managing state without mutating any variables. Use various methods to edit arrays and objects.",
    },
    {
      title: "Unit 4: Higher-Order Functions",
      desc: "Practice important higher-order functions. Use map/filter/reduce/find to utilize functional programming techniques.",
    },
    {
      title: "Unit 5: Advanced Iteration",
      desc: "The second iteration unit. Iterate through nested data structures and use the optional chaining operator.",
    },
    {
      title: "Unit 6: JS Algorithms",
      desc: "Complete various algorithm problems. Create encryption methods, sort arrays, and more.",
    },
    {
      title: "Unit 7: Put It All Together",
      desc: "The final unit. Utilize all of the course content to solve the various problems.",
    },
  ];

  return (
    
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center items-center px-4 pt-24 pb-40">
        <h3 className="font-semibold text-4xl">Table of Contents</h3>
        <ul className="flex flex-col mt-16 w-full">
          {units.map((unit) => (
            <TocTab unit={unit} key={unit.title}/>
          ))}
        </ul>
      </div>
  );
}

function TocTab({ unit }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isOpen]);

  return (
    <li className="w-full bg-greyBlue my-1 rounded-md transition-all py-4 px-6">
      <div className="flex items-center justify-between pr-2">
        <p className="font-semibold py-2">{unit.title}</p>
        <span
          className="text-lg cursor-pointer transition-transform"
          onClick={() => setIsOpen(!isOpen)}
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <FaChevronDown />
        </span>
      </div>
      <div
        ref={contentRef}
        className="transition-all overflow-hidden text-sm sm:text-base"
        style={{ height: `${contentHeight}px` }}
      >
        <div className="py-2">
          <p>{unit.desc}</p>
          <div className="max-w-[80px]">
            <Link to={"/code"}>
              <p className="mt-2 underline flex items-center ">
                Go To{" "}
                <span className="ml-2">
                  <FaArrowRightLong />
                </span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
