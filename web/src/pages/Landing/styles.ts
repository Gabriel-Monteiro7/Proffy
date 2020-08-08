import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  background: var(--color-primary);
  width: 100vw;
  min-height: 100vh;
  color: var(--color-text-in-primary);
`;
export const Content = styled.div`
  width: 90vw;

  max-width: 700px;
  /* margin: auto; */
  text-align: center;
  @media (min-width: 1100px) {
    text-align: start;
    max-width: 1100px;
    display: grid;
    grid-template: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      "logo hero hero"
      "buttons buttons total";
    .header {
      grid-area: logo;
      align-self: center;
      text-align: start;
      img {
        height: 100%;
      }
      h2 {
        font-size: 3.5rem;
        width: 50%;
      }
    }
    .hero {
      grid-area: hero;
    }
    .buttons {
      grid-area: buttons;
      justify-content: flex-start;
      a {
        width: 22rem;
        height: 8rem;
        font-size: 2rem;
        border-radius: 0.6rem;
      }
      img {
        width: 2.5rem;
      }
    }
    .total {
      grid-area: total;
    }
  }
`;
export const Text = styled.h2`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 3rem;
  margin-top: 0.8rem;
  /* font-family: Poppins; */
`;

export const Header = styled.div.attrs({ className: "header" })`
  text-align: center;
`;

export const ImageLogo = styled.img`
  height: 8rem;
`;

export const ImageHero = styled.img.attrs({ className: "hero" })`
  width: 100%;
`;
const button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 7rem;
  border-radius: 0.6rem;
  color: var(--color-button-text);
  border: 0px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
  font-family: Archivo;
  transition: 0.3s linear;
  &:first-child {
    margin-right: 10px;
  }
`;

export const ButtonStudy = styled(Link)`
  ${button};
  background: var(--color-primary-lighter);
  &:hover {
    background: var(--color-primary-light);
  }
`;
export const ButtonTeach = styled(Link)`
  ${button};
  background: var(--color-secundary);
  &:hover {
    background: var(--color-secundary-dark);
  }
`;
export const ContainerButtons = styled.div.attrs({ className: "buttons" })`
  display: flex;
  margin: 20px 0;
  justify-content: center;
`;
export const IconButtons = styled.img`
  width: 2.5rem;
  margin-right: 10px;
`;
export const TextFooter = styled.label.attrs({ className: "total" })`
  margin-left: 5px;
  align-self: center;
`;
export const IconHeart = styled.img`
  /* width: 1.2rem; */
`;
