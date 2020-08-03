import { rootCertificates } from "tls";

import React from "react";

import './styles.css';

import LogoImg from "../../assets/images/logo.svg";
import LandingImg from "../../assets/images/landing.svg";

import StudyIcon from "../../assets/images/icons/study.svg";
import GiveClassesIcon from "../../assets/images/icons/give-classes.svg";
import PurpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={LogoImg} alt="Proffy Logo" />
          <h2>Sua platforma de estudos online. </h2>
        </div>

        <img
          src={LandingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
            <a href="" className="study">
                <img src={StudyIcon} alt="Estudar"/>
                Estudar
            </a>

            <a href="" className="give-classes">
                <img src={GiveClassesIcon} alt="Dar Aulas"/>
                Dar Aulas
            </a>
        </div>

        <span className="total-connections">
            Total de 200 conexão já realizadas <img src={PurpleHeartIcon} alt="Coração roxo"/>
        </span>
      </div>
    </div>
  );
};

export default Landing;
