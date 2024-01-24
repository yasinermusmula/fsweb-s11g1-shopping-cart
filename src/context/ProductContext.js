import { createContext, useContext, useState } from "react";
import { data } from "../data";
import { CartContext } from "./CartContext";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const { cart, setCart } = useContext(CartContext);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart([...cart, item]); // cart statetini güncellemek için setCart hook'una önce asıl cart üzerinde çalışmayalım diye cart'ı kopyalıyoruz daha sonra da item olarak ekliyoruz.
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
export default ProductContextProvider;