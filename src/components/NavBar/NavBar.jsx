import classes from "../NavBar/NavBar.module.css";
import Button from "../Button/Button";
export default function NavBar({ isActive, onChange, cartSizeCount }) {
  const navBarMenu = ["О Компании", "Каталог", "Избранное", "Корзина", "Акции"];
  return (
    <section className={classes.section}>
      {navBarMenu.map((elem) => (
        <Button
          value={elem}
          key={elem}
          isActive={isActive}
          onChange={(current) => onChange(elem)}
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
              {cartSizeCount}
            </button>
          ) : null}
        </Button>
      ))}
    </section>
  );
}
