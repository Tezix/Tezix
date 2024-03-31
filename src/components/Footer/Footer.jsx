import "./Footer.css";
import { useLanguage } from "../LanguageContext/LanguageContext";
import { useEffect } from "react";
function Footer() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="footer"></div>
    </>
  );
}

export default Footer;
