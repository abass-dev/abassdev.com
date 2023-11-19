interface AlertProps {
  message: string;
  type: string;
  link?: string;
  linkDesk?: string;
}

function Alert({ message, type, link, linkDesk }: AlertProps) {
  return (
    <div
      style={{
        borderLeft: `5px solid ${
          type === "success"
            ? "green"
            : type === "error"
            ? "red"
            : type === "warning"
            ? "yellow"
            : "transparent"
        }`,
        marginBottom: "15px",
      }}
    >
      <div
        style={{
          opacity: 0.8,
          padding: "0 0 5px 5px",
          color: `${
            type === "success"
              ? "rgb(26, 156, 0)"
              : type === "error"
              ? "#ff0000"
              : type === "warning"
              ? "#fdf000"
              : "transparent"
          }`,
        }}
      >
        <p
          className={`${
            type === "success"
              ? "text-info"
              : type === "error"
              ? "text-red-600"
              : ""
          }`}
        >
          {type === "error" ? "Error" : type === "success" ? "Info" : ""}
        </p>
      </div>
      <p
        style={{
          backgroundColor: `${
            type === "success"
              ? "rgba(26, 156, 0, 0.3)"
              : type === "error"
              ? "#ff000030"
              : type === "warning"
              ? "#fdf00030"
              : "transparent"
          }`,
          padding: "15px",
          margin: 0,
          fontSize: "14px",
        }}
      >
        {message}
        <br />
        {link && (
          <a className="text-blue-700" href={link}>
            {link}
          </a>
        )}
      </p>
    </div>
  );
}

export default Alert;
