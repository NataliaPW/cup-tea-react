export const lazyLoadHrefFunc = () => {
   const linkElementsHref = document.querySelectorAll("a[data-href]");

   //console.log(linkElementsHref);

   const lazyLoadingLinkHref = (entries, observer) => {

      entries.forEach((entry) => {
         if (!entry.isIntersecting) return;
         entry.target.href = entry.target.dataset.href;
         entry.target.addEventListener("load", () => {
            //   entry.target.classNameList.remove("lazy-img");
            observer.unobserve(entry.target);
         });
      });
   };
   const lazyLoadingObserverLink = new IntersectionObserver(lazyLoadingLinkHref, {
   });
   linkElementsHref.forEach((a) => lazyLoadingObserverLink.observe(a));
   //console.log(lazyLoadingObserve
};
lazyLoadHrefFunc();

//data-href="https://youtu.be/EXyUufXFQUo"