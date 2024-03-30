import "./Projects.css";
import { useLanguage } from "../LanguageContext/LanguageContext";
import dataLanguage from "../../languages/projects.json";
import { useEffect } from "react";

function Projects() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects">
      <h2 className="outfit-extralight">
        {dataLanguage.title.firstH2[language]}
        <span className="outfit-bold">{dataLanguage.title.span[language]}</span>
        {dataLanguage.title.secondH2[language]}
      </h2>
      <img src="./../../../../images/UnderConstruction.svg" alt="" />
    </div>
  );
}

export default Projects;
