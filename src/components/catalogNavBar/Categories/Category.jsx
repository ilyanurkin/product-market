import classes from "./Category.module.css";
export default function Category({ category, checked, onClick }) {
  return (
    <button
      onClick={() => onClick(category)}
      className={classes.categoryDiv}
      style={checked ? { color: "white", backgroundColor: "#0a7272" } : {}}
    >
      {category}
    </button>
  );
}
