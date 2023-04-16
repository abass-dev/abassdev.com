import { useState } from "react";
import { getItemWithExpiration, setItemWithExpiration } from "../../Cache";
import axios from "axios";

export default function LoginForm() {
  const [userInput, setUserInputs] = useState({
    email: "",
    password: "",
  });
  const [admin, setAdmin] = useState(null);
  const [invalidInput, setInvalidInput] = useState({
    email: null,
    password: null,
  });
  const [isLoading, setLoading] = useState(false);

  function inputHander(e) {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    setInvalidInput({});
    setUserInputs((prev) => {
      return {
        ...prev,
        [inputName]: inputValue,
      };
    });
  }
  async function onSubmitEmailHandler(event) {
    event.preventDefault();
    const fetchAdmin = getItemWithExpiration("admin");
    setItemWithExpiration("admin", fetchAdmin, 0);
    if (fetchAdmin) {
      console.log(fetchAdmin);
      setAdmin(fetchAdmin);
    } else {
      axios.get("http://localhost:5000/api/admin").then((response) => {
        setItemWithExpiration("admin", response.data, 1);
        setAdmin(response.data);
        console.log(response.data);
      });
    }
  }

  return (
    <div id="loginFormContainer" className="my-container ff-ubuntu">
      <form
        onSubmit={onSubmitEmailHandler}
        className="bg-white shadow-sm p-4 card border-0"
        id="loginForm"
      >
        <h2 className="primary-font text-center">
          <i style={{ fontSize: "35px" }} className="fa fa-user"></i>
        </h2>

        <div className="contact-form-input">
          <label style={{}} className="primary-font" for="email">
            Email:
          </label>
          <input
            className="mb-4"
            type="email"
            style={{
              outline: "none",
              border: "1px solid #00000050",
              fontSize: "20px",
              borderRadius: "5px",
              padding: "5px",
              color: invalidInput.email && "red",
              borderColor: invalidInput.email && "red",
            }}
            onChange={inputHander}
            value={userInput.email}
            placeholder="e.g: john@gmail.com"
            id="email"
            name="email"
          />
        </div>

        <div className="contact-form-input">
          <label
            style={{ color: invalidInput.email && "red" }}
            className="primary-font"
            for="password"
          >
            Password:
          </label>
          <input
            className="mb-4"
            type="password"
            style={{
              outline: "none",
              border: "1px solid #00000050",
              fontSize: "20px",
              borderRadius: "5px",
              padding: "5px",
              borderColor: invalidInput.password && "red",
            }}
            onChange={inputHander}
            value={userInput.password}
            placeholder="e.g: Your password"
            id="password"
            name="password"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading ? true : false}
          className="btn btn-outline-primary form-submit-button"
        >
          Login
        </button>
      </form>
    </div>
  );
}
