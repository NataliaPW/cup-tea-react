import classNames from "classnames";
import { Container } from "../Container/Container";
import style from "./Maincontent.module.scss";
import { Section } from "../Section/Section";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { lazyLoadingIbgFunc } from "../../util/util";

export const Maincontent = () => {
   const [searchParams] = useSearchParams();
   const category = searchParams.get("category");

   const heroIbgRef = useRef(null);
   useEffect(() => {
      lazyLoadingIbgFunc(heroIbgRef.current);
      },[]);
   
   return (
        <Section className={"main-content"}>
         <Container className={"main-content__container"}>

               <div className="main-content__text-box">
                  <h1 className="main-content__title">
                     Попробуй новый вкус Арабики
               </h1>
               
               {category!=='coffee'?
                  <Link className="main-content__btn btn btn--white" to="/products?category=coffee">
                     Перейти к кофе
                  </Link>
                  :null
               }
               </div>

               <div className="main-content__item-img">
                  <picture className="main-content__image-bg image__bg ibg" ref={heroIbgRef}>
                     <source className="main-content__image source-ibg"
                        srcSet="/images/maincontent/img-bg.webp"
                        type="image/webp"/>
                     <img className="main-content__image img-ibg" 
                        src="/images/maincontent/img-bg.png" alt="foto"/>
                  </picture>
               </div>

            </Container>
      </Section>
   )
};
/*
<source className="main-content__image source-ibg"
                        srcSet="http://s29645vv.beget.tech/sites/box90/dist/images/maincontent/img-bg.webp"
                        type="image/webp"/>
                     <img className="main-content__image img-ibg" 
                        src="http://s29645vv.beget.tech/sites/box90/dist/images/maincontent/img-bg.png" alt="foto"/>*/