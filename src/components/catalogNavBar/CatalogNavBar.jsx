import classes from "./CatalogNavBar.module.css";
import { categoriesList } from "../../localData/categoriesArray";
import Category from "./Categories/Category";
import React from "react";
import { useDispatch } from "react-redux";
import { searchByName, shawAll } from "../../store/productsSlice";
export default function CatalogNavBar() {
  const dispatch = useDispatch();
  const handleInput = (inputValue) => {
    if (inputValue === "") {
      dispatch(shawAll());
    } else {
      dispatch(searchByName(inputValue));
    }
  };
  return (
    <div className={classes.CatalogNavBar}>
      <p
        style={{
          color: "#0a7272",
          fontSize: "1.3rem",
          fontWeight: "400",
          marginBottom: "1rem",
        }}
      >
        Поиск по Каталогу:
      </p>
      <input
        type="text"
        onChange={(event) => handleInput(event.target.value)}
        placeholder="Начните вводить название продукта"
      />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {categoriesList.map((elem) => (
          <Category category={elem} key={elem} />
        ))}
      </div>
    </div>
  );
}
