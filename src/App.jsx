import "./App.css";
import Header from "../src/components/Header/Header";
import NavBar from "../src/components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Card from "./components/Card/Card";
import CatalogNavBar from "./components/catalogNavBar/catalogNavBar";
import { productList } from "./localData/productList";
import { useEffect, useState } from "react";
import SalePage from "./components/salePage/SalePage";
import Cart from "./components/Cart/Cart";
import Catalog from "./components/Catalog/Catalog";
import { useDispatch } from "react-redux";
import { loadFavorites } from "./store/favoritesSlice";
import Favorites from "./components/favorites/Favorites";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFavorites());
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
        {/*{activeContent === "Корзина" ? (
          <Cart
            productsInCart={productsInCart}
            setProductsInCart={setProductsInCart}
          />
        ) : null}
        */}
      </div>
    </div>
  );
}

export default App;
