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
            <button className={classes.button}>{cartCount}</button>
          ) : null}
          {elem === "Избранное" ? (
            <button className={classes.button}>{favoritesCount}</button>
          ) : null}
        </Button>
      ))}
    </section>
  );
}
