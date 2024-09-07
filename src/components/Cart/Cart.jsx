import classNames from "classnames";
import { Container } from "../Container/Container";
import style from "./Cart.module.scss";
import { Card } from "../Card/Card";
import { useCart } from "../../context/cartContext";
import { SkiletonLoader } from "../SkiletonLoader/SkiletonLoader";
import { useOrder } from "../../context/orderContext";
import { useEffect, useState } from "react";
import { API_URL } from "../../const";
import Modal from "react-modal";
import { useLocation } from "react-router-dom";


const customStyles = {
   content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%,-50%)',
      maxWidth: '745px',
      width: '100%',
      backgroundColor: '#6cb9ab',
      color:'#fff'
   },
};

Modal.setAppElement('#root');

export const Cart = () => {
   const { cart, clearCart } = useCart();
  

      const totalCount = cart ? cart.reduce((acc, item) =>  item.quantity + acc , 0):0;

   const totalPrice = cart ? cart.reduce((acc, item) => item.quantity * item.price + acc, 0) : 0;
   
    const [isDisabledBtn, setIsDisabledBtn ] = useState(true);
   const location = useLocation();

      useEffect(() => {
         if (location.pathname === '/cart') {
            if (totalPrice===0) {
               setIsDisabledBtn(true);
            } else{
               setIsDisabledBtn(false); 
            };
         };
        
   }, [location.pathname, totalPrice]);
   
   //заказ - форма
   const { orderDetails, updateOrderDetails, clearOrderDetails } = useOrder();
   
   const handleChange = (e) => {
      const { name, value } = e.target;
      updateOrderDetails(name, value);
   };

   //формируем заказ
   const [orderStatus, setOrderStatus] = useState(null);
    const [orderId, setOrderId] = useState(null);
   const [modalIsOpen, setModalIsOpen] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      const orderData = {
         ...orderDetails,
         items: cart.map(({ id, quantity })=>({ id, quantity })),
      };

      try {
         const response = await fetch(`${API_URL}/api/orders`,{
            method: 'POST',
            headers: {
               "Content-Type":"application/json"
            },
            body:JSON.stringify(orderData),
         });

         if (!response.ok) {
            throw new Error('Ошибка отправки заказа');
         };

         const result = await response.json();
         //console.log('result=', result);
         //console.log('result.order.id=',result.order.id);
         setOrderStatus('success');
         setOrderId(result.order.id)
         clearCart();
         clearOrderDetails();      
      } catch (error) {
         setOrderStatus(error);
         console.error(`Ошибка: ${error}`);
      } finally{
         setModalIsOpen(true);
         //console.log('1=',1);
      };
   };

   const closeModal = () => {
      setModalIsOpen(false); 
   };

   return (
 <section className="cartModal">
            <div className="cartModal__container">
               <div className="cartModal__top">
                  <div className="cartModal__goods goods">
               <h2 className="goods__title title">
                  <span className="goods__text">
                     Корзина
                  </span>
                  <span className="goods__count">
                        ({totalCount})
                  </span>
               </h2>

                   <ul className="goods__list">
               {cart ? cart.map(item => {
                  return (
                     <Card key={item.id} data={item} flag={'2'} />
                  )
               }):<SkiletonLoader/>}
           
               </ul>
               </div>

               <div className="cartModal__form-box form__box">
                  <div className="form__price price-box">
                     <p className="price-box__name">Итого:</p>
                     <p className="price-box__price">
                        <span className="price-box__number">{totalPrice}</span>
                        &nbsp;
                        <span className="price-box__current">BYN</span>
                     </p>
                  </div>
                  <button className="form__btn btn btn--pink" form="form-delivery" type="submit" onClick={handleSubmit} disabled={isDisabledBtn}>
                     Заказать
                  </button>
               </div>
            </div>
            <form className="cartModal__form form" id="form-delivery">
                <legend className="form__title title">
                  Доставка
               </legend>

               <ul className="form__list">
                  <li className="form__item">
                      <label htmlFor="name" className="form__label sr-only">имя</label>
                     <input type="text" className="form__input" name="name" id="name" placeholder="Имя"
                        autoComplete="off" required value={ orderDetails.name} onChange={handleChange} />
                  </li>
                  <li className="form__item">
                        <label htmlFor="phone" className="form__label sr-only">Телефон</label>
                        <input type="tel" className="form__input form__field--phone" name="phone" id="phone"
                           placeholder="Телефон" autoComplete="off" required value={ orderDetails.phone} onChange={handleChange}/>
                     </li>
                     <li className="form__item">
                      <label htmlFor="address" className="form__label sr-only">Адрес</label>
                        <input type="text" className="form__input" name="address" id="address" placeholder="Адрес"
                           autoComplete="off" required value={ orderDetails.address} onChange={handleChange}/>
                  </li>
               </ul>

               <fieldset className="form__radio-box radio-box">
                  <legend className="radio-box__title">Оплата:</legend>

                   <ul className="radio-box__list">
                  <li className="radio-box__item radio">
                        <input className="radio__input" name="paymentMethod" id="cardpay" value="card"
                           type="radio" checked={ orderDetails.paymentMethod==='card'} onChange={handleChange}/>
                           <label htmlFor="cardpay" className="radio__label">
                              <span className="radio__label-check"></span>
                              <span className="radio__label-text">Картой</span>
                           </label>
                  </li>
                  <li className="radio-box__item radio">
                        <input className="radio__input" name="paymentMethod" id="cashpay" value="cash"
                           type="radio" checked={ orderDetails.paymentMethod==='cash'} onChange={handleChange}/>
                           <label htmlFor="cashpay" className="radio__label">
                              <span className="radio__label-check"></span>
                              <span className="radio__label-text">Наличными</span>
                           </label>
                  </li>
               </ul>
               </fieldset>
            </form>
         </div>
         <Modal onRequestClose={closeModal} isOpen={modalIsOpen} style={customStyles}>
            <div className="modalCart__wrapper">
            <h2 className="modalCart__title">
               {orderStatus==='success'?`Заказ успешно отправлен. Номер заказа: ${orderId}`:`Ошибка отправки заказа`}
            </h2>
            <button className="modalCart__btn-close" type="button" onClick={closeModal}>&times;</button>
            </div>
         </Modal>
         </section>
   )
};