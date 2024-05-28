import Card from "../Card/Card";
function SalePage({ arrSearchedByName, handleAddToCartClick }) {
  return (
    <div className="catalog-div">
      {arrSearchedByName
        .filter((product) => product.discount !== 0)
        .map((product) => (
          <Card
            {...product}
            handleAddToCartClick={handleAddToCartClick}
            inFavorite={false}
          />
        ))}
    </div>
  );
}

export default SalePage;
