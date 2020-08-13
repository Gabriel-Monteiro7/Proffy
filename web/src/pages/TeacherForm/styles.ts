import styled, { css } from "styled-components";
import { Form as NewForm } from "@rocketseat/unform";
const flexbox = css`
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
export const Container = styled.div.attrs({ className: "container" })`
  width: 100vw !important;
  height: 100%;
  color: var(--color-text-in-primary);
  background: var(--color-background);
  padding-bottom: 6rem;
  button {
    margin: 20px auto;
  }
  .container-name {
    padding-bottom: 6rem;
  }
  &.container {
    @media (min-width: 700px) {
      max-width: 100%;
      main {
        max-width: 740px;
        /* margin:
         0 auto; */
      }
      button {
        margin: 0px;
      }
      footer {
        padding: 60px;
      }
      fieldset {
        padding: 40px 60px;
      }

      button {
        width: 22rem;
        font-size: 1.6rem;
        border-radius: 0.8rem;
        height: 6rem;
      }
      button {
        width: 22rem;
        font-size: 1.6rem;
        border-radius: 0.8rem;
        height: 6rem;
      }
      .button-schedule {
        width: 13rem;
      }
    }
  }
`;
export const Main = styled.main`
  z-index: 1;
  position: relative;
  background: #ffffff;
  width: 100%;
  max-width: 74rem;
  border-radius: 2rem;
  margin: -7rem auto 0;
  padding-top: 6rem;
  overflow: hidden;
`;
export const Scope = styled.fieldset`
  border: 0px;
  margin: 20px 0px;

  padding: 20px;
`;
export const Legend = styled.legend`
  ${flexbox};
  font: 500 2.5rem Poppins;
  color: var(--color-text-title);
  border-bottom: 1px solid #e6e6f0;
  width: 100%;
  padding-bottom: 20px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1.5rem;
  outline: none;
  border: 0px;
  border-radius: 0.8rem;
  margin-top: 5px;
  font: 1.6rem Archivo;
  min-height: 52px;
`;

export const Form = styled(NewForm)`
  border-radius: 1rem;

  input,
  textarea {
    background: #fafafc;
  }
  textarea {
    resize: vertical;
  }
  .container-input {
    margin: 20px 0px;
  }
`;
export const ButtonSchedule = styled.span.attrs({
  className: "button-schedule",
})`
  ${flexbox}
  cursor: pointer;
  transition: 0.3s ease-in-out;
  height: 4.5rem;
  border: 0px;
  border-radius: 0.6rem;
  width: 11rem;
  font: 700 1.6rem Archivo;
  color: var(--color-primary);
  background: transparent;
  span {
    font-size: 2rem;
  }
  &:hover {
    color: var(--color-primary-darker);
  }
`;
export const ButtonSubmit = styled.button`
  cursor: pointer;
  transition: 0.3s ease-in-out;
  color: #ffffff;
  height: 4.5rem;
  border: 0px;
  background: var(--color-secundary);
  border-radius: 0.6rem;
  width: 15rem;
  font: 700 1rem Archivo;
  img {
    margin-right: 10px;
  }
  &:hover {
    background: var(--color-secundary-dark);
  }
`;

export const TextFooter = styled.label``;
export const FlexBox = styled.div`
  ${flexbox}
`;
export const Footer = styled.footer`
  margin-top: 60px;
  padding: 20px;

  ${flexbox}
  border: 1px solid #E6E6F0;
  background: #fafafc;
  label {
    ${flexbox}
    font: 500 1.2rem Poppins;
    align-items: center;
    color: #a0a0b3;
    img {
      margin-right: 15px;
    }
  }
`;


