import { useState } from "react";

import ProductCard from "../components/ProductCard";
import { useAppContext } from "../context/AppContextProvider";

const getTotal = (arr, property) =>
  arr.reduce((acc, curr) => acc + curr[property], 0); // helper function

const Cart = () => {
  const { cart } = useAppContext();
  const [finalPrice, setFinalPrice] = useState(getTotal(cart, "price"));
  const [isApplied, setIsApplied] = useState(false);

  if (cart.length === 0) return <h2>Cart is Empty</h2>; // guard clause

  const totalDeliveryTime = getTotal(cart, "delivery_time");

  const handleClick = () => {
    setIsApplied(true);
    setFinalPrice(finalPrice - 5);
  };

  return (
    <>
      <h3>My Cart</h3>
      <h2>Total Delivery Time: {totalDeliveryTime} minutes</h2>
      <h2>Total Price: Rs {finalPrice}</h2>
      <button onClick={handleClick} disabled={isApplied}>
        Apply coupon
      </button>
      <div className="product-container">
        {cart.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Cart;
