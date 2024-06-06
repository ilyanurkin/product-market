import React from "react";
import Card from "../Card/Card";
import CatalogNavBar from "../catalogNavBar/catalogNavBar";
import { useSelector } from "react-redux";
export default function Catalog() {
  const products = useSelector((state) => state.products.products);

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
          <Card key={product.name} product={product} />
        ))}
      </div>
      <CatalogNavBar />
    </div>
  );
}
