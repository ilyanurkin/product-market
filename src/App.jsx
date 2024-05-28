import "./App.css";
import Header from "../src/components/Header/Header";
import NavBar from "../src/components/NavBar/NavBar";
import About from "./components/Slider/About";
import SideBar from "./components/SideBar/SideBar";
import Card from "./components/Card/Card";
import CatalogNavBar from "./components/catalogNavBar/catalogNavBar";
import { productList } from "./localData/productList";
import React, { useEffect } from "react";
import SalePage from "./components/salePage/SalePage";
import Cart from "./components/Cart/Cart";
function App() {
  const [activeContent, setActiveContent] = React.useState("О Компании");
  const [arrSearchedByName, setArrSearchedByName] = React.useState(productList);
  const [productName, setProductName] = React.useState("");
  const [checkedCategory, setCheckedCategory] = React.useState("");
  const [productsInCart, setProductsInCart] = React.useState([]);
  const [loadedFavorites, setLoadedFavorites] = React.useState([]);
  const HandleNameChange = (value) => {
    setProductName(value);
  };
  const handleAddToCartClick = (
    name,
    imgsrc,
    price,
    measurement,
    category,
    discount,
    counter
  ) => {
    if (productsInCart.length !== 0) {
      let inCart = productsInCart.find((item) => item.name === name);
      if (inCart) {
        alert("Уже в корзине");
      } else {
        setProductsInCart([
          ...productsInCart,
          { name, imgsrc, price, measurement, category, discount, counter },
        ]);
      }
    } else {
      setProductsInCart([
        ...productsInCart,
        { name, imgsrc, price, measurement, category, discount, counter },
      ]);
    }
  };
  useEffect(() => {
    setArrSearchedByName(
      productList.filter((product) =>
        product.name.toLowerCase().includes(productName.toLowerCase())
      )
    );
  }, [productName]);
  useEffect(() => {
    let keys = Object.keys(localStorage);
    let curFavArray = [];
    for (let key of keys) {
      curFavArray.push(JSON.parse(localStorage.getItem(key)));
    }
    setLoadedFavorites(curFavArray);
  }, [localStorage.length]);
  useEffect(() => {
    switch (checkedCategory) {
      case "":
        setArrSearchedByName(productList);
        break;
      case "Сбросить":
        setArrSearchedByName(productList);
        break;

      default:
        setArrSearchedByName(
          productList.filter((product) => product.category === checkedCategory)
        );
        break;
    }
  }, [checkedCategory]);
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <NavBar
          isActive={activeContent}
          cartSizeCount={productsInCart.length}
          onChange={(current) => setActiveContent(current)}
        ></NavBar>

        {activeContent === "О Компании" ? (
          <div className="intro-content">
            <About /> <SideBar />
          </div>
        ) : null}
        {activeContent === "Каталог" ? (
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div className="catalog-div">
              {arrSearchedByName.map((product) => (
                <Card
                  key={product.name}
                  {...product}
                  handleAddToCartClick={handleAddToCartClick}
                  inFavorite={false}
                />
              ))}
            </div>
            <CatalogNavBar
              value={productName}
              handleInput={HandleNameChange}
              curCategory={checkedCategory}
              handleCategory={(current) => setCheckedCategory(current)}
            />
          </div>
        ) : null}

        {activeContent === "Избранное" ? (
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
        {activeContent === "Акции" ? (
          <SalePage
            arrSearchedByName={arrSearchedByName}
            handleAddToCartClick={handleAddToCartClick}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
