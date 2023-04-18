import { useState } from "react";
import { getItemWithExpiration, setItemWithExpiration } from "../../Cache";
import axios from "axios";
import {
  ErrorMessage,
  SuccessMessage,
  URL,
  validateEmail,
} from "../../Helpers";
import Notification from "../../Notification";
<<<<<<< HEAD
import "../index.css";

const notyf = new Notification(2000);
=======
import { TextInput } from '../UI'
import '../index.css'

const notyf = new Notification(2000)
>>>>>>> 85b62f7 (refactor(auth): add  custom textInput)
export default function LoginForm() {
  const [userInput, setUserInputs] = useState({
    email: "",
    password: "",
  });
  const [admin, setAdmin] = useState(null);
  const [invalidInput, setInvalidInput] = useState({
    email: false,
    password: false,
  });
  const [isLoading, setLoading] = useState(false);
  const [errCredentials, setErrCredentials] = useState();
  const [message, setMessage] = useState();

  function inputHander(e) {
    const inputValue = e.target.value.trim();
    const inputName = e.target.name;
    setInvalidInput({});
    setUserInputs((prev) => {
      return {
        ...prev,
        [inputName]: inputValue,
      };
    });
  }
  function onSubmitEmailHandler(event) {
    event.preventDefault();
    const valideEmail = validateEmail(userInput.email);
    if (!valideEmail.valid) {
      setInvalidInput((prev) => {
        return {
          ...prev,
          email: true,
        };
      });
      return notyf.error(valideEmail.message);
    }

    if (userInput.password.trim() === "" || userInput.password.trim() === " ") {
      setInvalidInput((prev) => {
        return {
          ...prev,
          password: true,
        };
      });
      return notyf.error("Password is required");
    }
<<<<<<< HEAD
    setLoading(true);
    axios
      .post(URL.admin, userInput)
      .then((response) => {
        const data = response.data;
        if (data.status === "failed") {
          setErrCredentials("ERROR: Invalid credentials");
          setMessage(null);
          setLoading(false);
        } else {
          setAdmin(data.response);
          setMessage("SUCCESS: Login successfully");
          setErrCredentials(null);
          setLoading(false);
        }
=======
    setLoading(true)
   axios.post(URL.admin, userInput).then((response) => {
         const data = response.data
         if(data.status === 'failed') {
           setErrCredentials('ERROR: Invalid credentials')
           setMessage(null)
           setLoading(false)
         } else {
           setAdmin(data.response);
           setMessage('SUCCESS: Login successfully')
           setErrCredentials(null)
           setLoading(false)
         }
      }).catch((error) => {
        console.log('err in catch',error)
        setLoading(false)
      }) .finally(() => {
        setLoading(false)
>>>>>>> 85b62f7 (refactor(auth): add  custom textInput)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  return (
    <div id="loginFormContainer" className="my-container ff-ubuntu">
       
      <form
        onSubmit={onSubmitEmailHandler}
        className="ui-form bg-white shadow-sm p-4 card border-0"
        id="loginForm"
      >
<<<<<<< HEAD
        {errCredentials && <ErrorMessage message={errCredentials} />}
        {message && <SuccessMessage message={message} />}
        <i
          style={{
            color: "#00000080",
            fontSize: "50px",
            padding: "24px",
          }}
          className="text-center fa fa-user"
        ></i>

        <div className="contact-form-input">
          <label
            style={{ color: invalidInput.email && "red" }}
            className="primary-font"
            for="email"
          >
            Email Address:
          </label>
          <input
            className="mb-4"
            type="text"
            style={{
              outline: "none",
              border: "1px solid #00000030",
              fontSize: "20px",
              borderRadius: "5px",
              padding: "5px",
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
            style={{ color: invalidInput.password && "red" }}
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
              border: "1px solid #00000030",
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
=======
    {errCredentials && 
      <div style={{
      borderLeft: '5px solid red',
      borderTop: '1px solid #00000030',
      borderBottom: '1px solid #00000030',
      borderRight: '1px solid #00000030',
      borderRadius: '3px',
      marginBottom: '15px'
      }}>
        <p style={{color: '#ff5000',padding: '5px', margin: 0, fontSize: '14px'}}>{errCredentials}</p>
      </div>
    }
    {message && 
      <div style={{
      borderLeft: '5px solid green', 
      borderTop: '1px solid #00000030',
      borderBottom: '1px solid #00000030',
      borderRight: '1px solid #00000030',
      borderRadius: '3px',
      marginBottom: '15px'
      }}>
      <p style={{
        color: 'green',
        padding: '5px', 
        margin: 0,
        fontSize: '14px'
        }}>{message}</p>
      </div>
    }
        <i style={{color: '#00000080',fontSize: "50px",margin: '10px 0 50px 0'}} className="text-center fa fa-user"></i>
        <TextInput {...{
           inpuType: 'email',
           isInvalid: invalidInput.email,
           onChange: inputHander,
           value: userInput.email
        }}/>
        <TextInput {...{
           inpuType: 'password',
           isInvalid: invalidInput.password,
           onChange: inputHander,
           value: userInput.password 
        }}/>
       
>>>>>>> 85b62f7 (refactor(auth): add  custom textInput)
        <button
          type="submit"
          disabled={isLoading ? true : false}
          className="btn btn-outline-primary form-submit-button"
        >
          {isLoading ? "Wait..." : "Login"}
        </button>
      </form>
    </div>
  );
}
