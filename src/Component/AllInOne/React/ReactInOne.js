import { useState, useEffect, useContext, useRef } from "react";
import { Nav } from "../../";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./ReactInOne.css";
import Notification from "../../Notification";
import axios from "axios";
import dateToReadable from "../../Util/dateToReadable";
import { setItemWithExpiration, getItemWithExpiration } from "../../Cache";

export default function ReactInOne() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    // Get an item from localStorage and check for expiration
    const postsFromCache = getItemWithExpiration("posts");
    if (postsFromCache) {
      // Use the retrieved value
      setPosts(postsFromCache);
    } else {
      // Value has expired or does not exist
      axios
        .get("https://api.abassdev.com")
        .then((response) => {
          if (response) {
            // console.log(response);
            setPosts(response.data);
            setItemWithExpiration("posts", response.data, 30);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const CodeSnippet = ({ code }) => {
    const codeRef = useRef(null);
    const notyf = new Notification(2000, "center", "center");

    const handleCopy = () => {
      const textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      notyf.success("Copy!");
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
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Copy"
          className="btn btn-secondary"
          onClick={handleCopy}
          style={{
            position: "absolute",
            top: "8px", // adjust the top position as needed
            right: "8px", // adjust the right position as needed
            border: "none",
          }}
        >
          <i className="copy-code-button fa fa-copy"></i>
        </button>
      </div>
    );
  };

  return (
    <>
      <Nav metaData={{ title: "Ract in one" }} active={"react-in-one"} />
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5 mt-4">
            <h1>ReactJs in one</h1>
          </div>
          {posts &&
            posts.map((value, index) => {
              return (
                <div
                  key={value.id}
                  className="col-12 card border-0 shadow-sm rounded-0 mb-5"
                >
                  <div className="row card-body">
                    <div className="col-md-6">
                      <CodeSnippet code={value.codesniper} />
                    </div>
                    <div className="col-md-6 mt-4 mt-lg-0">
                      <h1 className="h3">
                        {value.id}. {value.title}
                      </h1>
                      <p className="card-text">
                        <strong>Description: </strong>
                        {value.description}
                      </p>
                      <p className="text-secondary">
                        Published on: {dateToReadable(value.created_at)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
