import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--color-primary);
  width: 100vw;
  min-height: 100vh;
  color: var(--color-text-in-primary);
`;
export const Content = styled.div.attrs({ className: "container" })`
  text-align: center;
  padding: 20px 0px;
  position: relative;
  @media (min-width: 1000px) {
    &.container {
      padding: 60px 0px 10px;

      text-align: start;
      max-width: 1100px;
      display: grid;
      grid-template: 350px 1fr;
      grid-template-columns: 1fr 1fr 2fr;
      grid-template-areas: "logo logo hero";
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
export const TextConnection = styled.label.attrs({ className: "total" })`
  margin-left: 5px;
  align-self: center;
  font-size: 1.3rem;
  width: 20.3rem;
`;
export const TextWelcome = styled.label.attrs({ className: "welcome" })`
  align-self: center;
  margin: 10px 0px;
  display: block;
  color: var(--color-text-base);
`;

export const Footer = styled.footer.attrs({ className: "container" })`
  text-align: center;
  margin: auto;

  @media (min-width: 1000px) {
    &.container {
      padding: 30px 0px;
      text-align: start;
      max-width: 1100px;
      display: grid;
      grid-template-columns: 1fr 1fr 2fr;
      grid-template-areas: "welcome total buttons";
      .total {
        grid-area: total;
        text-align: end;
        margin: 0px 20px;
      }
      .welcome {
        grid-area: welcome;
      }
      .buttons {
        grid-area: buttons;
        justify-content: flex-start;
        a {
          width: 25rem;
          height: 8rem;
          font-size: 2rem;
          border-radius: 0.6rem;
        }
        img {
          width: 2.5rem;
        }
      }
    }
  }
`;
export const ContainerFooter = styled.div`
  background: #ffffff;
  width: 100%;
  padding-top: 15px;
`;

export const IconHeart = styled.img`
  /* width: 1.2rem; */
`;
const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Success = styled.div`
  cursor: pointer;
  ${flex};
  height: 100vh;
  overflow: hidden;
  position: fixed;
  z-index: 100;
  overflow: auto;
  left: 0;
  background: var(--color-primary);
  right: 0;
`;
export const ContainerSuccess = styled.div.attrs({
  className: "success",
})<{
  image: string;
}>`
  ${flex};
  flex-direction: column;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  padding: 20px;
  width: 100%;
  img {
    height: 90px;
    margin-bottom: 10px;
  }
  strong {
    color: #ffffff;
    font: 700 4rem Archivo;
    margin: 20px 0px;
  }
  label {
    text-align: center;
    font-weight: 500;
    font-size: 1.4rem;
  }
  @media (min-width: 1000px) {
    max-width: 1100px;
    img {
      height: 120px;
    }
    label {
      font-size: 1.6rem;
    }
  }
`;

export const ButtonList = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  color: #ffffff;
  border: 0px;
  background: var(--color-secundary);
  border-radius: 0.6rem;
  padding: 1.8rem 5rem;
  font: 700 1.4rem Archivo;

  &:hover {
    background: var(--color-secundary-dark);
  }
  margin: 50px 0px 50px;
`;
