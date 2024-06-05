import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";

import {
  saveOrder,
  loadLastOrder,
  clearCart,
  getCartSum,
} from "../../store/cartSlice";
import { useEffect } from "react";
function Cart() {
  const dispatch = useDispatch();
  let cartSum = useSelector((state) => state.cart.cartSum);
  const productsInCart = useSelector((state) => state.cart.productsInCart);
  useEffect(() => {
    dispatch(getCartSum());
  }, [productsInCart]);
  return (
    <div className="cart-div">
      {productsInCart.length !== 0
        ? productsInCart.map((item) => (
            <CartItem product={item} key={item.name} />
          ))
        : null}
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
        <button
          onClick={() => dispatch(clearCart())}
          style={{ margin: "1rem" }}
        >
          Очистить корзину
        </button>
        <button
          onClick={() => {
            dispatch(loadLastOrder());
          }}
          style={{ margin: "1rem" }}
        >
          Загрузить последний заказ
        </button>
        <button
          onClick={() => {
            dispatch(saveOrder());
          }}
          style={{ margin: "1rem" }}
        >
          Сохранить заказ
        </button>
      </div>
    </div>
  );
}

export default Cart;
