import React from "react";
import { ScCartCheckout } from "./scParts";
import { useCart } from "../context/CartContext";

// Components
import Item from "./ShoppingCartItem";

const ShoppingCart = () => {
  const { cart, getCartTotal } = useCart();

  return (
    <div>
      {cart.map((item, orderInCart) => (
        <Item key={`${item.id}${orderInCart}`} order={orderInCart} {...item} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
