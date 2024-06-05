import React, { useEffect, useState } from "react";
import { outputAtom, codeErrorAtom } from "../atoms/OutputAtom.js";
import { useRecoilState } from "recoil";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export default function CodeResults({ problem }) {
  const [output, setOutput] = useRecoilState(outputAtom);
  const [isError, setIsError] = useRecoilState(codeErrorAtom);

  return (
    <div className="bg-greyBlue row-span-2 rounded-lg overflow-hidden">
      <div
        className="h-12 px-6 flex items-center text-sm font-semibold text-dull"
        style={{ background: "rgb(25, 34, 49)" }}
      >
        Testing
      </div>
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
            output={output[1]}
            isError={isError}
          />
        ))}
      </div>
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
  useEffect(() => {
    console.log(testResult)
  },[testResult])
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
