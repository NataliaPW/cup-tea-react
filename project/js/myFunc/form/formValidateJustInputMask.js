//Валидация формы с применением 2 плагинов
import { Notification } from "./notification.js";
import Inputmask from 'inputmask';
import JustValidate from 'just-validate';

/*
 <script src="lib/inputmask.min.js" defer></script>
   <script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js" defer></script>
   */
//сайт с документацией
//https://just-validate.dev/examples

//под инпутами предусмотреть место для вывода ошибок, в инпутах required не ставится - устанавливается через валидатор? тоже касается и disabled
export const formValidateJustInputMask = () => {
   const notification = Notification.getInstance();

   //маска телефона через inputmask
   const fieldPhone = document.querySelector('.form__field--phone');
   //console.log('1',phoneInputs)

   new Inputmask('+399(99)999-99-99').mask(fieldPhone);

   //валидация формы
   const validator = new JustValidate('.valid-form', {
      errorLabelCssclassName: 'valid__label--error',
      errorLabelStyle: {
         color: '#ff0000',
      },
      errorFieldStyle: {
         borderColor: 'red',
      },
      successFieldStyle: {
         borderColor: 'green',
      },
      errorFieldCssclassName: 'valid__input--error',
      successFieldCssclassName: 'valid__input--success',

   });

   validator.addField('#name', [{
      rule: 'required',
      errorMessage: 'Ваше имя не введено',
   },
   {
      rule: 'minLength',
      value: 3,
      errorMessage: 'имя не должно быть короче 3-х символов',
   },
   {
      rule: 'maxLength',
      value: 20,
      errorMessage: 'слишком длинное имя',
   },
   ]);

   validator.addField(('#phone'), [{
      rule: 'required',
      errorMessage: 'номер Вашего телефона не введен',
   },
   {
      validator: () => {
         const phone = fieldPhone.inputmask.unmaskedvalue();
         return phone.length === 11 && !!Number(phone);
      },
      errorMessage: 'номер телефона не корректный'
   }
   ]).onFail((fields) => {
      //функция валидатора, которая собирает ошибки
      //формируем сообщение ошибки
      let errorMessage = '';
      for (const key in fields) {
         if (!Object.hasOwnProperty.call(fields, key)) {
            continue;
         }

         const element = fields[key];
         if (!element.isValid) {
            errorMessage += `${element.errorMessage}, `;
            notification.show(errorMessage.slice(0, -2), false);
         }
      }

   });

   //вывод данных формы на сервер
   validator.onSuccess((event) => {
      const form = event.currentTarget;
      // console.log('form');


      fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify({
            name: form.name.value,
            phone: form.phone.value
         }),
         headers: {
            'Content-type': 'application / JSON; charset-UTF-8',
         },
      })
         .then((response) => response.json())
         .then((data) => {
            form.reset();
            // alert(`Спасибо, мы с вами свяжемся. Ваша заявка под номером: ${data.id}`);
            notification.show(`Спасибо, мы с вами свяжемся. Ваша заявка под номером: ${data.id}`, true);
         })
   });
};


/*
<form className="modal__form form valid-form" action="telegram.php" method="POST">
                  <!-- <form className="cart-modal__form form" action="https://jsonplaceholder.typicode.com/posts" method="POST">-->
                  <ul className="form__list">
                     <li className="form__item">
                        <label for="name" className="form__label">имя</label>
                        <input type="text" className="form__input form__field" name="name" id="name" placeholder=""
                           autocomplete="off">
                     </li>

                     <li className="form__item">
                        <label for="phone" className="form__label">Телефон</label>
                        <input type="tel" className="form__input form__field form__field--phone" name="phone" id="phone"
                           placeholder="" autocomplete="off">
                     </li>
                     <!--<li className="form__item form__item--hidden">
                  <input className="form__input form__input-hidden hidden-order" type="text" value="" name="order"
                     id="form__input-hidden" style="display:none;">
                  <label for="form__input-hidden" className="form__label-hiden">
                  </label>
               </li>-->
                  </ul>

                  <button className="form__btn btn btn--yellow" type="submit">
                     отправить
                  </button>
               </form>
               */
/*
     .form {
   width: 100%;
     display: flex;
      flex-direction: column;
      @include gap-all-adopt(10, 5, 1);

  &__list {
      display: flex;
      justify-content: space-between;
         @include gap-all-adopt(10, 8, 1);

         @media (max-width:$md6) {
flex-direction: column;
      }
   }

   &__item {
      display: flex;
   width: 48%;
   flex-direction: column;
   @include gap-all-adopt(5, 2, 1);
    padding-bottom: 20px;//под вывод ошибки из валидатора
    position: relative;//под вывод ошибки из валидатора
  
   @media (max-width:$md6) {
width: 100%;
      }
   }

   &__input {
       border-radius: 12px;
border: 1px solid $color-gray-200;
background: $color-bg;
color: $color-main;
font-size: 16px;
width: 100%;
 max-height: 56px;
@include p-adopt(15,6,1);
@include p-adopt(5,3,2);
@include p-adopt(15,6,3);
@include p-adopt(15,6,4);
outline: transparent;
transition: all 0.5s ease;

&:focus, &:hover{
   border-color: $color-hover;
}
   }

   
   &__label{
      color: $color-gray-100;
font-size: 12px;
line-height: 150%; 
text-transform: capitalize;
   }

  &__btn {
      @include m-adopt(10, 8, 1);
      margin-right: auto; 
   }


}

.valid{
   &__input{
      &--error{
         border:1px solid red;
      }
      &--success{
          border:1px solid green;
      }
   }

   &__label{
      &--error{
      font-size: 10px;
      position: absolute;
      bottom: 0;
      right: 0;
      }
   }
}
*/