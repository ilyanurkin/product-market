import "./App.css";
import Header from "../src/components/Header/Header";
import NavBar from "../src/components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import SalePage from "./components/salePage/SalePage";
import Catalog from "./components/Catalog/Catalog";
import Cart from "./components/Cart/Cart";
import Favorites from "./components/favorites/Favorites";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { loadCart } from "./store/cartSlice";
import { loadFavorites } from "./store/favoritesSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFavorites());
    dispatch(loadCart());
  }, []);

  const [activeContent, setActiveContent] = useState("О Компании");
  const handleActiveContent = (content) => setActiveContent(content);

  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <NavBar
          activeContent={activeContent}
          onChangeContent={handleActiveContent}
        />

        {activeContent === "О Компании" ? <Intro /> : null}
        {activeContent === "Каталог" ? <Catalog /> : null}
        {activeContent === "Акции" ? <SalePage /> : null}
        {activeContent === "Избранное" ? <Favorites /> : null}
        {activeContent === "Корзина" ? <Cart /> : null}
      </div>
    </div>
  );
}

export default App;
