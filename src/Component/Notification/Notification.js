import { Notyf } from "notyf";
import "notyf/notyf.min.css";

class Notification {
  constructor(duration = 3000) {
    this.duration = duration;
    if (typeof window !== "undefined") {
      this.notif = new Notyf({
        duration: this.duration,
        position: {
          x: "right",
          y: "top",
        },
      });
    }
  }

  error(message = "ERROR") {
    this.notif.error({
      message,
      dismissible: true,
    });
  }

  success(message = "SUCCESS") {
    return this.notif.success({
      message,
      dismissible: true,
    });
  }
}

export default Notification