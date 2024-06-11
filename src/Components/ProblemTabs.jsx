import React, { useEffect, useState } from "react";
import { FaChevronDown, FaCheckCircle } from "react-icons/fa";
import { FiChevronsLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilCallback } from "recoil";
import {
  ProblemTabsAtom,
  codeNavTabSelected,
  problemUnitsOpenAtom,
} from "../atoms/ProblemMenuAtom";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import useGetUserData from "../hooks/useGetUserData";
import { LuLoader2 } from "react-icons/lu";

export default function ProblemTabs() {
  const [isOpen, setIsOpen] = useRecoilState(ProblemTabsAtom);
  const [problemUnitOpen, setProblemUnitOpen] =
    useRecoilState(problemUnitsOpenAtom);
  const [dashboardOpen, setDashboardOpen] = useRecoilState(codeNavTabSelected);
  const [user] = useAuthState(auth);
  const { liked, disliked, solved, setData, starred } = useGetUserData();

  const units = [
    {
      name: "Basic Iteration",
      problems: [
        {
          id: "basic-string-iteration",
          name: "Basic String Iteration",
        },
        {
          id: "basic-array-iteration",
          name: "Basic Array Iteration",
        },
        {
          id: "basic-object-iteration",
          name: "Basic Object Iteration",
        },
      ],
    },
    {
      name: "String Formatting",
      problems: [
        {
          id: "short-scale-formatting",
          name: "Short Scale Formatting",
        },
        {
          id: "usd-currency-formatting",
          name: "USD Currency Formatting",
        },
        {
          id: "proper-case-formatting",
          name: "String Case Formatting",
        },
      ],
    },
    {
      name: "No Mutation!",
      problems: [
        {
          id: "array-reversal",
          name: "Array Reversal",
        },
        {
          id: "object-merge",
          name: "Object Merge",
        },
        {
          id: "string-replacement",
          name: " String Replacement",
        },
      ],
    },
    {
      name: "Higher-Order Functions",
      problems: [
        {
          id: "filter-even-numbers",
          name: "Filtering Even Numbers",
        },
        {
          id: "map-to-square-values",
          name: "Mapping to Square Values",
        },
        {
          id: "reduce-to-sum",
          name: "Reducing to Sum",
        },
        {
          id: "find-first-negative",
          name: "Find First Negative",
        }
      ]
    },
    {
      name: "Advanced Iteration",
      problems: [
        {
          id: "flatten-nested-array",
          name: "Flatten Nested Array",
        },
        {
          id: "count-object-keys",
          name: "Counting Object Keys",
        },
        {
          id: "access-nested-properties",
          name: "Nested Properties",
        }
      ]
    },
    {
      name: "JS Algorithms",
      problems: [
        {
          id: "caesar-cipher",
          name: "Caesar Cipher",
        },
        {
          id: "count-duplicates",
          name: "Counting Duplicates",
        },
        {
          id: "fibonacci-sequence",
          name: "Fibonacci Sequence",
        }
      ],
    },
  ];

  const handleClose = () => {
    setIsOpen(false);
    setDashboardOpen(false);
  };

  const persistState = useRecoilCallback(
    ({ snapshot, set }) =>
      async () => {
        const currentState = await snapshot.getLoadable(problemUnitsOpenAtom)
          .contents;
        // Store state in sessionStorage to survive across routes
        sessionStorage.setItem(
          "problemUnitOpenState",
          JSON.stringify(currentState)
        );
      },
    []
  );

  // Restore state on component mount
  useEffect(() => {
    const savedState = sessionStorage.getItem("problemUnitOpenState");
    if (savedState) {
      setProblemUnitOpen(JSON.parse(savedState));
    }
  }, [setProblemUnitOpen]);

  useEffect(() => {
    if (Object.keys(problemUnitOpen).length === 0) {
      const initialState = units.reduce((acc, _, index) => {
        acc[`unit${index}`] = false;
        return acc;
      }, {});
      setProblemUnitOpen(initialState);
    }
  }, [units, problemUnitOpen, setProblemUnitOpen]);

  useEffect(() => {
    return () => {
      persistState();
    };
  }, [location.pathname, persistState]);

  return (
    <div
      className={`max-h-screen h-screen overflow-y-scroll problem-tabs-scrollbar transition-all relative z-50  ${
        isOpen
          ? "min-w-[280px] max-w-[280px] w-full"
          : "max-w-[0px] w-0 opacity-0"
      }`}
      style={{ background: "rgb(25, 34, 49)" }}
    >
      <div className="flex justify-between items-center px-4 py-3 border-b border-blue ">
        <p className=" text-dull ">All Content</p>
        <span
          className="p-2 hover:bg-blue transition-all cursor-pointer rounded-md"
          onClick={handleClose}
        >
          <FiChevronsLeft />
        </span>
      </div>
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
        {units.map((unit, index) => (
          <UnitTab
            unit={unit}
            solved={solved}
            outerIndex={index}
            key={unit.name}
            setProblemUnitOpen={setProblemUnitOpen}
            problemUnitOpen={problemUnitOpen}
          />
        ))}
      </ul>
    </div>
  );
}

function UnitTab({
  unit,
  solved,
  outerIndex,
  setProblemUnitOpen,
  problemUnitOpen,
}) {
  const isUnitOpen = problemUnitOpen[`unit${outerIndex}`] || false;

  const toggleTab = () => {
    setProblemUnitOpen((prev) => ({
      ...prev,
      [`unit${outerIndex}`]: !isUnitOpen,
    }));
  };

  return (
    <li className="w-full border-t border-blue text-[13px] cursor-pointer">
      <div
        className="flex justify-between items-center py-3.5 px-4 hover:bg-greyBlue"
        onClick={toggleTab}
      >
        <p>
          <span className="mr-1.5">{outerIndex + 1}.</span>
          {unit.name}
        </p>
        <span
          className="transition-all"
          style={{ transform: isUnitOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <FaChevronDown />
        </span>
      </div>
      {isUnitOpen && (
        <div>
          {unit.problems.map((problem, index) => (
            <ProblemTab
              problem={problem}
              index={index}
              outerIndex={outerIndex}
              key={problem.id}
              solved={solved}
            />
          ))}
        </div>
      )}
    </li>
  );
}

function ProblemTab({ problem, index, solved, outerIndex }) {
  return (
    <Link to={`/code/${problem.id}`}>
      {solved ? (
        <div className="flex justify-between items-center py-2.5 pl-6 pr-4 hover:bg-greyBlue">
          <p>
            {outerIndex + 1}.{index + 1} {problem.name}
          </p>
          <span
            className={`rounded-full border border-lightBlue ${
              solved.includes(problem.id) ? "border-none text-green" : "h-4 w-4"
            }`}
          >
            {solved.includes(problem.id) && <FaCheckCircle />}
          </span>
        </div>
      ) : (
        <div className="h-10 pl-8 pr-4 w-full flex items-center justify-between">
          <div className="flex items-center">
            <LuLoader2 className="animate-spin" />
            <span className="ml-2">Fetching Problems...</span>
          </div>
          <span className="h-4 w-4 border border-lightBlue rounded-full"></span>
        </div>
      )}
    </Link>
  );
}
