import "./App.css";
import Header from "../src/components/Header/Header";
import NavBar from "../src/components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Card from "./components/Card/Card";
import CatalogNavBar from "./components/catalogNavBar/catalogNavBar";
import { productList } from "./localData/productList";
import { useState } from "react";
import SalePage from "./components/salePage/SalePage";
import Cart from "./components/Cart/Cart";
import Catalog from "./components/Catalog/Catalog";
function App() {
  const [activeContent, setActiveContent] = useState("О Компании");

  const handleActiveContent = (content) => {
    setActiveContent(content);
    console.log(activeContent);
  };
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
        {/*{activeContent === "Избранное" ? (
          <div className="catalog-div" style={{ minHeight: "2rem" }}>
            {localStorage.length === 0 ? (
              <p>Добавьте товары в избранное и они отобразятся здесь</p>
            ) : (
              loadedFavorites.map((product) => (
                <Card
                  {...product}
                  handleAddToCartClick={handleAddToCartClick}
                  inFavorite={true}
                />
              ))
            )}
          </div>
        ) : null}
        {activeContent === "Корзина" ? (
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
