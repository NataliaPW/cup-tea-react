//функция для очистки от ненужных параметров в запросе по фильтру


export const getValidFilters = (filters) => {
   const validFilters = {};

   for (const key in filters) {
      if (Object.hasOwnProperty.call(filters, key) && filters[key]) {
         validFilters[key]=filters[key]; 
      };
   };

   return validFilters;
};

//уменьшаем частоту запросов на сервер, собирая в один запрос обращения через их кэширование
export const debounse = (fn, msec=300) => {
   let lastCall = 0;
   let lastCallTimer = 0;

   return (...arg) => {
      const prevCall = lastCall;
      lastCall = Date.now();
      if (prevCall && lastCall-prevCall<=msec) {
         clearTimeout(lastCallTimer);
      };

      lastCallTimer=setTimeout(() => {
         fn(...arg);
      }, msec);
   };
};

//проверка на число
export const isNumber = (n) => {
  return !isNaN(parseInt(n, 10)) && isFinite(n);
};

//header scroll
export const mainScrollHeaderTopFunc = (headerTopRef) => { 
   window.addEventListener('scroll', debounse(() => {
       if (window.scrollY>100) {
          headerTopRef.classList.add('header__top--fixed');
       } else {
          headerTopRef.classList.remove('header__top--fixed');
         };  
      },100));
};

//картинки ibg
export const lazyLoadingIbgFunc = (ibgRef) => { 
 if (ibgRef.children[0]) {
            ibgRef.style.backgroundImage = 'url(' + ibgRef.children[0].getAttribute('srcset') + ')';
         } else if (heroIbgRef.children[1]) {
            ibgRef.style.backgroundImage = 'url(' + ibgRef.children[1].getAttribute('src') + ')';
      };
};
// lazyLoadingIbgFunc(heroIbgRef.current);

 /*  if (heroIbgRef.current.children[0]) {
            heroIbgRef.current.style.backgroundImage = 'url(' + heroIbgRef.current.children[0].getAttribute('srcset') + ')';
         } else if (heroIbgRef.current.children[0]) {
            heroIbgRef.current.style.backgroundImage = 'url(' + heroIbgRef.current.children[1].getAttribute('src') + ')';
      };*/