import { createSlice } from "@reduxjs/toolkit";
import { productList } from "../localData/productList";
const initialState = { products: productList, activeCategory: null };

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleCategory: (state, { payload: category }) => {
      if (state.activeCategory !== category) {
        state.products = productList;
        state.products = productList.filter(
          (product) => product.category === category
        );
        state.activeCategory = category;
      } else {
        state.products = productList;
        state.activeCategory = null;
      }
    },
    searchByName: (state, { payload: searchQuery }) => {
      if (state.activeCategory === null) {
        state.products = productList;
        state.products = state.products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      } else {
        state.products = productList.filter(
          (product) => product.category === state.activeCategory
        );
        state.products = state.products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
    },
    shawAll: (state) => {
      if (state.activeCategory === null) {
        state.products = productList;
      } else {
        state.products = productList.filter(
          (product) => product.category === state.activeCategory
        );
      }
    },
  },
});

export const { toggleCategory, searchByName, shawAll } = productsSlice.actions;

export default productsSlice.reducer;
