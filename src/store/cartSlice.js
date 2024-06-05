import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsInCart: [],
  lastOrder: [],
  cartSum: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload: product }) => {
      const isExist = state.productsInCart.find(
        (item) => item.name === product.name
      );
      if (isExist) {
        alert("Товар уже в корзине");
      } else {
        state.productsInCart.push(product);
        localStorage.setItem("cart", JSON.stringify(state.productsInCart));
      }
    },
    removeFromCart: (state, { payload: product }) => {
      state.productsInCart = state.productsInCart.filter(
        (item) => item.name !== product.name
      );
      localStorage.setItem("cart", JSON.stringify(state.productsInCart));
    },
    loadCart: (state) => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        state.productsInCart = JSON.parse(storedCart);
      } else {
        state.productsInCart = [];
        localStorage.setItem("cart", JSON.stringify([]));
      }
    },
    saveOrder: (state) => {
      let { lastOrder, productsInCart } = state;
      if (productsInCart.length === 0) {
        alert("Невозможно сохранить пустой заказ");
      } else {
        lastOrder = productsInCart;
        localStorage.setItem("lastOrder", JSON.stringify(lastOrder));
      }
    },
    loadLastOrder: (state) => {
      const loadedOrder = localStorage.getItem("lastOrder");
      if (loadedOrder) {
        if (loadedOrder.length !== 0) {
          state.lastOrder = JSON.parse(loadedOrder);
          state.productsInCart = state.lastOrder;
        } else {
          alert("Нет сохраненных заказов");
          state.lastOrder = [];
          localStorage.setItem("cart", JSON.stringify([]));
        }
      } else {
        state.lastOrder = [];
        localStorage.setItem("cart", JSON.stringify([]));
      }
    },
    clearCart: (state) => {
      state.productsInCart.length = 0;
      localStorage.setItem("cart", JSON.stringify([]));
    },
    incrementProductCounter: (state, { payload: product }) => {
      state.productsInCart = state.productsInCart.map((item) =>
        item.name === product.name
          ? { ...item, counter: item.counter + 1 }
          : item
      );
    },
    decrementProductCounter: (state, { payload: product }) => {
      state.productsInCart = state.productsInCart.map((item) =>
        item.name === product.name
          ? { ...item, counter: Math.max(item.counter - 1, 1) }
          : item
      );
    },
    getCartSum: (state) => {
      if (state.productsInCart.length === 0) {
        state.cartSum = 0;
        return;
      }

      const sum = state.productsInCart.reduce((acc, product) => {
        const discountedPrice =
          product.price * ((100 - product.discount) / 100);
        return acc + discountedPrice * product.counter;
      }, 0);

      state.cartSum = Math.round(sum);
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  loadCart,
  saveOrder,
  loadLastOrder,
  clearCart,
  incrementProductCounter,
  decrementProductCounter,
  getCartSum,
} = cartSlice.actions;

export default cartSlice.reducer;
