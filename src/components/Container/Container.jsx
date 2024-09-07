import style from "./Container.module.scss";
import classNames from "classNames";

export const Container = ({children,className}) => {
   return (
      <div className={classNames(style.container, className)}>{ children}</div>
   )
};

   /*          
export const Container = ({className}) => {
    console.log('props=',props);
   
//console.log('className=',className);
   return (
      <div className={classNames(style.container, className)}></div>
   )
};
*/