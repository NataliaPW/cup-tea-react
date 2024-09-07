import classNames from "classnames";
import { Container } from "../Container/Container";
import style from "./Card.module.scss";
import { API_URL } from "../../const";
import { useState } from "react";
import { ProductModal } from "../ProductModal/ProductModal";
import { useCart } from "../../context/cartContext";
import { disabledScroll, enabledScroll } from "../../util/openModalScroll";

export const Card = ({ data, flag = 1 }) => {
  
   let quantity = 1;

   if (data.quantity) {
      quantity = data.quantity;
   }

      const [modalIsOpen, setModalIsOpen] = useState(false);

      const openModal = (e) => {
         e.preventDefault();
         setModalIsOpen(true);
         const scrollPosition = disabledScroll();
         return scrollPosition;
      };

   const closeModal = (scrollPosition) => {
      setModalIsOpen(false);
       enabledScroll(scrollPosition);
   }; 

   const { updateQuantity, removeFromCart } = useCart();
   const [itemQuantity, setItemQuantity] = useState(data.quantity);
   const handleCountMinus = () => {
      const newQuantity = itemQuantity - 1;
      if (newQuantity > 0) {
         setItemQuantity(newQuantity);
         updateQuantity(data.id, newQuantity);
      } else {
         removeFromCart(data.id);
      };
   };

   const handleCountPlus = () => {
      const newQuantity = itemQuantity + 1;
      setItemQuantity(newQuantity);
      updateQuantity(data.id, newQuantity);
   };

 
   return (
      <li className="goods__item card">
       
         <article className="card__article">
                        <div className="card__image-box image__box">
                           <img className="card__image image"
                              src={`${API_URL}${data.img}`} alt={data.title}/>
                        </div>

               <div className="card__text-box">
               {flag === '2' ? (
                   <h3 className="card__name">
                              {data.title}
               </h3>  
                   
                  
                  ) : (
                      <a className="card__link" href="#" onClick={openModal}>
                           <h3 className="card__name" >
                              {data.title}
               </h3>
                  </a>
                  )}
                  
               {flag === '2' ? (
                  
                  <div className="card__count count">
                              <button className="count__btn btn btn--gray" type="button" onClick={handleCountMinus}>-</button>
                        <input className="count__input" name="countNumber" type="number" max="99" min="0" value={data.quantity} readOnly/>
                              <button className="count__btn btn btn--gray" type="button" onClick={handleCountPlus}>+</button>
                           </div>
               ) : ''}

                           <p className="card__price-box">
                              <span className="card__price">
                                 {Number(data.price)*quantity}
                     </span>
                     &nbsp;
                              <span className="card__current">
                                 BYN
                              </span>
                           </p>
                        </div>
         </article>
       <ProductModal isOpen={modalIsOpen} onRequestClose={closeModal} data={data}></ProductModal>
                  </li>
   )
};

/*
 {flag ==='1'? (<ProductModal isOpen={modalIsOpen} onRequestClose={closeModal} data={data}></ProductModal>):''}
 */