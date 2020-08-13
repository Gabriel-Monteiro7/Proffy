import IconTeach from "assets/images/icons/give-classes.svg";
import IcoHeart from "assets/images/icons/purple-heart.svg";
import IconStudy from "assets/images/icons/study.svg";
import Hero from "assets/images/landing.svg";
import Logo from "assets/images/logo.svg";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ButtonStudy,
  ButtonTeach,
  Container,
  ContainerButtons,
  ContainerFooter,
  Content,
  Footer,
  Header,
  IconButtons,
  IconHeart,
  ImageHero,
  ImageLogo,
  Text,
  TextConnection,
  TextWelcome,
  Success,
  ContainerSuccess,
  ButtonList,
} from "./styles";
import ImageSucess from "assets/images/success-background.svg";
import IconSucess from "assets/images/icons/success-check-icon.svg";

const Landing: React.FC = () => {
  let { teachers } = useSelector((state: any) => state.teacher);
  const [success, setSuccess] = useState(useLocation().state);
  return (
    <Container>
      {success && (
        <Success onClick={() => setSuccess(false)}>
          <ContainerSuccess image={ImageSucess}>
            <img src={IconSucess} alt="Icone de sucesso"/>
            <strong>Cadastro salvo!</strong>
            <label>
              Tudo certo, seu cadastro está na nossa lista de professores.
              <br /> Agora é só ficar de olho no seu WhatsApp.
            </label>
            <ButtonList to={"/study"} title={"Acessar lista"}>Acessar lista</ButtonList>
          </ContainerSuccess>
        </Success>
      )}
      <Content>
        <Header>
          <ImageLogo src={Logo} alt={"Logo"} />
          <Text>Sua Plataforma de estudos onlines</Text>
        </Header>
        <ImageHero src={Hero} alt={"Logo"} />
      </Content>
      <ContainerFooter>
        <Footer>
          <TextWelcome>
            Seja bem-vindo.
            <br />
            <strong>O que você deseja?</strong>
          </TextWelcome>
          <TextConnection>
            Total de {teachers.length} conexões já realizadas{" "}
            <IconHeart src={IcoHeart} alt={"Coração"} />
          </TextConnection>
          <ContainerButtons>
            <ButtonStudy to={"/study"}>
              <IconButtons src={IconStudy} alt={"Estudar"} /> Estudar
            </ButtonStudy>
            <ButtonTeach to={"/teach"}>
              <IconButtons src={IconTeach} alt={"Ensinar"} /> Dar aulas
            </ButtonTeach>
          </ContainerButtons>
        </Footer>
      </ContainerFooter>
    </Container>
  );
};
export default Landing;
