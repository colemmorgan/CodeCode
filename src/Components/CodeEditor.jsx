import React, { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import {
  outputAtom,
  codeErrorAtom,
  confettiAtom,
  runCodeOutputAtom,
  submissionLoadingAtom,
} from "../atoms/OutputAtom.js";
import { useRecoilState } from "recoil";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { auth, firestore } from "../firebase/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaDownload } from "react-icons/fa";
import { LuLoader2 } from "react-icons/lu";
import { IoReload } from "react-icons/io5";

export default function CodeEditor({ problem, setSolved }) {

  const editorOptions = {
    scrollBeyondLastLine: false,
    minimap: { enabled: false },}
  const handleEditorWillMount = (monaco) => {
    monaco.editor.defineTheme("default", {
      base: "vs-dark",
      inherit: true,
      rules: [
        {
          token: "identifier",
          foreground: "9CDCFE",
        },
        {
          token: "identifier.function",
          foreground: "DCDCAA",
        },
        {
          token: "type",
          foreground: "#ffffffB2",
        },
        {
          token: "comment",
          foreground: "#10b981",
          fontStyle: "italic",
        },
        {
          token: "keyword",
          foreground: "#3A79cb",
        },
      ],
      colors: {
        "editor.background": "#1e293b",
        "editor.lineHighlightBackground": "#1e293b",
      },
    });
  };

  const [user] = useAuthState(auth);
  const [code, setCode] = useState("");
  const [testOutput, setTestOutput] = useRecoilState(runCodeOutputAtom);
  const [output, setOutput] = useRecoilState(outputAtom);
  const [isError, setIsError] = useRecoilState(codeErrorAtom);
  const [showConfetti, setShowConfetti] = useRecoilState(confettiAtom);
  const [submissionLoading, setSubmissionLoading] = useRecoilState(submissionLoadingAtom)

  useEffect(() => {
    const code = localStorage.getItem(`code-${problem.id}`);
    setCode(code ? JSON.parse(code) : "");
    const localOutput = localStorage.getItem(`output-${problem.id}`);
    setOutput(output ? JSON.parse(localOutput) : {id:problem.id, outputs:[]});
  }, [problem]);

  const judge0ApiBaseUrl = import.meta.env.VITE_JUDGE0_API;

  const handleRunCode = async () => {
    if(submissionLoading) return
    setSubmissionLoading(true);
    const response = await fetch(
      `${judge0ApiBaseUrl}/submissions?base64_encoded=false&wait=true`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source_code: code,
          language_id: 63,
        }),
      }
    );
    const data = await response.json();

    if (data.token) {
      const resultResponse = await fetch(
        `${judge0ApiBaseUrl}/submissions/${data.token}`
      );
      const resultData = await resultResponse.json();
      if (resultData.stdout) {
        setTestOutput([problem.id, resultData.stdout]);
      } else if (resultData.error) {
        setTestOutput([problem.id, resultData.error]);
      }
    }
    setSubmissionLoading(false);
  };

  const handleSubmit = async () => {
    if(submissionLoading) return
    setSubmissionLoading(true);
    setOutput([problem.id, ""]);
    setIsError("");

    let outputs = [];
    for (let test of problem.testCode) {
      let submissionCode = code + test;

      try {
        const response = await fetch(
          `${judge0ApiBaseUrl}/submissions?base64_encoded=false&wait=true`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              source_code: submissionCode,
              language_id: 63,
            }),
          }
        );

        const data = await response.json();

        if (data.token) {
          const resultResponse = await fetch(
            `${judge0ApiBaseUrl}/submissions/${data.token}`
          );
          const resultData = await resultResponse.json();

          if (resultData.stdout) {
            outputs.push(resultData.stdout.trim());
          } else if (resultData.stderr) {
        
            setIsError(resultData.stderr);
            outputs.push("Error");
          }
          else {
            outputs.push("Error");
            setIsError(resultData.stderr)
          }
        }
      } catch (error) {
        setIsError(error);
        outputs.push("Error");
      }
    }

    setOutput({ id: problem.id, outputs: outputs });
    localStorage.setItem(
      `output-${problem.id}`,
      JSON.stringify({ id: problem.id, outputs: outputs })
    );

    if (checkSolution(outputs)) {
      handleProblemCompletion();
    }

    setSubmissionLoading(false);
  };

  const onChange = (value) => {
    setCode(value);
    localStorage.setItem(`code-${problem.id}`, JSON.stringify(value));
  };

  const checkSolution = (jOutput) => {
    try {
      for (let i = 0; i < jOutput.length; i++) {
        if (jOutput[i] === problem.examples[i].output) {
          continue;
        } else {
          return false;
        }
      }
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleProblemCompletion = async () => {
    const userRef = doc(firestore, "users", user.uid);
    await updateDoc(userRef, { solvedProblems: arrayUnion(problem.id) });
    setSolved(true);
    setShowConfetti(true);
    const timeoutId = setTimeout(() => {
      setShowConfetti(false);
    }, 4000);
    return () => clearTimeout(timeoutId);
  };


  const downloadFile = () => {
    const fileName = `${problem.id}.js`;
    const blob = new Blob([code], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
  };



  
  return (
    <div className="bg-greyBlue rounded-lg  overflow-y-hidden min-h-[575px] mt-2 xl:min-h-0 xl:mt-0">
      <div
        className="h-10 mb-4 flex  items-center justify-between "
        style={{ background: "rgb(25, 34, 49)" }}
      >
        <p className="h-full flex items-center bg-greyBlue px-8 text-xs">
          ShiftCipher.js
        </p>
        <div className="flex px-8 py-1">
          <span onClick={downloadFile} className="cursor-pointer p-2 rounded-lg transition-all text-sm hover:bg-lightBlue  mx-2 "><FaDownload /></span>
          <span onClick={() => setCode("")} className="cursor-pointer p-2 rounded-lg transition-all text-sm hover:bg-lightBlue   mx-1"><IoReload /></span>
        </div>
      </div>
      <Editor
        height={"80%"}
        defaultLanguage="javascript"
        theme="default"
        options={editorOptions}
        value={code}
        onChange={(value) => onChange(value)}
        beforeMount={handleEditorWillMount}
      />
      <div
        className="h-14 w-full flex items-center justify-end px-4"
        style={{ background: "rgb(25, 34, 49)" }}
      >
        <button
          className="mr-4 bg-blue border border-gray-600 py-2 px-3 rounded-md text-sm min-w-[90px] flex justify-center"
          onClick={handleRunCode}
        >
          {submissionLoading ? <LuLoader2 className="animate-spin text-lg"/>: <span>Run Code</span>}
        </button>
        <button
          className="bg-green rounded-md py-2 px-3 text-sm min-w-[110px] flex justify-center"
          onClick={handleSubmit}
        >
          {submissionLoading ? <LuLoader2 className="animate-spin text-lg"/> : <span>Submit Code</span>}
        </button>
      </div>
    </div>
  );
}
