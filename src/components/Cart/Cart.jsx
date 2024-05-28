import React, { useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";
function Cart({ productsInCart, setProductsInCart }) {
  const [cartSum, setCartSum] = useState(0);
  function handleDeleteButton(name) {
    let removedIndex = productsInCart.findIndex(
      (product) => product.name === name
    );
    setProductsInCart((prevState) => [
      ...prevState.slice(0, removedIndex),
      ...prevState.slice(removedIndex + 1),
    ]);
    console.log(productsInCart);
  }
  const updateCounter = (name, counter) => {
    let changedArray = productsInCart.map((product) =>
      product.name === name ? { ...product, counter: counter } : product
    );
    setProductsInCart(changedArray);
  };
  const calcCartSum = (arr) => {
    return arr.reduce(
      (acc, currElem) =>
        (acc +=
          ((currElem.price * (100 - currElem.discount)) / 100) *
          currElem.counter),
      0
    );
  };
  useEffect(() => {
    setCartSum(calcCartSum(productsInCart));
    console.log(cartSum);
  }, [productsInCart]);
  const handleClearCartButton = () => {
    setProductsInCart([]);
  };
  return (
    <div className="cart-div">
      {productsInCart.length === 0
        ? null
        : productsInCart.map((item) => (
            <CartItem
              {...item}
              key={item.name}
              itemID={Math.random()}
              handleDeleteButton={handleDeleteButton}
              handleCounter={updateCounter}
            />
          ))}
      <span style={{ marginTop: "auto", color: "#0a7272" }}>
        {productsInCart.length === 0
          ? "Ваша корзина пуста "
          : "Итоговая стоимость вашей покупки: "}
        <span style={{ color: "orange" }}>{cartSum}</span>
        <span style={{ marginTop: "auto", color: "#0a7272" }}> ₽</span>
      </span>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "1rem",
        }}
      >
        <button onClick={handleClearCartButton} style={{ margin: "1rem" }}>
          Очистить корзину
        </button>
        <button
          onClick={() => {
            if (productsInCart.length !== 0) {
              alert("Заказ успешно оформлен!!!");
              setProductsInCart([]);
            } else {
              alert("Добавьте товары в корзину, чтобы оформить заказ");
            }
          }}
          style={{ margin: "1rem" }}
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
}

export default Cart;
