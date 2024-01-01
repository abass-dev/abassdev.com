import { Notification } from "@/utils";
import { useRef } from "react";
import { HiClipboardDocument } from "react-icons/hi2";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  snippetType: string;
}
const CodeBlock = ({ code, snippetType }: CodeBlockProps) => {
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
        className="absolute top-0 right-0 border-none overflow-hidden"
        onClick={handleCopy}
      >
        <div className="text-white hover:text-green-700">
          <HiClipboardDocument size={25} />
        </div>
      </button>
    </div>
  );
};

export default CodeBlock;
