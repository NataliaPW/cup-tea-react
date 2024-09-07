import {
  headerTop
} from "../base/constSelector.js";

export const mainScrollHeaderTopFunc = () => {
  // const headerTop = document.querySelector('.header__top');
   const headerHeight = headerTop.offsetHeight;

   window.addEventListener('scroll', () => {
      let scrollDistance = window.scrollY;

      if (scrollDistance >= headerHeight) {
         headerTop.classNameList.add('header__top--fixed');
      } else {
         headerTop.classNameList.remove('header__top--fixed');
      }
   });
};
