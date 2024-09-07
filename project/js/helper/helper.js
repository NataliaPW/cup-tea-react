
const letterUpperCase = (str) => {
   return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

//объект preload - удаление, вставка, удаление, инициализация
//const cartBlockListProduct = document.querySelector('.cart__list-product');
 const preload = {
    elem: document.createElement('div'),
    text: `<div className="loader loader--1"><span></span></div>
          <div className="loader loader--2"><span></span></div>
          <div className="loader loader--3"><i></i></div>
          <div className="loader loader--4"><i></i></div>
`,
    append(ul) {
      ul.append(this.elem);
    },
    remove() {
       this.elem.remove();
    },
    init() {
       this.elem.classNameList.add('cart__loader', 'loader__containe');
       this.elem.innerHTML = this.text;
    },
 };
 preload.init();