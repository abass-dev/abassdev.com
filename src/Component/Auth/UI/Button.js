export default function Button({ text, isLoadingText, isLoading, className }) {
  return (
    <button
      type="submit"
      disabled={isLoading ? true : false}
      className={`btn btn-outline-primary form-submit-button ${className}`}
    >
      {isLoading ? isLoadingText : text}
    </button>
  );
}
