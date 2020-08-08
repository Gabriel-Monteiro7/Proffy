import React from "react";

import {
  ButtonStudy,
  ButtonTeach,
  ImageHero,
  Header,
  Container,
  Text,
  ImageLogo,
  ContainerButtons,
  IconButtons,
  TextFooter,
  Content,
  IconHeart,
} from "./styles";
import Logo from "assets/images/logo.svg";
import Hero from "assets/images/landing.svg";
import IconStudy from "assets/images/icons/study.svg";
import IconTeach from "assets/images/icons/give-classes.svg";
import IcoHeart from "assets/images/icons/purple-heart.svg";

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header>
          <ImageLogo src={Logo} alt={"Logo"} />
          <Text>Sua Plataforma de estudos onlines</Text>
        </Header>

        <ImageHero src={Hero} alt={"Logo"} />
        <ContainerButtons>
          <ButtonStudy to={"/study"}>
            <IconButtons src={IconStudy} alt={"Estudar"} /> Estudar
          </ButtonStudy>
          <ButtonTeach to={"/teach"}>
            <IconButtons src={IconTeach} alt={"Ensinar"} /> Dar aulas
          </ButtonTeach>
        </ContainerButtons>
        <TextFooter>
          Total de 200 conexões já realizadas{" "}
          <IconHeart src={IcoHeart} alt={"Coração"} />
        </TextFooter>
      </Content>
    </Container>
  );
};
export default Landing;
