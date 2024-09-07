//создание всплывашки через className 
export class Notification{
   static instance;
   //создаем свойства - constructor - обязательно
   constructor() {
      if (Notification.instance) {
         return Notification.instance;
      }
      this.timeout = 3000;
      Notification.instance = this;
   }

   static getInstance(){
      if (!Notification.instance) {
         //если у класса нет статичного свойства (static), то он вызывает сам себя
         Notification.instance = new Notification();
      };
      return Notification.instance;
   };

   //методы
   // отображение Notification
   show(message, isSuccess) {
      const notification = this.createNotification(message, isSuccess);

      document.body.append(notification);
      this.animationNotification(notification, true);
      
      //вызов метода анимации с действием на определенное время и удалением сообщения
      setTimeout(() => {
         this.animationNotification(notification, false).then(() => {
            notification.remove();
         });
      }, this.timeout);
   };

   //создание Notification
   createNotification(message, isSuccess) {
      const notification = document.createElement('div');
      notification.className=`notification ${isSuccess?'notification__success':'notification__error'}`;

      notification.textContent = message;
      return notification;
   };

   //анимация
   animationNotification(notification,show) {
      return new Promise((resolve) => {
         if (show) {
            requestAnimationFrame(() => {
               notification.classNameList.add('notification__show');
               resolve();
            });
         } else {
            notification.classNameList.remove('notification__show');
            
            setTimeout(resolve, 500);
         }
      });
   };
};
/*
const notifBtn = document.querySelectorAll('.notif-btn');
notifBtn.addEventListener('click', () => {
   const notification = Notification.getInstance();
    notification.show('Ups.. 404',false);
});*/
/*
 <a className="social__link" href="/" onclick="event.preventDefault();Notification.getInstance().show(`Uuhh.. 404`,false);" aria-label="social">
 */
/*
const notifMessageTrue = () => {
 Notification.getInstance().show('Thanks',true);  
};
const notifMessageFalse = () => {
   Notification.getInstance().show('Error',false);
};
*/

