export const disabledScroll = () => {
   const scrollPosition = window.scrollY;

   document.body.style.cssText = `
      overflow: hidden;
       position: fixed;
       left: 0;
      height: 100vh;
      width: 100vw;
      top: -${scrollPosition}px;
       padding-right: ${window.innerWidth - document.body.offsetWidth}px;
    `;
   document.documentElement.style.scrollBehavior = 'unset';
   return scrollPosition;
};

export const enabledScroll = (scrollPosition) => {

   document.body.style.cssText = '';
   window.scroll({
      top: scrollPosition,
   });
   document.documentElement.style.scrollBehavior = '';
};