import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import ActionButton from "../ActionButton/ActionButton";
import languagesData from "../../languages/navbar.json";
import { useLanguage } from "./../LanguageContext/LanguageContext";
import { Tooltip } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrolling, setScrolling] = useState(false);

  const { language, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    changeLanguage(newLanguage);
  };

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [menuMobileOpen, setMenuMobileOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMobileLinkClick = () => {
    setTimeout(() => {
      setMenuMobileOpen(!menuMobileOpen);
    }, 300);
  };
  return (
    <>
      <div className={`top-nav ${scrolling ? "scroll-down" : ""}`}>
        <div className="logo-mini">
          <Link to="/" className="logo-link" onClick={scrollToTop}>
            <img src="/images/logo-nav.svg" alt="logo" />
          </Link>
        </div>
        {windowWidth >= 450 && (
          <div className="menu-desktop outfit-thin">
            <Link to="#">{languagesData.about[language]}</Link>
            <Link to="/Projects">{languagesData.projects[language]}</Link>
            <Link to="/Contact">{languagesData.contact[language]}</Link>
            <Link to="#">{languagesData.services[language]}</Link>
          </div>
        )}
        <div className="action-button-nav">
          <div className="right-nav-buttons-action">
            <ActionButton text={languagesData.actionButton[language]} />
          </div>
          <div className="right-nav-buttons-language">
            <Tooltip title={languagesData.languageTooltip[language]}>
              <LanguageIcon onClick={toggleLanguage} />
            </Tooltip>
          </div>
        </div>
      </div>

      {windowWidth < 450 && (
        <>
          <div
            className={`menu-mobile-hidden ${
              menuMobileOpen ? "menu-mobile-open" : ""
            }`}
          >
            <div
              className="menu-mobile-links outfit-bold"
              onClick={() => handleMobileLinkClick()}
            >
              <Link to="#">{languagesData.about[language]}</Link>
              <div className="hrdiv">
                <hr />
              </div>
              <Link to="/Projects">{languagesData.projects[language]}</Link>
              <div className="hrdiv">
                <hr />
              </div>
              <Link to="/Contact">{languagesData.contact[language]}</Link>
              <div className="hrdiv">
                <hr />
              </div>
              <Link to="#">{languagesData.services[language]}</Link>
              <LanguageIcon onClick={toggleLanguage} sx={{ color: "white" }} />
            </div>
          </div>

          <div
            className={`menu-mobile outfit-regular`}
            onClick={() => setMenuMobileOpen(!menuMobileOpen)}
          >
            <img
              className={`menu-close-icon-hidden ${
                menuMobileOpen ? "menu-close-icon-open" : ""
              }`}
              src="./../../../images/MobileMenuCloseButton.svg"
              alt=""
            />
            <img
              className={`menu-icon-open ${
                menuMobileOpen ? "menu-icon-hidden" : ""
              }`}
              src="./../../../images/MobileMenu.svg"
              alt=""
            />
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
