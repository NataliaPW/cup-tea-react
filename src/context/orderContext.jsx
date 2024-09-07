import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
   //делаем объект из списка name формы
   const [orderDetails, setOrderDetails] = useState({
      name:'',
      phone: '',
      address: '',
      paymentMethod:'cash'
   });

   //обновляем и записываем данные name формы
   const updateOrderDetails = (field,value) => {
      setOrderDetails((prevDetails) => ({
         ...orderDetails,
         [field]:value
      }))
   };

   //очищаем заказ
   const clearOrderDetails = () => {
       setOrderDetails({
      name:'',
      phone: '',
      address: '',
      paymentMethod:'cash'
   });
   };
   
     return(
      <OrderContext.Provider value={{orderDetails,updateOrderDetails,clearOrderDetails}}>
         { children}
      </OrderContext.Provider>
   );
};

export const useOrder = () => useContext(OrderContext);
