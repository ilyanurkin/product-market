import React from "react";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import {
  incrementProductCounter,
  decrementProductCounter,
  removeFromCart,
} from "../../store/cartSlice";
export default function CartItem({ product }) {
  const dispatch = useDispatch();

  const { name, imgsrc, price, measurement, category, discount, counter } =
    product;
  return (
    <div className={classes.CartItem}>
      <img src={imgsrc} alt="" />
      <p style={{ marginLeft: "1rem" }}>
        <p>{name}</p>
        <p style={{ color: "gray", fontSize: "0.7rem" }}>{category}</p>
        <p style={{ fontSize: "0.7rem" }}>
          {price} ₽/{measurement}
        </p>
      </p>

      <div className={classes.infoDiv}>
        <p id={classes.price}>
          {discount === 0 ? (
            price * counter
          ) : (
            <p>
              <span style={{ color: "black", textDecoration: "line-through" }}>
                {price * counter}
              </span>{" "}
              {Math.round(price * ((100 - discount) / 100) * counter)} ₽
            </p>
          )}
        </p>
        <button
          className={classes.CartItemButton}
          onClick={() => {
            dispatch(decrementProductCounter(product));
          }}
        >
          {"-"}
        </button>
        <p style={{ width: "2rem", textAlign: "center" }}>{counter}</p>
        <button
          className={classes.CartItemButton}
          onClick={() => {
            dispatch(incrementProductCounter(product));
          }}
        >
          {"+"}
        </button>
        <button
          className={classes.delete}
          onClick={() => dispatch(removeFromCart(product))}
        >
          <p style={{ color: "white", fontSize: "1.1rem" }}>x</p>
        </button>
      </div>
    </div>
  );
}
