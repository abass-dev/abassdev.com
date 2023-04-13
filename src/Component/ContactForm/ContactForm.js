import "./ContactForm.css";
import { useState } from "react";
import { FaCloudMoon, FaSun } from "react-icons/fa";
import { validateEmail, validateTextarea } from "../Helpers";
import Notification from "../Notification";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const notyf = new Notification(3000);

export default function ContactForm() {
  const RECAPTCHA_SECRET_KEY = "6Le4aYElAAAAAGvJRaAi_sMKZY8vhqG-9P9GMlEP";
  const RECAPTCHA_SITE_KEY = "6Le4aYElAAAAAMwu4zGc9c8WKtP-E-f6zy5zJqlh";
  const [captchaResponse, setCaptchaResponse] = useState(null);
  const [invalidInput, setInvalidInput] = useState({
    name: null,
    email: null,
    message: null,
  });
  const [userInput, setUserInputs] = useState({
    name: "",
    email: "",
    message: "",
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
    // Verify reCAPTCHA response
    try {
      const response = await axios.post(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          secret: RECAPTCHA_SECRET_KEY,
          response: captchaResponse,
        }
      );
      console.log(response);
      if (response.data.success) {
        console.log(response.data.success);
        // The reCAPTCHA response was valid, process the form submission
        // ...
      } else {
        // The reCAPTCHA response was invalid, handle the error
        // ...
      }
    } catch (error) {
      console.log(error);
      // Handle the error
      // ...
    }
    const valideEmail = validateEmail(userInput.email);
    if (userInput.name.trim() === "" || userInput.name.trim() === " ") {
      setInvalidInput((prev) => {
        return {
          ...prev,
          name: true,
        };
      });
      return notyf.error("Name can't be blank");
    }
    if (userInput.name.length <= 2) {
      setInvalidInput((prev) => {
        return {
          ...prev,
          name: true,
        };
      });
      return notyf.error("Your name should be more then 2 characters");
    }
    if (userInput.email === "" || userInput.email === " ") {
      setInvalidInput((prev) => {
        return {
          ...prev,
          email: true,
        };
      });
      return notyf.error("Email can't be blank");
    }
    if (!valideEmail.valid) {
      setInvalidInput((prev) => {
        return {
          ...prev,
          email: true,
        };
      });
      return notyf.error(valideEmail.message);
    }
    if (userInput.message === "" || userInput.message === " ") {
      setInvalidInput((prev) => {
        return {
          ...prev,
          message: true,
        };
      });
      return notyf.error("Message can't be blank");
    }

    if (!validateTextarea("message", 5, 1000)) {
      setInvalidInput((prev) => {
        return {
          ...prev,
          message: true,
        };
      });
      return;
    }

    const { name, email, message } = userInput;

    const templateParams = {
      user_name: name,
      user_email: email,
      reply_to: email,
      message,
    };
    setLoading(true);
    emailjs
      .send(
        "service_jebasxm",
        "template_us13arq",
        templateParams,
        "9QHGoEPmDaBELUbZn"
      )
      .then(
        (response) => {
          notyf.success("Message sent!");
          userInput.name = "";
          userInput.email = "";
          userInput.message = "";
          setLoading(false);
        },
        (err) => {
          notyf.error("FAILED..." + err);
          setLoading(false);
        }
      );
  }
  const handleCaptchaChange = (value) => {
    setCaptchaResponse(value);
  };
  return (
    <div id="contactFormContainer" className="my-container ff-ubuntu">
      <form
        onSubmit={onSubmitEmailHandler}
        className="contact-form shadow-sm"
        id="contactForm"
      >
        <ReCAPTCHA
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={handleCaptchaChange}
        />
        <h2 className="primary-font text-center">Let's Chat</h2>
        <div className="contact-form-input">
          <label
            style={{ color: invalidInput.name && "red" }}
            className="primary-font"
            for="name"
          >
            Name:
          </label>
          <input
            type="text"
            style={{ borderColor: invalidInput.name && "red" }}
            value={userInput.name}
            onChange={inputHander}
            placeholder="What's your name?"
            id="name"
            name="name"
          />
        </div>
        <div className="contact-form-input">
          <label
            style={{ color: invalidInput.email && "red" }}
            className="primary-font"
            for="email"
          >
            Email:
          </label>
          <input
            type="email"
            style={{ borderColor: invalidInput.email && "red" }}
            onChange={inputHander}
            value={userInput.email}
            placeholder="e.g: john@gmail.com"
            id="email"
            name="email"
          />
        </div>
        <div className="contact-form-input">
          <label
            style={{ color: invalidInput.message && "red" }}
            className="primary-font"
            for="message"
          >
            Message:
          </label>
          <textarea
            style={{ borderColor: invalidInput.message && "red" }}
            value={userInput.eamil}
            onChange={inputHander}
            placeholder="Hi, What's up?"
            id="message"
            name="message"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading ? true : false}
          className="btn btn-outline-primary form-submit-button"
        >
          {isLoading ? (
            <span>
              SENDING... <i className="fa fa-spinner"></i>
            </span>
          ) : (
            <span>
              SEND <i className="fa fa-paper-plane"></i>
            </span>
          )}
        </button>
      </form>
    </div>
  );
}
