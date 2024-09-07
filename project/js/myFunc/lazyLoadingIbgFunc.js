//базовые функции
export const lazyLoadingIbgFunc = () => {
   function ibg() {
      let ibg = document.querySelectorAll(".ibg");
      for (var i = 0; i < ibg.length; i++) {
         if (ibg[i].querySelector('source')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('source').getAttribute('srcset') + ')';
         } else if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
         }
      }
   }


   //source
   //const imgElementsWebp = document.querySelectorAll("source[data-srcset]");
   const imgElementsWebp = document.querySelectorAll(".source-ibg[data-srcset]");

   const lazyLoadingImageWebp = (entries, observer) => {
      entries.forEach((entry) => {
         if (!entry.isIntersecting) return;
         entry.target.srcset = entry.target.dataset.srcset;
         ibg(entry);
         entry.target.addEventListener("load", () => {
            observer.unobserve(entry.target);
            lazyLoadingImage();
         });
      });
   };
   const lazyLoadingObserverWebp = new IntersectionObserver(lazyLoadingImageWebp, {
      threshold: 0.1,
   });
   imgElementsWebp.forEach((source) => lazyLoadingObserverWebp.observe(source));

   //img

   //const imgElements = document.querySelectorAll("img[data-src]");
   const imgElements = document.querySelectorAll(".img-ibg[data-src]");

   const lazyLoadingImage = (entries, observer) => {
      entries.forEach((entry) => {
         if (!entry.isIntersecting) return;
         entry.target.src = entry.target.dataset.src;
         ibg(entry);
         entry.target.addEventListener("load", () => {
            entry.target.classNameList.remove("lazy-img");
            observer.unobserve(entry.target);
         });
      });
   };

   const lazyLoadingObserver = new IntersectionObserver(lazyLoadingImage, {
      threshold: 0.01,
   });
   imgElements.forEach((img) => lazyLoadingObserver.observe(img));
};