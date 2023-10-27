export default function validateUsername(username: string) {
  const regex = /^[a-zA-Z0-9_-]{2,50}$/; // regular expression to match only alphanumeric characters, underscores and hyphens, with a length between 2 and 30 characters
  return regex.test(username); // returns true if the input matches the regular expression, false otherwise
}
