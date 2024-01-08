const buttonStyle = {
  margin: "1em",
  borderRadius: "5px",
  minHeight: "2em",
};

export default function Button({ children }) {
  return (
    <button style={buttonStyle}>
      {children}
    </button>
  );
}
