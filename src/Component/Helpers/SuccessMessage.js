export default function SuccessMessage({ message }) {
  console.log(message);
  return (
    <div
      style={{
        borderLeft: "5px solid green",
        borderTop: "1px solid #00000030",
        borderBottom: "1px solid #00000030",
        borderRight: "1px solid #00000030",
        borderRadius: "3px",
        marginBottom: "15px",
      }}
    >
      <p
        style={{
          color: "green",
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
