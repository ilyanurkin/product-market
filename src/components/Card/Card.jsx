import React from "react";
import classes from "./Card.module.css";
import cartLogo from "../../../public/images/cart-icon.png";
import inFavoriteIcon from "../../../public/images/inFavorites.svg";
import notInFavoriteIcon from "../../../public/images/!inFavorite.svg";
function Card({
  name,
  imgsrc,
  price,
  measurement,
  category,
  handleAddToCartClick,
  discount,
  inFavorite,
  counter,
}) {
  const [inFavoriteStyle, setInFavoriteStyle] = React.useState(
    localStorage.getItem(name) === null ? notInFavoriteIcon : inFavoriteIcon
  );
  const onClickAddToCart = () => {
    handleAddToCartClick(
      name,
      imgsrc,
      price,
      measurement,
      category,
      discount,
      counter
    );
  };
  const onClickToFavoriteButton = () => {
    if (localStorage.getItem(name) === null) {
      localStorage.setItem(
        name,
        JSON.stringify({
          name,
          imgsrc,
          price,
          measurement,
          category,
          handleAddToCartClick,
          discount,
          counter,
        })
      );
      setInFavoriteStyle(inFavoriteIcon);
    } else {
      localStorage.removeItem(name);
      setInFavoriteStyle(notInFavoriteIcon);
    }
  };
  return (
    <div className={classes.card}>
      {!inFavorite ? (
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
          <img src={inFavoriteStyle} alt="" />
        </button>
      ) : null}
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
