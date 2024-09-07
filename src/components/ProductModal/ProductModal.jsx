//import classNames from "classnames";
//import { Container } from "../Container/Container";

import { useEffect, useState } from "react";
import { API_URL } from "../../const";
import style from "./ProductModal.module.scss";
import Modal from "react-modal";
import { useCart } from "../../context/cartContext";

const customStyles = {
   content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%,-50%)',
      maxWidth: '745px',
      width: '100%'
   },
};

Modal.setAppElement('#root');

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
   const [quantity, setQuantity] = useState(1);
   const { addToCart,updateQuantity} = useCart();

if (!data) {
   return null;
   };

   const [isDisabledBtn, setIsDisabledBtn] = useState(true);
   
    useEffect(() => {
            if (quantity===1) {
               setIsDisabledBtn(true);
            } else{
               setIsDisabledBtn(false); 
            };
        
   }, [quantity]);

   const handleCountMinus = () => {
      if (quantity>=1) {
         setQuantity(quantity - 1);
      };
   };

   const handleCountPlus = () => {
         setQuantity(quantity + 1);
   };

   const handleAddToCart = () => {
      addToCart(data, quantity);
      onRequestClose();
   };

   return (
      <Modal isOpen={isOpen}
         onRequestClose={onRequestClose}
         style={customStyles} contentLabel="Product modal" >
         
         <article className="card__article card__article--modal">

            <div className="card__image-box image__box">
                 <img className="card__image image"
                              src={`${API_URL}${data.img}`} alt={data.title}/>       
            </div>
            
            <div className="card__text-box">
               <div className="card__top">
                           <h3 className="card__name">
                              {data.title}
               </h3>

               <p className="card__price-box">
                              <span className="card__price">
                                 {data.price}
                              </span>
                              <span className="card__current">
                                 BYN
                              </span>
                           </p>
               </div>
               
                  <ul className="card__list">
                     {Object.entries(data.additional).map(([key, value])=>(
                     <li className="card__item" key={key}>
                           <strong className="card__name-list">{key}: </strong>
                           <p className="card__text-list">{value}</p>          
                     </li>
                     ))}
                  </ul>

               <div className="card__bottom">
                  <div className="card__count count">
                              <button className="count__btn btn btn--gray" type="button" onClick={handleCountMinus} disabled={isDisabledBtn}>-</button>
                     <input className="count__input" name="countNumber" type="number" max="99" min="0" value={quantity} readOnly/>
                              <button className="count__btn btn btn--gray" type="button" onClick={handleCountPlus}>+</button>
                  </div>
                  
                  <button className="card__btn btn btn--pink" type="button" onClick={handleAddToCart}>
                     Добавить
                     </button>
               </div>
                           
            </div>
         </article>                 
         
          <button className="modalCard__btn-close" type="button" onClick={onRequestClose} aria-label="close modal">&times;</button>
         </Modal>
   );
};
/*
          <article className="card__article">
                        <div className="card__image-box image__box">
                           <img className="card__image image"
                              src={`${API_URL}${data.img}`} alt={data.title}/>
                        </div>

                        <div className="card__text-box">
                           <h3 className="card__name">
                              {data.title}
               </h3>
               
                  <ul className="card__list">
                     {Object.entries(data.additional).map(([key, value])=>(
                     <li key={key}>
                           <strong>{key}: </strong>{value}
                     </li>
                     ))}
                  </ul>

                  <button className="card__btn btn btn--pink" type="button">
                     Добавить
                     </button>

                           <p className="card__price-box">
                              <span className="card__price">
                                 {data.price}
                              </span>
                              <span className="card__current">
                                 BYN
                              </span>
                           </p>
               </div>
               
               <button type="button" onClick={onRequestClose} aria-label="close modal"></button>
         </article>  
         */