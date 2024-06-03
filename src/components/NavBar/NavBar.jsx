import classes from "../NavBar/NavBar.module.css";
import Button from "../Button/Button";

import { navBarMenu } from "../../localData/navBarElements";
export default function NavBar({ activeContent, onChangeContent }) {
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
              {0}
            </button>
          ) : null}
        </Button>
      ))}
    </section>
  );
}
