import validateEmail from './validateEmail'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css';


function validateUsername(username) {
  const regex = /^[a-zA-Z0-9_-]{2,50}$/; // regular expression to match only alphanumeric characters, underscores and hyphens, with a length between 2 and 30 characters
  return regex.test(username); // returns true if the input matches the regular expression, false otherwise
}
 
function validateTextarea(textareaId, minLength, maxLength) {
  const notyf = new Notification(3000)
  const textarea = document.getElementById(textareaId);
  const textareaLength = textarea.value.length;
  if (textareaLength < minLength) {
    notyf.error(`Please enter at least ${minLength} characters`);
    return false;
  } else if (textareaLength > maxLength) {
    notyf(`Please enter no more than ${maxLength} characters`);
    return false;
  } else {
    return true;
  }
}

class Notification {

    constructor(duration = 3000) {
        this.duration = duration
        if (typeof window !== "undefined") {
            this.notif = new Notyf({
                duration: this.duration,
                position: {
                    x: "right",
                    y: "top"
                }
            })
        }

    }

    error(message = "ERROR") {
        this.notif.error({
            message,
            dismissible: true
        })
    }

    success(message = "SUCCESS") {
        return this.notif.success({
            message,
            dismissible: true
        })
    }
}

export {Notification, validateEmail, validateUsername, validateTextarea}