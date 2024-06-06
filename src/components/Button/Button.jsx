import classes from "./button.module.css";
export default function Button({ children, value, isActive, onChange }) {
  return (
    <button
      onClick={() => onChange(value)}
      className={isActive ? classes.buttonActive : classes.button}
    >
      {children}
    </button>
  );
}
