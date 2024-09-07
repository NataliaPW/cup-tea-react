import classNames from "classNames";
import { Container } from "../Container/Container";
import style from "./Goods.module.scss";
import { Section } from "../Section/Section";
import { Card } from "../Card/Card";

import { useEffect } from "react";
import { useProducts } from "../../context/productsContext";
import { useSearchParams } from "react-router-dom";
import { SkiletonLoader } from "../SkiletonLoader/SkiletonLoader";

//import { Title } from "../Title/Title";
//<Title className="goods__title title">Чай</Title>


export const Goods = () => {
   const [searchParams] = useSearchParams();
   const { products, setCategory,categories } = useProducts();
   // const category = 'tea';
   const category = searchParams.get("category");

   useEffect(() => {
      setCategory(category);
   }, [category, setCategory]);

   const titleText = categories[category]||"Товары";
   return (
      <Section className="goods goods--section">
            <Container className="goods__container">
               <h2 className="goods__title title">
                  {titleText}
            </h2>

            <ul className="goods__list">
               {products.length ? products.map(item => {
                  return (
                     <Card key={item.id} data={ item} />
                  )
               }): <SkiletonLoader/>}
           
               </ul>
            </Container>
        </Section>
   )
};