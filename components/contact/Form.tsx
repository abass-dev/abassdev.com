'use client';

import React, { ChangeEvent, useState } from "react";
import { useTranslations } from "next-intl";
import Notification from "../../utils/Notification";
import { validateEmail, validateTextarea } from "../../helpers";
import emailjs from "@emailjs/browser";
import Alert from "../ui/Alert";
import ProgressBar from "../ui/LoadingBar";
import { Send } from "lucide-react";

const notyf = new Notification(3000);

interface FormState {
  name: string;
  subject: string;
  email: string;
  message: string;
}

interface InvalidInputState {
  name: boolean;
  subject: boolean;
  email: boolean;
  message: boolean;
}

const FormField = ({ label, id, name, type, value, onChange, invalid, placeholder, autoComplete, rows, cols }: {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  invalid: boolean;
  placeholder: string;
  autoComplete?: string;
  rows?: number;
  cols?: number;
}) => (
  <div>
    <label
      className={`${invalid ? "text-red-800 dark:text-red-800" : "text-gray-700"} dark:text-gray-100 block uppercase tracking-wide text-xs font-bold mb-2`}
      htmlFor={id}
    >
      {label}:
    </label>
    {type === "textarea" ? (
      <textarea
        rows={rows}
        cols={cols}
        className={`${invalid ? "border-red-300" : ""} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        id={id}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    ) : (
      <input
        autoComplete={autoComplete}
        className={`${invalid ? "border-red-300" : ""} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    )}
  </div>
);

const Form = () => {
  const t = useTranslations("form");
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState({ success: "", error: "" });
  const [invalidInput, setInvalidInput] = useState<InvalidInputState>({
    name: false,
    subject: false,
    email: false,
    message: false,
  });
  const [userInput, setUserInputs] = useState<FormState>({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const validateForm = (): boolean => {
    const { name, subject, email, message } = userInput;
    const valideEmail = validateEmail(email);

    if (name.length <= 2) {
      setInvalidInput((prev) => ({ ...prev, name: true }));
      notyf.error(t("validation.nameLength"));
      return false;
    }

    if (subject.length <= 2) {
      setInvalidInput((prev) => ({ ...prev, subject: true }));
      notyf.error(t("validation.subjectLength"));
      return false;
    }

    if (!valideEmail.valid) {
      setInvalidInput((prev) => ({ ...prev, email: true }));
      notyf.error(valideEmail.message);
      return false;
    }

    if (!validateTextarea("message", 5, 1000)) {
      setInvalidInput((prev) => ({ ...prev, message: true }));
      return false;
    }

    return true;
  };

  const inputHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;

    setInvalidInput((prev) => ({
      ...prev,
      [inputName]: false,
    }));

    setUserInputs((prev) => ({
      ...prev,
      [inputName]: inputValue,
    }));
  };

  const onSubmitEmailHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) return;

    const templateParams = {
      user_name: userInput.name.trim(),
      to_name: "Abass Dev",
      from_name: userInput.name.trim(),
      from_subject: userInput.subject.trim(),
      from_email: userInput.email.trim(),
      reply_to: userInput.email.trim(),
      message: userInput.message.trim(),
    };

    setLoading(true);

    try {
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        throw new Error('Missing EmailJS environment variables');
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      notyf.success(t("messageSent"));
      setUserInputs({ name: "", subject: "", email: "", message: "" }); // Reset form
      setMessage({ success: t("messageSent"), error: "" });
    } catch (err: unknown) {
      setMessage({
        success: "",
        error: t("serverError"),
      });
      if (err instanceof Error) {
        console.error(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background shadow-md rounded-md p-5">
      <h2 className="text-3xl text-gray-700 dark:text-gray-100 text-center pb-5">
        {t("getInTouch")}
      </h2>
      {isLoading && <ProgressBar />}
      {message.success && <Alert message={message.success} type="success" />}
      {message.error && <Alert message={message.error} type="error" />}

      <form onSubmit={onSubmitEmailHandler}>
        <FormField
          label={t("labels.name")}
          id="username"
          name="name"
          type="text"
          value={userInput.name}
          onChange={inputHandler}
          invalid={invalidInput.name}
          placeholder={t("placeholders.name")}
          autoComplete="name"
        />
        <FormField
          label={t("labels.subject")}
          id="subject"
          name="subject"
          type="text"
          value={userInput.subject}
          onChange={inputHandler}
          invalid={invalidInput.subject}
          placeholder={t("placeholders.subject")}
        />
        <FormField
          label={t("labels.email")}
          id="email"
          name="email"
          type="text"
          value={userInput.email}
          onChange={inputHandler}
          invalid={invalidInput.email}
          placeholder={t("placeholders.email")}
          autoComplete="email"
        />
        <FormField
          label={t("labels.message")}
          id="message"
          name="message"
          type="textarea"
          value={userInput.message}
          onChange={inputHandler}
          invalid={invalidInput.message}
          placeholder={t("placeholders.message")}
          rows={4}
          cols={40}
        />
        <button
          className="flex items-center justify-center gap-2 w-full bg-transparent text-gray-900 dark:text-white border border-gray-900 dark:border-white hover:bg-gray-200 dark:hover:bg-gray-700 hover:border-transparent font-semibold py-2 px-4 rounded transition"
          disabled={isLoading}
          aria-label={t("button.send")}
        >
          <span>{t("button.send")}</span>
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default Form;