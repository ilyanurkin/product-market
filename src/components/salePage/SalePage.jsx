import Card from "../Card/Card";
import { useSelector } from "react-redux";
function SalePage() {
  const products = useSelector((state) => state.products.products);
  const handleAddToCartClick = () => {
    console.log("добавлено в корзину");
  };
  return (
    <div className="catalog-div">
      {products
        .filter((product) => product.discount !== 0)
        .map((product) => (
          <Card
            product={product}
            handleAddToCartClick={handleAddToCartClick}
            inFavorite={false}
          />
        ))}
    </div>
  );
}

export default SalePage;
