export default function AlertMessage({ message, type }) {
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
        backgroundColor: `${
          type === "success"
            ? "rgba(26, 156, 0, 0.3)"
            : type === "error"
            ? "#ff000030"
            : type === "warning"
            ? "#fdf00030"
            : "transparent"
        }`,
        marginBottom: "15px",
      }}
    >
      <p
        style={{
          padding: "5px",
          margin: 0,
          fontSize: "14px",
        }}
      >
        {message}
      </p>
    </div>
  );
}
