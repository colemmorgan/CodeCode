import React, { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { currentProblemIdAtom, outputAtom, codeAtom, resetOutputSelector } from '../atoms/OutputAtom.js'
import { useRecoilState, useSetRecoilState } from "recoil";

export default function CodeEditor({problem}) {
  const handleEditorWillMount = (monaco) => {
    // Define the custom theme
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

  const [code, setCode] = useState("");
  const [output, setOutput] = useRecoilState(outputAtom);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const code = localStorage.getItem(`code-${problem.id}`)
    setCode(code ? JSON.parse(code) : "")
    const output = localStorage.getItem(`output-${problem.id}`)
    setOutput(output ? [problem.id, JSON.parse(output)] : [problem.id, ""])
  },[problem])

  const judge0ApiBaseUrl = import.meta.env.VITE_JUDGE0_API;

  const handleSubmit = async () => {
    setLoading(true);
    setOutput([problem.id, ""]);
    const submissionCode = code + problem.testCode

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

      if(resultData.stdout) {
        let output = resultData.stdout.split('\n')
        output = output.slice(0, output.length - 1)
        setOutput([problem.id, output])
        localStorage.setItem(`output-${problem.id}`,JSON.stringify(output))
        console.log(checkSolution())
      }

      else if (resultData.stderr) {
        setOutput([problem.id,resultData.stderr])
        localStorage.setItem(`output-${problem.id}`,JSON.stringify([resultData.stderr]))
      }
    } else {
      setOutput([problem.id, ""]);
    }
    setLoading(false);
  };

  const onChange = (value) => {
    setCode(value)
    localStorage.setItem(`code-${problem.id}`, JSON.stringify(value))
  }

  const checkSolution = () => {
    try {
      for(let i = 0; i < output.length; i++) {
        console.log(output[i], problem.examples[i].output)
        if(output[i] === problem.examples[i].output) {
          continue
        }
        else {
          return false
        }

      }
      return true
    }
    catch(error){
      return false
    }
  }

  // useEffect(() => {
  //   console.log(output)
  // },[output])

  return (
    <div className="bg-greyBlue rounded-lg row-span-3 overflow-y-hidden">
      <div
        className="h-10 mb-4 flex  items-center px-12 text-xs text-dull"
        style={{ background: "rgb(25, 34, 49)" }}
      >
        ShiftCipher.js
      </div>
      <Editor
        height={"80%"}
        defaultLanguage="javascript"
        theme="default"
        value={code}
        onChange={(value) => onChange(value)}
        beforeMount={handleEditorWillMount}
      />
      <div
        className="h-14 w-full flex items-center justify-end px-4"
        style={{ background: "rgb(25, 34, 49)" }}
      >
        <button className="mr-4 bg-blue border border-gray-600 py-2 px-3 rounded-md text-sm">
          Run Code
        </button>
        <button className="bg-green rounded-md py-2 px-3 text-sm" onClick={handleSubmit}>
          Submit Code
        </button>
      </div>
    </div>
  );
}
