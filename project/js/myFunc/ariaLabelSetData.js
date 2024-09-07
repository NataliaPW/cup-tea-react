
//добавление атрибута aria-label
export const ariaLabelSetData = () => {
   const mediaQuery = window.matchMedia('(max-width: 597.98px)');

   function handleTabletChange(e) {
      let link = document.querySelector(".menu__link--tel");
      if (e.matches) {
	
         link.setAttribute("aria-label", "позвонить");
      } else {
         link.removeAttribute("aria-label", "");
      }

   }

   mediaQuery.addListener(handleTabletChange);
   handleTabletChange(mediaQuery);
};