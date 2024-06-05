import React from "react";
import classes from "./Card.module.css";
import cartLogo from "../../../public/images/cart-icon.png";
import inFavoriteIcon from "../../../public/images/inFavorites.svg";
import notInFavoriteIcon from "../../../public/images/!inFavorite.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../../store/favoritesSlice";
import { addToCart } from "../../store/cartSlice";
function Card({ product }) {
  const { name, imgsrc, category, price, measurement, discount } = product;
  const favorites = useSelector((state) => state.favorites.favorites);

  const dispatch = useDispatch();
  const onClickAddToCart = () => {
    dispatch(addToCart(product));
  };

  const onClickToFavoriteButton = () => {
    dispatch(toggleFavorites(product));
  };
  const existChecker = (product) => {
    const isExist = favorites.some((prod) => prod.name === product.name);
    if (isExist) return true;
    else return false;
  };
  return (
    <div className={classes.card}>
      {existChecker(product) ? (
        <button
          style={{
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0",
          }}
          onClick={() => {
            onClickToFavoriteButton();
          }}
        >
          <img src={inFavoriteIcon} alt="" />
        </button>
      ) : (
        <button
          style={{
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0",
          }}
          onClick={() => {
            onClickToFavoriteButton();
          }}
        >
          <img src={notInFavoriteIcon} alt="" />
        </button>
      )}
      <img
        src={imgsrc}
        alt="picture"
        className={classes.productLogo}
        style={{ marginLeft: "auto", marginRight: "auto" }}
      />
      <p
        style={{
          fontSize: "0.6rem",
          color: "gray",
          paddingRight: "10px",
          marginBottom: "auto",
          marginTop: "1rem",
          marginLeft: "auto",
        }}
      >
        <p>
          Категория: {category} {price}Р/{measurement}
        </p>
      </p>
      <p
        style={{
          marginBottom: "auto",
          marginRight: "auto",
          marginLeft: "1rem",
          fontSize: "1.5rem",
          fontWeight: "600",
        }}
      >
        {name}
      </p>
      <div className={classes.cardFooter}>
        <p
          style={{
            display: "block",
            fontSize: "30px",
            fontWeight: "600",
          }}
        >
          {discount === 0
            ? price
            : Math.round(price * ((100 - discount) / 100))}{" "}
          ₽
        </p>
        {discount !== 0 ? (
          <p
            style={{
              color: "white",
              backgroundColor: "red",
              padding: "0.4rem",
              fontSize: "0.7rem",
              borderRadius: "1rem",
            }}
          >
            {" "}
            Скидка {discount} %
          </p>
        ) : null}

        <button
          style={{
            width: "3rem",
            height: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
          }}
          onClick={onClickAddToCart}
        >
          <img src={cartLogo} style={{ width: "3rem", height: "3rem" }} />
        </button>
      </div>
    </div>
  );
}
export default Card;
