
//window.addEventListener("load", windowLoad);

export const windowLoad=()=> {
   //функция инициализации
   function digitsCountersInit(digitsCountersItems) {
      let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
      if (digitsCounters) {
         digitsCounters.forEach(digitsCounter => {
            digitsCountersAnimate(digitsCounter);
         });
      }
   }

   //функция анимации
   function digitsCountersAnimate(digitsCounter) {
      let startTimestamp = null;
      const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 4000;
      const startValue = parseInt(digitsCounter.innerHTML);
      const startPosition = 0;
      const step = (timestamp) => {
         if (!startTimestamp) startTimestamp = timestamp;
         const progress = Math.min((timestamp - startTimestamp) / duration, 1);
         digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
         if (progress < 1) {
            window.requestAnimationFrame(step);
         }
      };
      window.requestAnimationFrame(step);
   }
   //пуск при загрузке страницы
   // digitsCountersInit();

   //Пуск при скролле (появления блока с цифрами
   let options = {
      threshold: 0.3
   };
   let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            const targetElement = entry.target;
            const digitsCountersItems = targetElement.querySelectorAll("[data-digits-counter]");
            if (digitsCountersItems.length) {
               digitsCountersInit(digitsCountersItems);
            }
            //если анимацию надо запустить один раз, то раскоментируем
            //observer.unobserve(targetElement);
         }
      });
   }, options);

   let sections = document.querySelectorAll('.section__number-count');
   if (sections.length) {
      sections.forEach(section => {
         observer.observe(section);
      });
   }
};