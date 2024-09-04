import { createContext, useEffect, useState } from "react";
import all_product from "./assests/allProducts";
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState(()=>{
     const items= JSON.parse(localStorage.getItem("cartData"));
     return items || [];
  });

  const addToCart = (product) => {
    const existingInCart = cartData.find((index) => index.id === product.id);
    console.log(existingInCart);
    if (existingInCart) {
      const updateCart = cartData.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartData(updateCart);
    } else {
      setCartData([...cartData, { ...product, quantity: 1 }]);
    }
  };
  
  const RemoveItem=(productid)=>{
      const newCartData = cartData.filter((item,id)=> item.id !== productid);
      setCartData(newCartData);
  } 
  useEffect(()=>{
        localStorage.setItem("cartData", JSON.stringify(cartData));
  },[cartData]);

    const totalPrice = () => {
      return cartData.reduce((acc, item) => acc + (item.new_price * item.quantity), 0);
    };

    const  totalCartItems = cartData.length;
    console.log(totalCartItems);

  const value = { all_product, cartData, addToCart, RemoveItem, totalPrice, totalCartItems};
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
