
//шарики
export const flyIcon = () => {
 document.addEventListener('mousemove', function (e) {
   let body = document.querySelector('.main-content');
   let heart = document.createElement('div');
   heart.classNameList.add('main-content__heart');
   let x = e.offsetX;
   let y = e.offsetY;
   heart.style.left = x + 'px';
   heart.style.top = y + 'px';

   let size = Math.random() * 80;
   heart.style.width = 120 + size + 'px';
   heart.style.height = 180 + size + 'px';

   let transformValue = Math.random() * 360;
   heart.style.transform = 'translate(' + transformValue + 'px,' + transformValue + 'px)';
   body.appendChild(heart);
   setTimeout(function () {
      heart.remove();
   }, 1000);
});
}
