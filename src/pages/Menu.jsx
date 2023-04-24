import { useAppContext } from "../context/AppContextProvider";

import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";

const Menu = () => {
  const { data, getFilteredItems } = useAppContext();

  const filteredItems = getFilteredItems();

  return !data ? (
    <h3>Loading menu...</h3>
  ) : (
    <>
      <Filters />
      <h3>Menu</h3>
      <div className="product-container">
        {filteredItems.map((product) => (
          <ProductCard key={product.id} product={product} menu />
        ))}
      </div>
    </>
  );
};

export default Menu;
