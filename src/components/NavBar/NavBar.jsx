import classes from "../NavBar/NavBar.module.css";
import Button from "../Button/Button";

import { navBarMenu } from "../../localData/navBarElements";
import { useSelector } from "react-redux";
export default function NavBar({ activeContent, onChangeContent }) {
  const favorites = useSelector((state) => state.favorites.favorites);
  const productsInCart = useSelector((state) => state.cart.productsInCart);
  const cartCount = productsInCart.length;
  const favoritesCount = favorites.length;
  return (
    <section className={classes.section}>
      {navBarMenu.map((elem) => (
        <Button
          value={elem}
          key={elem}
          isActive={activeContent === elem ? true : false}
          onChange={onChangeContent}
        >
          {elem}
          {elem === "Корзина" ? (
            <button
              style={{
                height: "0.1rem",
                width: "0.1rem",
                fontSize: "0.5rem",
                padding: "0.5rem",
                boxSizing: "border-box",
                display: "flex",
                color: "white",
                backgroundColor: "orange",
                border: "none",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "0.3rem",
              }}
            >
              {cartCount}
            </button>
          ) : null}
          {elem === "Избранное" ? (
            <button
              style={{
                height: "0.1rem",
                width: "0.1rem",
                fontSize: "0.5rem",
                padding: "0.5rem",
                boxSizing: "border-box",
                display: "flex",
                color: "white",
                backgroundColor: "orange",
                border: "none",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "0.3rem",
              }}
            >
              {favoritesCount}
            </button>
          ) : null}
        </Button>
      ))}
    </section>
  );
}
