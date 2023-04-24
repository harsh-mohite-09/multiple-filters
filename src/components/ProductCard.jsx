import { useAppContext } from "../context/AppContextProvider";

const ProductCard = ({ product, menu }) => {
  const { cart, addToCart } = useAppContext();
  const inCart = cart.some(({ id }) => id === product.id);
  const { id, name, description, price, image, delivery_time } = product;
  return (
    <div className="product-card" key={id}>
      <div>
        <img src={image} alt="" width="100%" />
        <p>Name: {name}</p>
        <p>
          <b>Description: </b>
          {description}
        </p>
        <br />
        <p>Price: {price}</p>
        <p>Delivery Time: {delivery_time}</p>
      </div>
      {menu && (
        <button disabled={inCart} onClick={() => addToCart(product)}>
          {inCart ? "Added to Cart" : "Add to cart"}
        </button>
      )}
    </div>
  );
};

export default ProductCard;
