// @ts-ignore
// @ts-nocheck

import Notification from "../utils/Notification";

export default function validateTextarea(textareaId, minLength, maxLength) {
  const notyf = new Notification(3000);
  const textarea = document.getElementById(textareaId);
  const textareaValue = textarea.value.trim();
  const textareaLength = textareaValue.length;
  if (textareaLength < minLength) {
    notyf.error(`Your message should be more than ${minLength} characters`);
    return false;
  } else if (textareaLength > maxLength) {
    notyf(`Please enter no more than ${maxLength} characters`);
    return false;
  } else {
    return true;
  }
}
