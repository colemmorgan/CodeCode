import React, { useEffect, useState } from "react";
import {
  outputAtom,
  codeErrorAtom,
  runCodeOutputAtom,
  submissionLoadingAtom,
} from "../atoms/OutputAtom.js";
import { useRecoilState } from "recoil";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { LuLoader2 } from "react-icons/lu";

export default function CodeResults({ problem }) {
  const [output, setOutput] = useRecoilState(outputAtom);
  const [codeStderr, setCodeStderr] = useRecoilState(codeErrorAtom);
  const [userRunCode, setUserRunCode] = useRecoilState(runCodeOutputAtom);
  const [submissionLoading, setSubmissionLoading] = useRecoilState(submissionLoadingAtom)
  const [showTab, setShowTab] = useState({
    testing: true,
    output: false,
    stdin: false,
    stderr: false,
  });

  const showTesting = () => {
    setShowTab({
      testing: true,
      output: false,
      stdin: false,
      stderr: false,
    });
  };
  const showOutput = () => {
    setShowTab({
      testing: false,
      output: true,
      stdin: false,
      stderr: false,
    });
  };

  const showStdin = () => {
    setShowTab({
      testing: false,
      output: false,
      stdin: true,
      stderr: false,
    });
  };

  const showStderr = () => {
    setShowTab({
      testing: false,
      output: false,
      stdin: false,
      stderr: true,
    });
  }


  

  return (
    <div className="bg-greyBlue rounded-lg overflow-hidden min-h-[350px] mt-2 xl:min-h-0 xl:mt-0">
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
        <p
          className="mr-2 transition-all rounded-md hover:bg-darkGreen py-2 px-6 cursor-pointer"
          onClick={showStderr}
          style={{
            backgroundColor: showTab.stderr? "rgba(16, 185, 129, 0.1)" : "",
          }}
        >
          Stderr
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
              loading={submissionLoading}
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
            {userRunCode[1] ? <p>{userRunCode[1]}</p> : <p className="text-sm">"Run Code" output will appear here.</p>}
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
              <p className="text-sm mb-1.5" key={example.input}>{example.input}</p>
            ))}
          </div>
        </div>
      )}
      {showTab.stderr && (
        <div className="w-full h-full py-4 px-4">
          <div
            className="w-full min-h-64 p-3 rounded-md"
            style={{ backgroundColor: "rgb(25, 34, 49)" }}
          >
           {codeStderr ? <p>{codeStderr}</p> : <p>No Errors.</p>}
          </div>
        </div>
      )}
    </div>
  );
}

function ResultRow({ example, index, output, loading }) {
  const [testResult, setTestResult] = useState("");
  useEffect(() => {
    console.log(output)
    try {
      setTestResult(output[index]);
    } 
    catch {setTestResult("Error");}
  },[output])
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
       {!loading ?  <p className="font-semibold">{testResult}</p> : <span className="animate-spin text-lg"><LuLoader2/></span>}
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
        {!loading ? <div>{testResult && (
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
        )}</div> : <span className="animate-spin text-xl"><LuLoader2/></span>}
        
      </div>
    </>
  );
}
