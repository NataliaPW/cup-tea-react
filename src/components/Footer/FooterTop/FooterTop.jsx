import classNames from "classnames";
import { Container } from "../../Container/Container";
import { Link } from "react-router-dom";
import { Notification } from "../../../util/notification";
import { useProducts } from "../../../context/productsContext";

//import logo from "../../assets/images/footer/logo.svg";

export const FooterTop = () => {
   const { categories } = useProducts();

    const getActiveClass = (category) => {
      const currentCategory = new URLSearchParams(location.search).get("category");
      return currentCategory === category ? 'active' : '';
   };
     
   const handleNotification = (e) => {
      e.preventDefault();
         Notification.getInstance().show('Uuhh.. 404', false);
   };

   return (
       <div className="footer__top">
            <Container className="footer__container">
               
               <Link to="/" className="footer__logo logo" aria-label="logo">
                     <img className="logo__icon" src="./images/icon/logo.svg" alt="logo" width="102" height="67"/>
                  </Link>

               <div className="footer__nav">
                  <ul className="footer__list">
                  
                  {Object.entries(categories).map(([key, value]) => (
                           <li key={key} className="footer__item">
                              <Link className={`footer__link  ${getActiveClass(key)}`} to={`/products?category=${key}`}>
                              <span className="footer__text">{value}</span>
                           </Link>
                        </li>
                        ))}
                  </ul>
               </div>

               <address className="footer__address">
                  <a href="mailto:aneliaweb@internet.ru&body=Здравствуйте" className="footer__link">
                     <span className="footer__text">
                        CUPTIME@gmail.com
                     </span>
                  </a>

                  <ul className="footer__social social">
                     <li className="social__item">
                        <a className="social__link" href="tg://resolve?domain=@NataszaWP" aria-label="телеграм">
                           <svg className="social__icon social__icon--1" viewBox="0 0 32 32" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M16 3C8.824 3 3 8.824 3 16s5.824 13 13 13 13-5.824 13-13S23.176 3 16 3Zm6.032 8.84c-.195 2.054-1.04 7.046-1.469 9.347-.182.975-.546 1.3-.884 1.339-.754.065-1.326-.494-2.054-.975-1.144-.754-1.794-1.222-2.899-1.95-1.287-.845-.455-1.313.286-2.067.195-.195 3.523-3.224 3.588-3.497a.26.26 0 0 0-.065-.234c-.078-.065-.182-.039-.273-.026-.117.026-1.937 1.235-5.486 3.627-.52.351-.988.533-1.404.52-.468-.013-1.352-.26-2.015-.481-.819-.26-1.456-.403-1.404-.858.026-.234.351-.468.962-.715 3.796-1.651 6.318-2.743 7.579-3.263 3.614-1.508 4.355-1.768 4.849-1.768.104 0 .351.026.507.156.13.104.169.247.182.351-.013.078.013.312 0 .494Z" />
                              </svg>
                        </a>
                     </li>

                     <li className="social__item">
                        <a className="social__link" href="#" aria-label="youtube" onClick={handleNotification}>
                           <svg className="social__icon social__icon--2" viewBox="0 0 28 20" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="m11.334 14 6.92-4-6.92-4v8ZM26.747 3.56c.173.627.293 1.467.373 2.533.094 1.067.134 1.987.134 2.787l.08 1.12c0 2.92-.214 5.067-.587 6.44-.333 1.2-1.107 1.973-2.307 2.307-.626.173-1.773.293-3.533.373-1.733.093-3.32.133-4.787.133l-2.12.08c-5.586 0-9.066-.213-10.44-.586-1.2-.334-1.973-1.107-2.306-2.307-.174-.627-.294-1.467-.374-2.533a32.078 32.078 0 0 1-.133-2.787L.667 10c0-2.92.213-5.067.587-6.44.333-1.2 1.106-1.973 2.306-2.307C4.187 1.08 5.334.96 7.094.88A88.867 88.867 0 0 1 11.88.747L14 .667c5.587 0 9.067.213 10.44.586 1.2.334 1.974 1.107 2.307 2.307Z" />
                              </svg>
                        </a>
                     </li>

                     <li className="social__item">
                        <a className="social__link" href="#" aria-label="vk" onClick={handleNotification}>
                           <svg className="social__icon social__icon--3" viewBox="0 0 26 26" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M13 0C5.82 0 0 5.82 0 13s5.82 13 13 13 13-5.82 13-13S20.18 0 13 0Zm5 14.667s1.15 1.135 1.432 1.661c.008.011.013.022.015.028.115.193.142.344.085.456-.094.187-.42.279-.53.287H16.97c-.14 0-.436-.037-.793-.283-.275-.192-.546-.508-.81-.815-.394-.458-.735-.853-1.08-.853a.413.413 0 0 0-.128.02c-.26.084-.593.455-.593 1.444 0 .308-.244.486-.416.486h-.93c-.317 0-1.968-.111-3.43-1.654C7 13.555 5.388 9.766 5.375 9.731c-.102-.245.108-.376.337-.376h2.051c.274 0 .363.166.426.314.073.172.34.856.781 1.625.714 1.254 1.151 1.763 1.502 1.763.066 0 .13-.018.188-.049.458-.254.372-1.886.352-2.225 0-.063-.001-.73-.236-1.05-.168-.23-.453-.319-.627-.351a.744.744 0 0 1 .27-.23c.314-.156.88-.18 1.442-.18h.313c.61.009.766.048.987.104.447.107.457.395.417 1.382-.012.28-.024.597-.024.971 0 .081-.004.168-.004.26-.014.503-.03 1.073.325 1.307.046.029.1.044.154.045.123 0 .494 0 1.5-1.724.31-.555.578-1.132.805-1.725.02-.036.08-.144.15-.186a.36.36 0 0 1 .168-.04h2.412c.263 0 .443.04.477.142.06.16-.011.652-1.112 2.143l-.492.649c-.998 1.308-.998 1.374.063 2.367Z" />
                              </svg>
                        </a>
                     </li>
                  </ul>
               </address>
            </Container>
         </div>
   )
};

/*
<a className="footer__logo logo" href="#body" data-scroll="#body" aria-label="logo">
                  <img className="logo__icon" src={logo} alt="logo" width="305" height="68"/>
               </a>
               */