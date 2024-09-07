//import { polyfill,scrollIntoView } from "seamless-scroll-polyfill";

export const dataScroll = () => {
   const linkElementsScroll = document.querySelectorAll("[data-scroll]");
   //якорь в теле сайта
  // const linkElementsScrollPoint = document.querySelectorAll("[data-scroll-point]");

    // patch all methods
     // polyfill();
     // seamless.polyfill();

   for (let i = 0; i < linkElementsScroll.length; i++) {

      // linkElementsScroll[i].addEventListener('click', () => {

      const sectionId = linkElementsScroll[i].dataset.scroll.slice(1);
      const section = document.getElementById(sectionId);
     /* const parentSection = document.querySelector(`#${sectionId}`).parentElement;

      if (!parentSection) {
         return
      }

      parentSection.style.cssText = `
        scroll-snap-type: y mandatory;
    `;

      section.style.cssText = `
         scroll-snap-align: start;
         scroll-margin-top: 20px;
    `;*/

      seamless.scrollIntoView((section), {
         behavior: "smooth",
         block: "start",
         inline: "center",
      });

   // });
};

/*
   for (let i = 0; i < linkElementsScrollPoint.length; i++) { 
   
 // or use specific methods
      seamless.scrollBy(window, { behavior: "smooth", top: 40, left: 0 });
   };*/
};