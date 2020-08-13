import styled from "styled-components";
import { Input as NewInput } from "@rocketseat/unform";
export const Input = styled(NewInput)`
  width: 100%;
  padding: 1.5rem;
  outline: none;
  border: 0px;
  border-radius: 0.8rem;
  margin-top: 5px;
  font: 1.6rem Archivo;
  min-height: 52px;
  border: 1px solid #e6e6f0;
`;

export const ContainerInput = styled.div.attrs({
  className: "container-input",
})<{ width: number; multiline: boolean }>`
  display: inline-block;
  position: relative;
  width: ${(props) => `${props.width}%`};
  label {
    font: normal 1.5rem Archivo;
    color: var(--color-text-complement);
  }
  & + & {
    margin-top: 10px;
  }
  &:focus-within::after {
    width: calc(100% -3.2rem);
    height: 2px;
    content: "";
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: ${(props) => (props.multiline ? "6px" : "0px")};
  }

  span {
    font-size: 12px;
    color: #fe2e2e;
    margin-top: 5px;
    padding-left: 10px;
    bottom: -18px;
    left: 0;
    position: absolute;
  }
  textarea + span {
    bottom: -12px;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
