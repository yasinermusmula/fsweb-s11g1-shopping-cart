import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    console.log("addItem dediler", item);
    const newCart = [...cart, item];
    setCart(newCart);
  };

  const removeItem = (index) => {
    console.log("removeItem dediler", index);
    const newCard = cart.filter((item, fIndex) => fIndex !== index);
    setCart(newCard);
  };

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, getCartTotal, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export default CartContextProvider;
