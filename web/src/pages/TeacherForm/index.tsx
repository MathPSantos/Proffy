import React from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import WarningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preeencher esse formulário de inscrição."
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input label="Nome completo" name="name" />

          <Input label="Avatar" name="avatar" />

          <Input label="Whatsapp" name="whatsapp" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Input label="Matéria" name="subject" />

          <Input label="Custo da sua hora por aula" name="cost" />
        </fieldset>

        <footer>
          <p>
            <img src={WarningIcon} alt="Aviso important" />
            Importante! <br />
            Preencha todos os dados
          </p>

          <button>
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
