import React, { useEffect, useState } from "react";
import {
  outputAtom,
  codeErrorAtom,
  runCodeOutputAtom,
} from "../atoms/OutputAtom.js";
import { useRecoilState } from "recoil";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export default function CodeResults({ problem }) {
  const [output, setOutput] = useRecoilState(outputAtom);
  const [isError, setIsError] = useRecoilState(codeErrorAtom);
  const [userRunCode, setUserRunCode] = useRecoilState(runCodeOutputAtom);
  const [showTab, setShowTab] = useState({
    testing: true,
    output: false,
    stdin: false,
  });

  const showTesting = () => {
    setShowTab({
      testing: true,
      output: false,
      stdin: false,
    });
  };
  const showOutput = () => {
    setShowTab({
      testing: false,
      output: true,
      stdin: false,
    });
  };

  const showStdin = () => {
    setShowTab({
      testing: false,
      output: false,
      stdin: true,
    });
  };

  

  return (
    <div className="bg-greyBlue rounded-lg overflow-hidden">
      <div
        className="h-12 px-2 flex items-center text-sm font-semibold text-dull"
        style={{ background: "rgb(25, 34, 49)" }}
      >
        <p
          className="mr-2 transition-all rounded-md hover:bg-darkGreen py-2 px-6 cursor-pointer"
          onClick={showTesting}
          style={{
            backgroundColor: showTab.testing ? "rgba(16, 185, 129, 0.1)" : "",
          }}
        >
          Testing
        </p>
        <p
          className="mr-2 transition-all rounded-md hover:bg-darkGreen py-2 px-6 cursor-pointer"
          onClick={showOutput}
          style={{
            backgroundColor: showTab.output ? "rgba(16, 185, 129, 0.1)" : "",
          }}
        >
          Output
        </p>
        <p
          className="mr-2 transition-all rounded-md hover:bg-darkGreen py-2 px-6 cursor-pointer"
          onClick={showStdin}
          style={{
            backgroundColor: showTab.stdin ? "rgba(16, 185, 129, 0.1)" : "",
          }}
        >
          Stdin
        </p>
      </div>
      {showTab.testing && (
        <div className="grid grid-cols-12  text-xs">
          <div className="col-span-4 h-10 flex items-center px-4 text-dull ">
            <p className=" font-semibold">INPUT</p>
          </div>
          <div className="col-span-3 h-10 flex items-center px-3 text-dull">
            <p className="font-semibold">OUTPUT</p>
          </div>
          <div className="col-span-3 h-10 flex items-center px-3 text-dull">
            <p className="font-semibold">EXPECTED</p>
          </div>
          <div className="col-span-2 h-10  flex items-center px-3 text-dull">
            <p className="font-semibold">RESULT</p>
          </div>
          {problem.examples.map((example, index) => (
            <ResultRow
              example={example}
              key={example.id}
              index={index}
              output={output?.outputs}
              isError={isError}
            />
          ))}
        </div>
      )}
      {showTab.output && (
        <div className="w-full h-full py-4 px-4">
          <div
            className="w-full min-h-64 p-3 rounded-md"
            style={{ backgroundColor: "rgb(25, 34, 49)" }}
          >
            {userRunCode[1]}
          </div>
        </div>
      )}
      {showTab.stdin && (
        <div className="w-full h-full py-4 px-4">
          <div
            className="w-full min-h-64 p-3 rounded-md"
            style={{ backgroundColor: "rgb(25, 34, 49)" }}
          >
            {problem.examples.map((example) => (
              <p className="text-sm mb-1.5">{example.input}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ResultRow({ example, index, output, isError }) {
  const [testResult, setTestResult] = useState("");
  useEffect(() => {
    if (!isError) {
      try {
        setTestResult(output[index]);
      } catch {}
    } else {
      setTestResult("Error");
    }
  });
  return (
    <>
      <div
        className="col-span-4 h-10 flex items-center px-4 "
        style={{ backgroundColor: index % 2 == 0 ? "rgb(25, 34, 49)" : "" }}
      >
        <p className=" font-semibold">{example.input}</p>
      </div>
      <div
        className="col-span-3 h-10 flex items-center px-3"
        style={{ backgroundColor: index % 2 == 0 ? "rgb(25, 34, 49)" : "" }}
      >
        <p className="font-semibold">{testResult}</p>
      </div>
      <div
        className="col-span-3 h-10 flex items-center px-3"
        style={{ backgroundColor: index % 2 == 0 ? "rgb(25, 34, 49)" : "" }}
      >
        <p className="font-semibold">{example.output}</p>
      </div>
      <div
        className="col-span-2 h-10  flex items-center px-3"
        style={{ backgroundColor: index % 2 == 0 ? "rgb(25, 34, 49)" : "" }}
      >
        {testResult && (
          <p className="font-semibold">
            {testResult === example.output ? (
              <span className="text-green text-xl">
                <FaCheckCircle />
              </span>
            ) : (
              <span className="text-red-400 text-xl">
                <FaCircleXmark />
              </span>
            )}
          </p>
        )}
      </div>
    </>
  );
}
