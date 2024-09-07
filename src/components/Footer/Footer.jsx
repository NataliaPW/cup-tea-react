import style from "./Footer.module.scss";
import { FooterCopy } from "./FooterCopy/FooterCopy";
import { FooterTop } from "./FooterTop/FooterTop";

export const Footer = () => {
    return (
      <footer className="footer" id="footer">
         <FooterTop/>
         <FooterCopy/>
      </footer>
   )
};