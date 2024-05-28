export default function Button({ children, value, isActive, onChange }) {
  return (
    <button
      onClick={() => onChange(value)}
      style={
        isActive === value
          ? {
              backgroundColor: "#0a7272",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "8rem",
              height: "3rem",
            }
          : {
              transition: "1s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "8rem",
              height: "3rem",
            }
      }
    >
      {children}
    </button>
  );
}
