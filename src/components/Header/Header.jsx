import React from "react";
import logo from "../../../public/images/logo.svg";
import vkLink from "../../../public/images/vk-link.svg";
import tgLink from "../../../public/images/tg-link.svg";
import siteLogo from "../../../public/images/site.svg";
import gmailLink from "../../../public/images/gmail-link.svg";
import classes from "./Header.module.css";
export default function Header() {
  return (
    <header className={classes.header}>
      <section>
        <img src={logo}></img>
        <p className={classes.product} style={{ marginLeft: "1rem" }}>
          Product <span className={classes.market}>Market</span>
        </p>
      </section>
      <section>
        <img src={siteLogo} alt="" />
        <a href="../../App.jsx" style={{ marginLeft: "1rem" }}>
          {" "}
          ProductMarket.ru
        </a>
      </section>
      <section className={classes.searchSection}>
        <a href="../../App.jsx" style={{ marginLeft: "1rem" }}>
          {" "}
          <img src={vkLink} alt="" />
        </a>
        <a href="../../App.jsx" style={{ marginLeft: "1rem" }}>
          {" "}
          <img src={tgLink} alt="" />
        </a>
        <a href="../../App.jsx" style={{ marginLeft: "1rem" }}>
          {" "}
          <img src={gmailLink} alt="" />
        </a>
      </section>
    </header>
  );
}
