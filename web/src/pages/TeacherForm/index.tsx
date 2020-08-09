import React from "react";

import { Container } from "./styles";
import Header from "components/Header";

const Landing: React.FC = () => {
  return (
    <Container>
      <Header title={"Estes são os proffys disponíveis"} />
    </Container>
  );
};

export default Landing;
