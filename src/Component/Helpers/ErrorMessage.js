export default function ErrorMessage({ message }) {
  return (
    <div
      style={{
        borderLeft: "5px solid red",
        borderTop: "1px solid #00000030",
        borderBottom: "1px solid #00000030",
        borderRight: "1px solid #00000030",
        borderRadius: "3px",
        marginBottom: "15px",
      }}
    >
      <p
        style={{
          color: "#ff5000",
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
