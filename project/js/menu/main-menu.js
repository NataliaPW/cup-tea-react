const menuNavMain = document.querySelector('.menu__nav');
const menuBtnMain = document.querySelector('.btn-burger');
const menuLinkMain = document.querySelectorAll('.menu__link');
const menuListMain = document.querySelector('.menu__list');

const menuBodyMain = document.querySelector('body');
//document.addEventListener('click', menuMain);

export const menuMain=(event)=> {
   if (event.target.closest('.btn-burger')) {
      // menuLinkMain.classNameList.remove('active');
      menuNavMain.classNameList.toggle('menu__nav--active');
      menuListMain.classNameList.toggle('menu__list--active');
      menuBtnMain.classNameList.toggle('btn-burger--active');
      menuBodyMain.classNameList.toggle('hidden');
   }

   if (event.target.closest('.menu__link')) {
      menuNavMain.classNameList.remove('menu__nav--active');
      menuListMain.classNameList.remove('menu__list--active');

      menuBtnMain.classNameList.remove('btn-burger--active');
      menuBodyMain.classNameList.remove('hidden');
      for (let i = 0; i < menuLinkMain.length; i++) {
         menuLinkMain[i].classNameList.remove('active');
         menuLinkMain[i].classNameList.remove('hover');
      };
      event.target.closest('.menu__link').classNameList.add('active');
   }
}

document.addEventListener('click', (e) => {
   const withinBoundaries = e.composedPath().includes(menuBtnMain);

   if (!withinBoundaries) {
      menuNavMain.classNameList.remove('menu__nav--active');
      menuListMain.classNameList.remove('menu__list--active');
      //menuLinkMain.classNameList.remove('active');
      menuBtnMain.classNameList.remove('btn-burger--active');
      // menuLinkMain.classNameList.remove('hover');
      menuBodyMain.classNameList.remove('hidden');
   }
});