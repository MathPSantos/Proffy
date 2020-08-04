import React from "react";

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg'

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/44923226?s=460&u=e5dec65272c221cbdcde1d237b0049e2236560b9&v=4"
          alt="Matheus Pires Santos"
        />
        <div>
          <strong>Matheus Pires Santos</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. de 200.000 pessoas já passaram por uma
        das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 75,00</strong>
        </p>
        <button>
          <img src={WhatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
