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
          id={classes.toFavorite}
          onClick={() => {
            onClickToFavoriteButton();
          }}
        >
          <img src={inFavoriteIcon} alt="" />
        </button>
      ) : (
        <button
          id={classes.toFavorite}
          onClick={() => {
            onClickToFavoriteButton();
          }}
        >
          <img src={notInFavoriteIcon} alt="" />
        </button>
      )}
      <img src={imgsrc} alt="picture" className={classes.productLogo} />
      <p id={classes.price}>
        <p>
          Категория: {category} {price}Р/{measurement}
        </p>
      </p>
      <p id={classes.name}>{name}</p>
      <div className={classes.cardFooter}>
        <p id={classes.discountedPrice}>
          {discount === 0
            ? price
            : Math.round(price * ((100 - discount) / 100))}{" "}
          ₽
        </p>
        {discount !== 0 ? (
          <p id={classes.discount}> Скидка {discount} %</p>
        ) : null}

        <button className={classes.toCartButton} onClick={onClickAddToCart}>
          <img className={classes.cartLogo} src={cartLogo} />
        </button>
      </div>
    </div>
  );
}
export default Card;
