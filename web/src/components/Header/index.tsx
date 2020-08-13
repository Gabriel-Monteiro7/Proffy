import React from "react";

import {
  HeaderContent,
  Content,
  Title,
  Container,
  LogoImage,
  Back,
  Link,
  ContainerTitle,
} from "./styles";
import Logo from "assets/images/logo.svg";
import IconBack from "assets/images/icons/back.svg";

interface PageHeaderProps {
  title: String;
  description?: String;
  label?: String;
  more?: any;
}
const Header: React.FC<PageHeaderProps> = ({
  title,
  label,
  more,
  children,
}) => {
  return (
    <Container>
      <header>
        <Content>
          <Link to="/">
            <Back src={IconBack} alt={"Voltar"} />
          </Link>
          <span>{label}</span>
          <LogoImage src={Logo} alt={"Logo"} />
        </Content>
      </header>

      <HeaderContent>
        <ContainerTitle>
          <Title>{title}</Title>
          {more}
        </ContainerTitle>
        {children}
      </HeaderContent>
    </Container>
  );
};

export default Header;
