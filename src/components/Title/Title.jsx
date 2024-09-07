import  style  from "./Title.module.scss";
import classNames from "classnames";
/*
export const Section = (props) => (
  // return (
      <section className={classNames(style.section, props.className, props.id)}></section>
  // )
);*/

export const Title = ({children,className}) => {
    return (
   <h2 className={style.section, classNames(className)}>{ children}</h2>
    )
};