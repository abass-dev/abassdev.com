export default function Button({ text, isLoadingText, iconName, isLoadingIconName, isLoading, className }) {
  return (
    <button
      type='submit'
      disabled={isLoading ? true : false}
      className={`btn btn-outline-primary form-submit-button ${className}`}
    >
      {isLoading ? (
        isLoadingIconName ? (
          <span>
            {isLoadingText} <i className={isLoadingIconName}></i>
          </span>
        ) : (
          isLoadingText
        )
      ) : iconName ? (
        <span>
          {text} <i className={iconName}></i>
        </span>
      ) : (
        text
      )}
    </button>
  );
}
