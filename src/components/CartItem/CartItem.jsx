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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "1rem",
        }}
      >
        <p
          style={{
            marginRight: "1rem",
            fontSize: "1.4rem",
            fontWeight: "700",
            color: "orange",
          }}
        >
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
          style={{
            width: "1rem",
            height: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "2rem",
            backgroundColor: "#0a7272",
            color: "white",
            fontSize: "1rem",
          }}
          onClick={() => {
            dispatch(decrementProductCounter(product));
          }}
        >
          {"—"}
        </button>
        <p style={{ width: "2rem", textAlign: "center" }}>{counter}</p>
        <button
          style={{
            width: "1rem",
            height: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "2rem",
            backgroundColor: "#0a7272",
            color: "white",
            fontSize: "1.3rem",
          }}
          onClick={() => {
            dispatch(incrementProductCounter(product));
          }}
        >
          {"+"}
        </button>
        <button
          style={{
            marginLeft: "1rem",
            width: "2rem",
            height: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            borderRadius: "3rem",
            backgroundColor: "red",
          }}
          onClick={() => dispatch(removeFromCart(product))}
        >
          <p style={{ color: "white", fontSize: "1.1rem" }}>x</p>
        </button>
      </div>
    </div>
  );
}
