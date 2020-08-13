import styled from "styled-components";
import NewSelect from "react-select";
export const Select = styled(NewSelect).attrs({
  className: "basic-multi-select",
  classNamePrefix: "select",
})`
  .css-yk16xz-control,
  .css-1pahdxg-control {
    padding: 4px 1px !important;
  }

  color: var(--color-text-base) !important;
  margin-top: 5px;

  .select__control {
    padding: 0.6rem;
    border-radius: 0.8rem;
    box-shadow: none !important;
    border: 1px solid #e6e6f0 !important;
    background: #fafafc;
    min-height: 52px;
  }
  .select__menu {
    background: #ffffff;
    z-index: 10000;
  }
  &:focus-within::after {
    width: calc(100% -3.2rem);
    height: 2px;
    content: "";
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0px;
  }
`;

export const Container = styled.div.attrs({className:"select"})<{ width: number }>`
  width: ${(props) => `${props.width}%`};
  display: inline-block;
  margin: 20px 6px 20px 0px;
  label {
    font: normal 1.5rem Archivo;
    color: var(--color-text-complement);
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
