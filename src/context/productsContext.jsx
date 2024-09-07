import { createContext, useContext, useEffect, useState } from "react";
import { API_URL } from "../const";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
   //делаем state для хранения массива данных
   const [products, setProducts] = useState([]);
   //делаем state для хранения строковых данных
   const [category, setCategory] = useState("");

   const categories = {
      tea: 'Чай',
      coffee: 'Кофе',
      teapots: 'Чайники',
      cezves: 'Турки',
      other:'Прочее'
   };

   //получаем данные с сервера
   useEffect(() => {
      if (category) {
         fetch(`${API_URL}/api/products/${category}`)
            .then(response => {
               if (!response.ok) {
                  throw new Error(response.statusText);
               };

               return response.json();
            })
            .then(data=>setProducts(data))
            .catch(error => console.error(`Ошибка сервера ${error}`));
      };
   }, [category]);
   
   return (
      <ProductContext.Provider value={{ products, setCategory,categories }}>
         {children}
      </ProductContext.Provider>
   );
};

export const useProducts = () => useContext(ProductContext);