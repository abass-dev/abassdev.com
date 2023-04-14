import { useState, useEffect, useContext, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ReactInOne() {
  const CodeSnippet = ({ code }) => {
    const codeRef = useRef(null);

    const handleCopy = () => {
      const textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    };

    return (
      <div style={{ position: "relative" }}>
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          ref={codeRef}
        >
          {code}
        </SyntaxHighlighter>
        <button
          onClick={handleCopy}
          style={{
            position: "absolute",
            top: "8px", // adjust the top position as needed
            right: "8px", // adjust the right position as needed
            padding: "8px",
            backgroundColor: "gray",
            color: "white",
            border: "none",
          }}
        >
          <i className="fa fa-copy"></i>
        </button>
      </div>
    );
  };

  const code = `
  function greet() {
    console.log("Hello, world!");
  }
  greet();
`;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>React in one</h1>
          <CodeSnippet code={code} />
        </div>
        <div className="col-md-6">
          <h1>React in one</h1>
          <CodeSnippet code={code} />
        </div>
      </div>
    </div>
  );
}
