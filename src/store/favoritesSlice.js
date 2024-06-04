import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: product }) => {
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites) {
        const isExist = state.favorites.find(
          (item) => item.name === product.name
        );
        if (isExist) {
          state.favorites = state.favorites.filter(
            (item) => item.name !== product.name
          );
          localStorage.setItem("favorites", JSON.stringify(state.favorites));
        } else {
          state.favorites.push(product);
          localStorage.setItem("favorites", JSON.stringify(state.favorites));
        }
      }
    },
    loadFavorites: (state) => {
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites) {
        console.log(JSON.parse(storedFavorites));
        state.favorites = JSON.parse(storedFavorites);
      } else {
        state.favorites = [];
        localStorage.setItem("favorites", JSON.stringify([]));
      }
    },
  },
});

export const { toggleFavorites, existChecker, loadFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
