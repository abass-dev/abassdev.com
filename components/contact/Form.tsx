'use client';

import React, { ChangeEvent, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Notification from "../../utils/Notification";
import {
  validateEmail,
  validateTextarea,
} from "../../helpers";
import emailjs from "@emailjs/browser";
import Alert from "../ui/Alert";
import ProgressBar from "../ui/LoadingBar";
import { Send } from "lucide-react";

const notyf = new Notification(3000);

const Form = () => {
  const t = useTranslations("form");
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    success: "",
    error: "",
  });
  const [invalidInput, setInvalidInput] = useState({
    name: false,
    subject: false,
    email: false,
    message: false,
  });
  const [userInput, setUserInputs] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });


  function inputHandler(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const inputValue = e.target.value;
    const inputName = e.target.name;

    setInvalidInput({
      name: false,
      subject: false,
      email: false,
      message: false,
    });

    setUserInputs((prev) => ({
      ...prev,
      [inputName]: inputValue,
    }));
  }

  async function onSubmitEmailHandler(event: React.FormEvent) {
    event.preventDefault();

    const valideEmail = validateEmail(userInput.email);
    const { name, subject, email, message } = userInput;

    if (name.length <= 2) {
      setInvalidInput((prev) => ({ ...prev, name: true }));
      return notyf.error(t("validation.nameLength"));
    }

    if (subject.length <= 2) {
      setInvalidInput((prev) => ({ ...prev, subject: true }));
      return notyf.error(t("validation.subjectLength"));
    }

    if (!valideEmail.valid) {
      setInvalidInput((prev) => ({ ...prev, email: true }));
      return notyf.error(valideEmail.message);
    }

    if (!validateTextarea("message", 5, 1000)) {
      setInvalidInput((prev) => ({ ...prev, message: true }));
      return;
    }

    const templateParams = {
      user_name: name.trim(),
      to_name: "Abass Dev",
      from_name: name.trim(),
      from_subject: subject.trim(),
      from_email: email.trim(),
      reply_to: email.trim(),
      message: message.trim(),
    };

    setLoading(true);

    try {
      await emailjs.send(
        "service_jebasxm",
        "template_mduuz2e",
        templateParams,
        "9QHGoEPmDaBELUbZn"
      );
      notyf.success(t("messageSent"));
      userInput.name = "";
      userInput.subject = "";
      userInput.email = "";
      setLoading(false);
    } catch (err) {
      setMessage({
        success: "",
        error: t("serverError"),
      });
      setLoading(false);
    }
  }

  return (
    <div className="bg-background shadow-md rounded-md p-5">
      <h2 className="text-3xl text-gray-700 dark:text-gray-100 text-center pb-5">
        {t("getInTouch")}
      </h2>
      {isLoading && <ProgressBar />}
      {message.success && <Alert message={message.success} type="success" />}
      {message.error && <Alert message={message.error} type="error" />}

      <form onSubmit={onSubmitEmailHandler}>
        <div>
          <label
            className={`${invalidInput.name
              ? "text-red-800 dark:text-red-800"
              : "text-gray-700"
              } dark:text-gray-100 block uppercase tracking-wide text-xs font-bold mb-2`}
            htmlFor="username"
          >
            {t("labels.name")}:
          </label>
          <input
            autoComplete="name"
            name="name"
            value={userInput.name}
            onChange={inputHandler}
            className={`${invalidInput.name ? "border-red-300" : ""
              } appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="username"
            type="text"
            placeholder={t("placeholders.name")}
          />
        </div>

        <div>
          <label
            className={`${invalidInput.subject
              ? "text-red-800 dark:text-red-800"
              : "text-gray-700"
              } dark:text-gray-100 block uppercase tracking-wide text-xs font-bold mb-2`}
            htmlFor="subject"
          >
            {t("labels.subject")}:
          </label>
          <input
            value={userInput.subject}
            onChange={inputHandler}
            className={`${invalidInput.subject ? "border-red-300" : ""
              } appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="subject"
            name="subject"
            type="text"
            placeholder={t("placeholders.subject")}
          />
        </div>

        <div>
          <label
            className={`${invalidInput.email
              ? "text-red-800 dark:text-red-800"
              : "text-gray-700"
              } dark:text-gray-100 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
            htmlFor="email"
          >
            {t("labels.email")}:
          </label>
          <input
            autoComplete="email"
            className={`${invalidInput.email ? "border-red-300" : ""
              } appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="email"
            name="email"
            type="text"
            placeholder={t("placeholders.email")}
            onChange={inputHandler}
            value={userInput.email}
          />
        </div>

        <div>
          <label
            className={`${invalidInput.message
              ? "text-red-800 dark:text-red-800"
              : "text-gray-100"
              } dark:text-gray-100 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
            htmlFor="message"
          >
            {t("labels.message")}:
          </label>
          <textarea
            rows={4}
            cols={40}
            className={`${invalidInput.message ? "border-red-300" : ""
              } appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="message"
            placeholder={t("placeholders.message")}
            name="message"
            onChange={inputHandler}
            value={userInput.message}
          />
        </div>
        <button className="flex items-center justify-center gap-2 bg-transparent w-full hover:bg-gray-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
          <span>{t("button.send")}</span>
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default Form;
