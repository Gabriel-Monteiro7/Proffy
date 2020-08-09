import React from "react";

import {
  HeaderContent,
  Content,
  Title,
  Container,
  LogoImage,
  Back,
  Link,
} from "./styles";
import Logo from "assets/images/logo.svg";
import IconBack from "assets/images/icons/back.svg";
interface PageHeaderProps {
  title: String;
}
const Header: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <Back src={IconBack} alt={"Voltar"} />
        </Link>
        <LogoImage src={Logo} alt={"Logo"} />
      </Content>
      <HeaderContent>
        <Title>{title}</Title>
        {children}
      </HeaderContent>
    </Container>
  );
};

export default Header;
