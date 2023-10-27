// @ts-ignore
// @ts-nocheck

export default function validateEmail(email: string) {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email) {
    return { valid: false, message: "Email is required." };
  }

  if (email.length > 254) {
    return { valid: false, message: "Email is too long." };
  }

  if (!emailRegex.test(email)) {
    return { valid: false, message: "Invalid email address." };
  }

  const parts = email.split("@");
  const username = parts[0];
  const domain = parts[1];

  if (username.length > 64) {
    return { valid: false, message: "Username is too long." };
  }

  if (domain.length > 255) {
    return { valid: false, message: "Domain name is too long." };
  }

  if (domain.startsWith(".") || domain.endsWith(".")) {
    return { valid: false, message: "Domain name is invalid." };
  }

  const domainParts = domain.split(".");
  for (let i = 0; i < domainParts.length; i++) {
    const part = domainParts[i];
    if (part.length > 63) {
      return { valid: false, message: "Domain name is too long." };
    }
    if (!/^[a-zA-Z0-9-]+$/.test(part)) {
      return {
        valid: false,
        message: "Domain name contains invalid characters.",
      };
    }
  }

  return { valid: true, message: "Email is valid." };
}
