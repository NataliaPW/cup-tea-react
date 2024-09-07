import classNames from "classnames";
import { Container } from "../Container/Container";
import style from "./SkiletonLoader.module.scss";
import ContentLoader from "react-content-loader";

export const SkiletonLoader = ({count=6}) => {
   return (
      <>
         {Array(count)
            .fill()
            .map((_, index) => (
               <div key={index} className="skiletonLoader__wrapper">
                  <ContentLoader speed={2} viewBox="0 0 420 600" backgroundColor="#b8b8b8" foregroundColor="#6cb9ab">
                     <rect x="0" y="0" width="100%" height="70%"/>
                      <rect x="24" y="calc(70% + 30px)" width="80%" height="30px"/>
                       <rect x="24" y="calc(70% + 80px)" width="40%" height="25px"/>
                  </ContentLoader>
               </div>
            ))
         }
      </>
   )
};