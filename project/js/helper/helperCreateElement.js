export const createElement = (tag, attribute) => {
   const element = document.createElement(tag);
   Object.assign(element, attribute);

   return element;
};

//кнопка
//const btnMinus = createElementButton('count__btn count__btn--minus', 'button', textEl1);
export const createElementButton = (classNameEl, typeEl, textEl) => {
   const element = createElement('button', {
      className: `${classNameEl}`,
      type: typeEl,
      textContent: `${textEl}`,
   });

   return element;
};

//картинка
//const imgModal = createElementPictureImg(nameModal, 'card', idCard, 'jpg', 'foto');
/*
<picture className="${nameModal}__image-box image__box">
      <source className="${nameModal}__image image lazyload" data-srcset="/images/card/img1.webp" srcset="/images/card/img01.jpg" type="image/webp">
      <img className="${nameModal}__image image lazyload" data-src="/images/card/img1.jpg" src="/images/card/img01.jpg" alt="foto">
   </picture>
   */
  //img/3184803604.jpg
export const createElementPictureImg = (classNameEl, url,num,type,textAlt) => {
   const picture = createElement('picture', {
      className: `${classNameEl}__image-box image__box`,
   });
     const source = createElement('source', {
       className: `${classNameEl}__image image lazyload`,
       srcset:`${url}/img/${num}_0.${type}`,
       type:'image/webp',
   });
    const img = createElement('img', {
       className: `${classNameEl}__image image lazyload`,
       src:`${url}/img/${num}_0.${type}`,
       alt:textAlt,
   });
   source.setAttribute('data-srcset', `${url}/img/${num}.webp`);
   img.setAttribute('data-src', `${url}/img/${num}.${type}`);
   picture.append(source,img);
   return picture;
};

export const createElementPictureImgCart = (classNameEl, url,num,type,textAlt) => {
   const picture = createElement('picture', {
      className: `${classNameEl}__image-box image__box`,
   });
     const source = createElement('source', {
       className: `${classNameEl}__image image`,
       srcset:`${url}/img/${num}.${type}`,
       type:'image/webp',
   });
    const img = createElement('img', {
       className: `${classNameEl}__image image`,
       src:`${url}/img/${num}.${type}`,
       alt:textAlt,
   });
   /*source.setAttribute('data-srcset', `${url}/img/${num}.webp`);
   img.setAttribute('data-src', `${url}/img/${num}.${type}`);*/
   picture.append(source,img);
   return picture;
};

export const createElementPictureIbg = (classNameEl, url,num,type,textAlt) => {
   const picture = createElement('picture', {
      className: `${classNameEl}__image-bg image__bg ibg`,
   });
     const source = createElement('source', {
       className: `${classNameEl}__image image lazyload`,
       srcset:`./images/${url}/img${num}0.${type}`,
       type:'image/webp',
   });
    const img = createElement('img', {
       className: `${classNameEl}__image image lazyload`,
       src:`./images/${url}/img${num}0.${type}`,
       alt:textAlt,
   });
   source.setAttribute('data-srcset', `./images/${url}/img${num}.webp`);
   img.setAttribute('data-src', `./images/${url}/img${num}.${type}`);
   picture.append(source,img);
   return picture;
};
/*
export const createElementPictureImg = (classNameEl, address, num,type,textAlt) => {
   const picture = createElement('picture', {
      className: `${classNameEl}__image-box image__box`,
   });

    const source = createElement('source', {
       className: `${classNameEl}__image image lazyload`,
       dataSrcset: `/images/${address}/img${num}.webp`,
       type:'image/webp',
   });
    const img = createElement('img', {
       className: `${classNameEl}__image image lazyload`,
       dataSrc: `/images/${address}/img${num}.${type}`,
       alt:textAlt,
   });

   source.setAttribute('data-srcset', `/images/${address}/img${num}.webp`);
   img.setAttribute('data-src', `/images/${address}/img${num}.${type}`);

   picture.append(source,img);
   return picture;
};
*/

//счетчик товара
//const count = createElementCount('-', '+', '1');
/*<div className="card__count count">
     <button className="count__btn count__btn--minus" type="button" aria-label="minus">-</button>

     <p className="count__amount">1</p>

     <button className="count__btn count__btn--plus" type="button" aria-label="plus">+</button>
  </div>
                                 */
export const createElementCount = (classNameEl,textEl1, textEl2, num,productId) => {

   const countBoxEl = createElement('div', {
      className: `${classNameEl} count`,
   });

   const btnMinus = createElementButton('count__btn count__btn--minus', 'button', textEl1);
   btnMinus.setAttribute('aria-label', 'minus');
   btnMinus.setAttribute('data-id', productId);

   const btnPlus = createElementButton('count__btn count__btn--plus', 'button', textEl2);
   btnPlus.setAttribute('aria-label', 'plus');
   btnPlus.setAttribute('data-id', productId);

   const p = createElement('p', {
      className: `count__amount`,
      textContent: num,
   });

   countBoxEl.append(btnMinus, p, btnPlus);
   return countBoxEl;
};

//input-box
/*
 <input type="radio" className="radio-box__input" name="filter-${i}" id="filter-${i}" value="${item.nameEn}">
      <label for="filter-${i}" className="radio-box__label">

    const radioItemOne = createElementInputBox('radio', 'radio', 'format', 'radio-1', 'pickup', 'true', 'Самовывоз', modalFieldsetTwoItemOne, 'false');
      */
export const createElementInputBoxRadio = (classNameEl, typeEl, nameEl, idEl, valueEl, requireEl, textLabel, item, checkedEl) => {
   
      const input = createElement('input', {
         className: `${classNameEl}__input radio__input`,
         type: typeEl,
         name: `${nameEl}`,
         id: `${idEl}`,
         value: `${valueEl}`,
         require: requireEl,
         checked: checkedEl,
      });
   
   const label = createElement('label', {
      className: `${classNameEl}__label radio__label`,
      htmlFor: `${idEl}`,
   });

    const spanCheck = createElement('span', {
      className: `${classNameEl}__label radio__label-check`,
    });
    const spanText = createElement('span', {
       className: `${classNameEl}__label radio__label-text`,
        textContent: textLabel,
   });


   label.append(spanCheck, spanText);
   return item.append(input,label);
};

/*
<label for="format-1" className="radio__label">
   <span className="radio__label-check"></span>
   <span className="radio__label-text">Офис</span>
</label>
                                    */

export const createElementInputBox = (classNameEl, typeEl, nameEl, idEl,valueEl, requiredEl, textLabel, item,placeholderdEl) => {
   
      const input1 = createElement('input', {
         className: `${classNameEl}__input input-box__input ${typeEl==='tel'?`input-box__input--phone`:''}`,
         type: typeEl,
         name: `${nameEl}`,
         id: `${idEl}`,
         value: `${valueEl}`,
         required: requiredEl,
         placeholder: placeholderdEl,
      });
   
   const label1 = createElement('label', {
      className: `${classNameEl}__label input-box__label`,
      htmlFor: `${idEl}`,
      textContent: textLabel,
   });
   
   return item.append(input1,label1);
};