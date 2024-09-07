import  style  from "./Section.module.scss";
import classNames from "classNames";
/*
export const Section = (props) => (
  // return (
      <section className={classNames(style.section, props.className, props.id)}></section>
  // )
);*/

export const Section = ({children,className,id}) => {
    return (
   <section className={style.section, classNames(className)} id={id}>{ children}</section>
    )
};