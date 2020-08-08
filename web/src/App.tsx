import React from "react";

// import { Container } from './styles';
import { GlobalStyle } from "assets/styles/global";
import Routes from "routes";

const src: React.FC = () => {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
};

export default src;
