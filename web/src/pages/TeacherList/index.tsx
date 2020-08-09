import React from "react";

import {
  TeacherItem,
  TeacherImage,
  TeacherName,
  TeacherDescription,
  TeacherHeader,
  TeacherFooter,
  TeacherButton,
  TeacherPrice,
  NoTeacher,
  ContainerName,
  Main,
  Container,
  Form,
  Input,
  Label,
  ContainerInput,
} from "./styles";
import Header from "components/Header";
import WhatsappIcon from "assets/images/icons/whatsapp.svg";
const teacher: any = [{}];
const inputs = [
  { label: "Matéria", id: "subject" },
  { label: "Dia da semana", id: "day" },
  { label: "Hora", id: "hour" },
];
const TeacherList: React.FC = () => {
  return (
    <Container>
      <Header title={"Estes são os proffys disponíveis"}>
        <Form>
          {inputs.map((input, index) => {
            return (
              <ContainerInput key={index}>
                <Label>{input.label}</Label>
                <Input name={input.id} type="text" />
              </ContainerInput>
            );
          })}
        </Form>
      </Header>
      <Main>
        {teacher.length === 0 ? (
          <NoTeacher>Não existe professores cadastrado</NoTeacher>
        ) : (
          ["", "", ""].map((valor) => (
            <TeacherItem>
              <TeacherHeader>
                <TeacherImage
                  src={
                    "https://avatars3.githubusercontent.com/u/38410548?s=460&u=fb7c97ceb9a4ec80108b659324ea30d74142305f&v=4"
                  }
                />
                <ContainerName>
                  <TeacherName>Gabriel Monteiro</TeacherName>
                  <span>Quimica</span>
                </ContainerName>
              </TeacherHeader>

              <TeacherDescription>
                Entusiasta das melhores tecnologias de química avançada.
                <br />
                <br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida
                das pessoas através de experiências. Mais de 200.000 pessoas já
                passaram por uma das minhas explosões.
              </TeacherDescription>
              <TeacherFooter>
                <TeacherPrice>
                  <span>Preço/Hora</span>
                  <label>R$ 100,00</label>
                </TeacherPrice>
                <TeacherButton>
                  <img src={WhatsappIcon} alt={"Whatsapp"} /> Entrar em contato
                </TeacherButton>
              </TeacherFooter>
            </TeacherItem>
          ))
        )}
      </Main>
    </Container>
  );
};

export default TeacherList;
