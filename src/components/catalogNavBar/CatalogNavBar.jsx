import classes from "./CatalogNavBar.module.css";
import { categoriesList } from "../../localData/categoriesArray";
import Category from "./Categories/Category";
import React from "react";
export default function CatalogNavBar({
  value,
  handleInput,
  handleCategory,
  curCategory,
}) {
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
        value={value}
        onChange={(event) => handleInput(event.target.value)}
        placeholder="Начните вводить название продукта"
      />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {categoriesList.map((elem) => (
          <Category
            category={elem}
            checked={curCategory === elem}
            onClick={(value) => handleCategory(value)}
          />
        ))}
      </div>
    </div>
  );
}
