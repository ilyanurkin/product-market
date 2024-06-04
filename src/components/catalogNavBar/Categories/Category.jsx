import classes from "./Category.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategory } from "../../../store/productsSlice";
export default function Category({ category }) {
  const activeCategory = useSelector((state) => state.products.activeCategory);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(toggleCategory(category))}
      className={classes.categoryDiv}
      style={
        activeCategory === category
          ? { color: "white", backgroundColor: "#0a7272" }
          : {}
      }
    >
      {category}
    </button>
  );
}
