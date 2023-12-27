// @ts-ignore
// @ts-nocheck

import { Notification } from "@/utils";
import { useRef } from "react";
import { HiClipboardDocument } from "react-icons/hi2";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ code, snippetType }) => {
  const codeRef = useRef(null);
  const notyf = new Notification(2000, "center", "center");

  const handleCopy = () => {
    const textArea = document.createElement("textarea");
    textArea.value = code;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    notyf.success("Copied!");
  };

  return (
    <div className="relative">
      <SyntaxHighlighter
        language={snippetType}
        showLineNumbers
        style={vscDarkPlus}
        ref={codeRef}
      >
        {code}
      </SyntaxHighlighter>
      <button
        type="button"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        title="Copy"
        className="overflow-hidden"
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: "0", // adjust the top position as needed
          right: "0", // adjust the right position as needed
          border: "none",
        }}
      >
        <div className="text-white hover:text-green-700">
          <HiClipboardDocument size={25} />
        </div>
      </button>
    </div>
  );
};

export default CodeBlock;
