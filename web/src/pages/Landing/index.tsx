import IconTeach from "assets/images/icons/give-classes.svg";
import IcoHeart from "assets/images/icons/purple-heart.svg";
import IconStudy from "assets/images/icons/study.svg";
import Hero from "assets/images/landing.svg";
import Logo from "assets/images/logo.svg";
import React from "react";
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
} from "./styles";

const Landing: React.FC = () => {
  let { teachers } = useSelector((state: any) => state.teacher);

  return (
    <Container>
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
