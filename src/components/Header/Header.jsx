
import classNames from "classnames";
import { Container } from "../Container/Container";
/*import logo from "../../assets/images/header/logo.svg"

  <img className="logo__icon" src={logo} alt="logo" width="155" height="33"/>*/
import style from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useCart } from "../../context/cartContext";
import { useProducts } from "../../context/productsContext";
import { mainScrollHeaderTopFunc } from "../../util/util";

export const Header = () => {
   const headerRef = useRef(null);
   const headerTopRef = useRef(null);
   const location = useLocation();

   const getActiveClass = (category) => {
      const currentCategory = new URLSearchParams(location.search).get("category");
      return currentCategory === category ? 'active' : '';
   };

    //добавление класса для фиксировании шапки при скроле
   useEffect(() => {
      mainScrollHeaderTopFunc(headerTopRef.current);
   });

   useEffect(() => {
      if (location.pathname==='/cart') {
         headerRef.current.classList.add('header__container--green');
      } else {
         headerRef.current.classList.remove('header__container--green');
   };
   }, [location.pathname]);

   const { cart } = useCart();

   const totalCount = cart ? cart.reduce((acc, item) => item.quantity + acc, 0) : '0';
   
   //получаем значения title
   const { categories } = useProducts();

   //открытие меню
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const menuBurger = () => {
      if (!isMenuOpen) {
         setIsMenuOpen(true);
         document.body.classList.toggle('hidden');
      } else {
          setIsMenuOpen(false);
          document.body.classList.remove('hidden');
      };
   };

   const closeMenu = () => {
      setIsMenuOpen(false);
      document.body.classList.remove('hidden');
   };

   return (
       <header className="header" id="header">
         <div className="header__top"  ref={headerTopRef}>
            <div className="header__container" ref={headerRef}>
               <div className="header__menu menu">
                  <Link to="/" className="menu__logo logo" aria-label="logo">
                     <img className="logo__icon" src="./images/icon/logo.svg" alt="logo" width="102" height="67"/>
                  </Link>

                  <nav className={`menu__nav ${isMenuOpen ?"menu__nav--active" : ''}`}>
                     <ul className={`menu__list ${isMenuOpen ? "menu__list--active" : ''}`}>
                        {Object.entries(categories).map(([key, value]) => (
                           <li key={key} className={`menu__item ${isMenuOpen ? "menu__item--active" : ''}`}>
                              <Link className={`menu__link ${isMenuOpen ? "menu__link--active" : ''} ${getActiveClass(key)}`} to={`/products?category=${key}`} onClick={closeMenu}>
                              <span className="menu__text">{value}</span>
                           </Link>
                        </li>
                        ))}
                     </ul>
                  </nav>

                  <div className="menu__btn-box">
                     <Link className="menu__cart cart" to="/cart">
                        <svg className="cart__icon" fill="none" viewBox="0 0 28 29" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M23.287 10.953c-.782-.863-1.96-1.365-3.594-1.54v-.886a5.683 5.683 0 0 0-1.866-4.212 5.655 5.655 0 0 0-4.387-1.458c-2.788.268-5.133 2.963-5.133 5.88v.676c-1.634.175-2.812.677-3.594 1.54-1.131 1.26-1.096 2.94-.968 4.107l.817 6.498c.245 2.275 1.166 4.609 6.183 4.609h6.51c5.017 0 5.938-2.334 6.183-4.597l.817-6.522c.128-1.155.152-2.835-.968-4.095Zm-9.684-6.475a4.063 4.063 0 0 1 4.469 4.049v.816H9.928v-.606c0-2.077 1.715-4.072 3.675-4.259Z" />
                           </svg>

                        <span className="cart__count">{totalCount}</span>
                     </Link>

                     <button className={`menu__btn-burger btn-burger ${isMenuOpen ? "btn-burger--active" : ''}`} type="button" aria-label="button menu" id="menuBtn" onClick={menuBurger}>
                        <span className="btn-burger__btn-line"></span>
                     </button>
                  </div>
               </div>
           </div>
         </div>
      </header>
   )
};
