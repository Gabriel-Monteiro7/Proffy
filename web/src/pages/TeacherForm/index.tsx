import React, { useState } from "react";

import {
  Container,
  Main,
  Form,
  Scope,
  Legend,
  ButtonSubmit,
  FlexBox,
  TextFooter,
  Footer,
  ButtonSchedule,
} from "./styles";
import Input from "components/Input";
import Header from "components/Header";
import RocketIcon from "assets/images/icons/rocket.svg";
import WarmingIcon from "assets/images/icons/warning.svg";
import { schema, fields, selects } from "./data";
import Select from "components/Select";
import { useDispatch } from "react-redux";
import { insertRequest } from "store/modules/teacher/actions";

const Landing: React.FC = () => {
  const dispatch = useDispatch();

  function handleSubmit(value: any) {
    if (selectSubject !== null && selectDay.length > 0) {
      value = { ...value, subject: selectSubject, days: selectDay };
      dispatch(insertRequest(value));
    }
  }
  const [selectDay, setSelectDay] = useState<any>([]);
  const [selectSubject, setSelectSubject] = useState(null);
  function changeDay(field: any, index: any, name: any) {
    let newArray: any = selectDay;
    newArray[index] = { ...newArray[index], [name]: field };
    setSelectDay([...newArray]);
  }
  console.log(selectDay);
  
  return (
    <Container>
      <Header
        label={"Dar aula"}
        title={"Estes são os proffys disponíveis"}
        description={
          "O primeiro passo, é preencher esse formulário de inscrição."
        }
        more={
          <span>
            <img src={RocketIcon} alt="Sorriso" /> Preparare-se!
            <br /> vai ser o máximo.
          </span>
        }
      />
      <Main>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Scope>
            <Legend>Seus Dados</Legend>
            <FlexBox>
              {fields[0].map((input: any) => {
                return <Input {...input} key={input.name} />;
              })}
            </FlexBox>
          </Scope>
          <Scope>
            <Legend>Sobre a aula</Legend>
            <Select
              {...selects[0]}
              onChange={(e: any) => {
                setSelectSubject(e);
              }}
            />
            {fields[1].map((input: any) => {
              return <Input {...input} key={input.name} />;
            })}
          </Scope>
          <Scope>
            <Legend>
              Horários disponíveis
              <ButtonSchedule
                onClick={() => {
                  setSelectDay([
                    ...selectDay,
                    { week_day: 0, from: "00:00", to: "00:00" },
                  ]);
                }}
              >
                <span>+</span>Novo horário
              </ButtonSchedule>
            </Legend>
            {selectDay.map((day: any, index: any) => {
              return (
                <FlexBox key={index + day.week_day}>
                  <Select
                    onChange={(e: any) => {
                      changeDay(e, index, "week_day");
                    }}
                    {...selects[1]}
                    defaultValue={day.week_day}
                  />
                  {fields[2].map((input: any) => {
                    return (
                      <Input
                        onChange={(e: any) => {
                          changeDay(e.target.value, index, input.name);
                        }}
                        {...input}
                        key={input.name}
                        defaultValue={day[input.name]}
                      />
                    );
                  })}
                </FlexBox>
              );
            })}
          </Scope>
          <Footer>
            <TextFooter>
              <img src={WarmingIcon} alt={"Warming"} />
              Importante!
              <br /> Preencha todos os dados
            </TextFooter>
            <ButtonSubmit type={"submit"}>Salvar cadastro</ButtonSubmit>
          </Footer>
        </Form>
      </Main>
    </Container>
  );
};

export default Landing;
