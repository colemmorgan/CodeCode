import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";

export default function CodeEditor() {
  const [value, setValue] = useState("");


  const handleEditorWillMount = (monaco) => {
    // Define the custom theme
    monaco.editor.defineTheme('default', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        {
          token: "identifier",
          foreground: "9CDCFE"
        },
        {
          token: "identifier.function",
          foreground: "DCDCAA"
        },
        {
          token: "type",
          foreground: "#ffffffB2"
        },
        {
          token: "comment",
          foreground: "#10b981",  
          fontStyle: "italic"  
        },
        {
          token: "keyword",
          foreground: "#3A79cb"  
        }
      ],
      colors: {
        'editor.background': '#1e293b',
        'editor.lineHighlightBackground': '#1e293b'
      }
    });
  };


  const base = `// Your Code Here
  
  
  
  
  
  











// End Your Code`
  return (
    <div className="bg-greyBlue rounded-lg row-span-3 overflow-y-hidden">
      <div className="h-10 mb-4 flex  items-center px-12 text-xs text-dull" style={{ background: "rgb(25, 34, 49)" }} >
        ShiftCipher.js
      </div>
      <Editor
        height={"80%"}
        defaultLanguage="javascript"
        defaultValue={base}
        theme="default"
        value={value}
        onChange={(value) => setValue(value)}
        beforeMount={handleEditorWillMount}
      />
      <div className="h-14 w-full flex items-center justify-end px-4" style={{ background: "rgb(25, 34, 49)" }}>
        <button className="mr-4 bg-blue border border-gray-600 py-2 px-3 rounded-md text-sm">Run Code</button>
        <button className="bg-green rounded-md py-2 px-3 text-sm">Submit Code</button>
      </div>
    </div>

    
  );
}
