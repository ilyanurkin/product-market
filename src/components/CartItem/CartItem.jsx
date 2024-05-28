import React, { useEffect, useState } from "react";
import classes from "./CartItem.module.css";
export default function CartItem({
  name,
  imgsrc,
  price,
  measurement,
  category,
  handleDeleteButton,
  discount,
  handleCounter,
}) {
  const [counter, setCounter] = useState(1);
  useEffect(() => handleCounter(name, counter), [counter]);
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
            setCounter((prev) => prev - 1);
            if (counter === 1) {
              setCounter(1);
            }
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
            setCounter((prev) => prev + 1);
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
          onClick={() => handleDeleteButton(name)}
        >
          <p style={{ color: "white", fontSize: "1.1rem" }}>x</p>
        </button>
      </div>
    </div>
  );
}
