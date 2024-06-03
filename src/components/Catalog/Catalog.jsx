import React from "react";
import Card from "../Card/Card";
import CatalogNavBar from "../catalogNavBar/catalogNavBar";
import { useSelector } from "react-redux";
export default function Catalog() {
  const products = useSelector((state) => state.products.products);
  const handleAddToCartClick = () => {
    console.log("Добавлено в корзину");
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div className="catalog-div">
        {products.map((product) => (
          <Card
            key={product.name}
            {...product}
            handleAddToCartClick={handleAddToCartClick}
            inFavorite={false}
          />
        ))}
      </div>
      <CatalogNavBar />
    </div>
  );
}
