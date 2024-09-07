import 'lazysizes';
import {
   lazyLoadingIbgFunc
} from "./base/lazyLoadingIbgFunc.js";
import {
   headerLoad
} from "./menu/headerLoad.js";
import {
   moduleFunc
} from "./base/moduleFunc.js";
import {
   mainScrollHeaderTopFunc
} from "./menu/mainScrollHeaderTopFunc.js";

import {
   dataScroll
} from "./menu/dataScroll.js";

import {
   Notification
} from "./base/notification.js";
import { menuBurger } from './menu/menuBurger.js';


export const mainInit = async () => {

   //базовые функции

 // dataScroll();
   Notification.getInstance();

   window.addEventListener("load", headerLoad);
   moduleFunc();
   mainScrollHeaderTopFunc();
   lazyLoadingIbgFunc();
   menuBurger();
};
mainInit();