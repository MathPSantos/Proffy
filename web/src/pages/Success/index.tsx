import React from "react";
import { Link } from "react-router-dom";

import SuccessChechIcon from '../../assets/images/icons/success-check-icon.svg';

import './styles.css';

const Success: React.FC = () => {
  return (
    <div id="page-success">
      <div id="page-success-content" className="container">
        <div className="success-message">
          <img src={SuccessChechIcon} alt="Sucesso" />
          <h2>Cadastro salvo!</h2>
          <p>
            Tudo certo, seu cadastro está na nossa lista de professores. <br/> Agora é só ficar de olho no seu WhatsApp.
          </p>
        </div>
        <Link to="/study">
          Acessar aulas!
        </Link>
      </div>
    </div>
  );
};

export default Success;
