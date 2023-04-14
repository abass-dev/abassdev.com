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

  const code = `const Button = ({ label, onClick }) => (
    <button onClick={onClick}>{label}</button>
  );
  
`;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>React in one</h1>
        </div>

        <div className="col-md-6">
          <CodeSnippet code={code} />
        </div>
        <div className="col-md-6">
          Description: This is a functional component in React that represents a
          button element. It takes in two props, label and onClick, and renders
          a button element with the label prop as its text content. When the
          button is clicked, the function passed as the onClick prop will be
          executed. This can be used as a reusable and customizable button
          component in a React application.
        </div>
      </div>
    </div>
  );
}
