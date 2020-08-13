import SmileIcon from "assets/images/icons/smile.svg";
import WhatsappIcon from "assets/images/icons/whatsapp.svg";
import Header from "components/Header";
import Input from "components/Input";
import React, { useState } from "react";
import Select from "components/Select";
import { useSelector } from "react-redux";
import { formatPrice } from "utils";
import { subject, optionsDay } from "pages/TeacherForm/data";
import {
  Container,
  ContainerName,
  Form,
  Main,
  NoTeacher,
  TeacherButton,
  TeacherDescription,
  TeacherFooter,
  TeacherHeader,
  TeacherImage,
  TeacherItem,
  TeacherName,
  TeacherPrice,
} from "./styles";

const inputs: any = [
  {
    placeholder: "",
    label: "Matéria",
    name: "subject",
    width: 100,
    options: subject,
    isClearable: true,
    isSearchable: true,
  },
  {
    placeholder: "",
    label: "Dia da semana",
    name: "week_day",
    width: 100,
    options: optionsDay,
    select: true,
    isClearable: true,
    isSearchable: true,
  },
  {
    placeholder: "",
    label: "Horário",
    name: "time",
    width: 100,
    type: "time",
  },
];

const TeacherList: React.FC = () => {
  let { teachers } = useSelector((state: any) => state.teacher);
  let [filterTeacher, setFilterTeacher] = useState({
    subject: "",
    week_day: "",
    time: "",
  });
  return (
    <Container>
      <Header
        label={"Estudar"}
        title={"Estes são os proffys disponíveis"}
        more={
          <span>
            <img src={SmileIcon} alt="Sorriso" /> Nós temos {teachers.length}
            <br /> professores
          </span>
        }
      >
        <Form>
          <Select
            {...inputs[0]}
            onChange={(e: any) => {
              setFilterTeacher({ ...filterTeacher, subject: e?.name || "" });
            }}
          />
          <Select
            {...inputs[1]}
            onChange={(e: any) => {
              setFilterTeacher({ ...filterTeacher, week_day: e?.name || "" });
            }}
          />
          <Input
            {...inputs[2]}
            onChange={(e: any) => {
              setFilterTeacher({
                ...filterTeacher,
                time: e?.target.value || "",
              });
            }}
          />
        </Form>
      </Header>
      <Main>
        {teachers.length === 0 ? (
          <NoTeacher>Não existe professores cadastrado</NoTeacher>
        ) : (
          teachers
            .filter((teacher: any) => {
              if (
                filterTeacher.subject === "" &&
                filterTeacher.week_day === "" &&
                filterTeacher.time === ""
              ) {
                return true;
              }
              return (
                (filterTeacher.subject === teacher.subject.name ||
                  filterTeacher.subject === "") &&
                (teacher.days.some((day: any) => {
                  return (
                    day.week_day?.name === filterTeacher.week_day ||
                    day.from === filterTeacher.time
                  );
                }) ||
                  (filterTeacher.week_day === "" && filterTeacher.time === ""))
              );
            })
            .map((teacher: any, index: any) => (
              <TeacherItem key={index}>
                <TeacherHeader>
                  <TeacherImage image={teacher.photo} />
                  <ContainerName>
                    <TeacherName>{teacher.name}</TeacherName>
                    <span>{teacher?.subject.name}</span>
                  </ContainerName>
                </TeacherHeader>

                <TeacherDescription>{teacher.biography}</TeacherDescription>
                <TeacherFooter>
                  <TeacherPrice>
                    <span>Preço/Hora</span>
                    <label>{formatPrice(teacher.price)}</label>
                  </TeacherPrice>
                  <TeacherButton
                    href={`https://wa.me/${"5585985192422"}?text=Eu%20tenho%20interesse%20na%20sua%20aula!`}
                    target="_blank"
                  title ={"Entrar em contato"}>
                    <img src={WhatsappIcon} alt={"Whatsapp"} /> Entrar em
                    contato
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
