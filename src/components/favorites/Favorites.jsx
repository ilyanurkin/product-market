import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites.favorites);
  return (
    <div>
      {favorites.length !== 0 ? (
        favorites.map((product) => (
          <Card product={product} key={product.name} />
        ))
      ) : (
        <p>Добавьте товары в избранное и они отобразятся здесь</p>
      )}
    </div>
  );
}
