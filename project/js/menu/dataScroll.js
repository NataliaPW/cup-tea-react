export const dataScroll = () => {
   const linkElementsScroll = document.querySelectorAll("[data-scroll]");

   for (let i = 0; i < linkElementsScroll.length; i++) {

      // linkElementsScroll[i].addEventListener('click', () => {

      const sectionId = linkElementsScroll[i].dataset.scroll.slice(1);
      const section = document.getElementById(sectionId);
      const parentSection = document.querySelector(`#${sectionId}`).parentElement;

      if (!parentSection) {
        return
      }

       parentSection.style.cssText = `
        scroll-snap-type: y mandatory;
    `;

         section.style.cssText = `
         scroll-snap-align: start;
         scroll-margin-top: 10px;
    `;
      // });
   };
   /* $('[data-scroll]').on('click', function (event) {
       event.preventDefault();

       let $this = $(this),
          blockId = $this.data('scroll'),
          blockOffst = $(blockId).offset().top;

       $('.menu__link').removeclassName('active');
       $('.trip__btn').removeclassName('active');
       $('.logo').removeclassName('active');
      // $('.topmenu__item').removeclassName("active");

       $(this).toggleclassName('active');

       $('html, body').animate({
          scrollTop: blockOffst - 40
       }, 500);

    });*/
};