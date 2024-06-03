import React, { useEffect, useState } from "react";
import { outputAtom } from '../atoms/OutputAtom.js'
import { useRecoilState} from "recoil";

export default function CodeResults({problem}) {

  const [output, setOutput] = useRecoilState(outputAtom);

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
        {problem.examples.map((example,index) => (
    <ResultRow example={example} key={example.id} index={index} output={output[1]}/>
))}
      </div>
    </div>
  );
}


function ResultRow({example, index, output}) {
  const [testResult, setTestResult] = useState("")
  useEffect(() => {
    try {
      setTestResult(output[index])
    }
    catch {

    }
  })
  return (
    <>
        <div className="col-span-4 h-10 flex items-center px-4 " style={{backgroundColor: index % 2 == 0 ? "rgb(25, 34, 49)": ""}}>
          <p className=" font-semibold">{example.input}</p>
        </div>
        <div className="col-span-3 h-10 flex items-center px-3" style={{backgroundColor: index % 2 == 0 ? "rgb(25, 34, 49)": ""}}>
          <p className="font-semibold">{testResult}</p>
        </div>
        <div className="col-span-3 h-10 flex items-center px-3" style={{backgroundColor: index % 2 == 0 ? "rgb(25, 34, 49)": ""}}>
          <p className="font-semibold">{example.output}</p>
        </div>
        <div className="col-span-2 h-10  flex items-center px-3" style={{backgroundColor: index % 2 == 0 ? "rgb(25, 34, 49)": ""}}>
          <p className="font-semibold">{testResult === example.output ? "PASS" : "FAIL"}</p>
        </div>
     
    </>
  )
}