import React, { useState, FormEvent } from "react";
import { useHistory } from 'react-router-dom';

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import WarningIcon from "../../assets/images/icons/warning.svg";

import api from "../../services/api";

import "./styles.css";

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function setScheduleItemValue(position: number, field:string, value:string) {
    const upadatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return {...scheduleItem, [field]: value};
      };

      return scheduleItem;
    });

    setScheduleItems(upadatedScheduleItems);
  }

  function handleCreateClass(event: FormEvent) {
    event.preventDefault();

    api.post('/classes', {
      name,
      avatar, 
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert("Cadastro realizado com sucesso!");
      
      history.push('/give-classes/success');
    }).catch(() => {
      alert("Erro no cadastro")
    });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preeencher esse formulário de inscrição."
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              label="Nome completo"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <Input
              label="Avatar"
              name="avatar"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />

            <Input
              label="Whatsapp"
              name="whatsapp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />

            <Textarea
              label="Biografia"
              name="bio"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              label="Matéria"
              name="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Português", label: "Português" },
                { value: "Matemática", label: "Matemática" },
                { value: "Química", label: "Química" },
                { value: "Física", label: "Física" },
                { value: "Biologia", label: "Biologia" },
                { value: "Geografia", label: "Geografia" },
                { value: "História", label: "História" },
                { value: "Educação Física", label: "Educação Física" },
                { value: "Inglês", label: "Inglês" },
                { value: "Espanhol", label: "Espanhol" },
              ]}
            />

            <Input
              label="Custo da sua hora por aula"
              name="cost"
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários Disponíveis
              <button onClick={addNewScheduleItem} type="button">
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((item, index) => {
              return (
                <div key={item.week_day} className="schedule-item">
                  <Select
                    label="Dia da Semana"
                    name="week_day"
                    value={item.week_day}
                    onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
                    options={[
                      { value: "0", label: "Domingo" },
                      { value: "1", label: "Segunda-feira" },
                      { value: "2", label: "Terça-feira" },
                      { value: "3", label: "Quarta-feira" },
                      { value: "4", label: "Quinta-feira" },
                      { value: "5", label: "Sexta-feira" },
                      { value: "6", label: "Sábado" },
                    ]}
                  />
                  <Input 
                    name="from" 
                    label="Das" 
                    type="time"
                    value={item.from}
                    onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)} 
                  />

                  <Input 
                    name="to" 
                    label="Até" 
                    type="time" 
                    value={item.to}
                    onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)}
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={WarningIcon} alt="Aviso important" />
              Importante! <br />
              Preencha todos os dados
            </p>

            <button>Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
