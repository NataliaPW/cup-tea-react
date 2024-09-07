import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
   //делаем хранение в localStorage корзины
   const [cart, setCart] = useState(null);
   //получаем данные из localStorage
   useEffect(() => {
      const storeCart = JSON.parse(localStorage.getItem('cartBoxR90') || '[]');
      setCart(storeCart);
   }, []);
   
   //сохранение днных в корзину дщсфдЫещкфпу
   useEffect(() => {
      if (Array.isArray(cart)) {
          localStorage.setItem('cartBoxR90', JSON.stringify(cart));
      };
   },[cart]);

   //пишим методы для добавления и удаления товара в localStorage
   const addToCart = (product,quantity) => {
      const newCart = [...cart];
      const itemIndex = newCart.findIndex(item => item.id === product.id);

      if (itemIndex>=0) {
         newCart[itemIndex].quantity += quantity;
      } else {
         newCart.push({ ...product, quantity });
      };

      setCart(newCart);
   };

   const removeFromCart = (productId) => {
      setCart(cart.filter(item => item.id !== productId));
   };

   const updateQuantity = (productId,quantity) => {
      if (quantity<=0) {
         removeFromCart(productId);
      }else{
         setCart(cart.map(item => item.id === productId ? { ...item, quantity }: item));
      };
   };

   const clearCart = () => {
      setCart([]);
   };

   return(
      <CartContext.Provider value={{cart,addToCart,updateQuantity,removeFromCart, clearCart}}>
         { children}
      </CartContext.Provider>
   );
};

export const useCart = () => useContext(CartContext);