import styled from "styled-components";
import { Link as NewLink } from "react-router-dom";
export const Container = styled.div`
  background: var(--color-primary);
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 0;
  header {
    background: var(--color-primary-dark);
  }
  @media (min-width: 700px) {
    height: 340px;
    .content {
      max-width: 1100px;
    }
    .content-header {
      flex: 1;
      max-width: 740px;
      margin: 0 auto;
      padding-bottom: 48px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    .container-name {
      width: 100%;
      flex-direction: row;
      span {
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        & img {
          margin-right: 15px;
        }
      }
    }
  }
`;

export const Content = styled.div.attrs({ className: "content" })`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;
  & span {
    color: #a380f6;
  }
`;

export const LogoImage = styled.img`
  height: 2rem;
`;
export const Back = styled.img``;
export const HeaderContent = styled.div.attrs({ className: "content-header" })`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;
  .select {
    margin: 0px;
  }
  .select,.container-input {
    label {
      color: var(--color-text-in-primary);
    }
  }
`;
export const Title = styled.h1`
  color: var(--color-title-in-primary);
  margin: 10px 0px;
`;
export const ContainerTitle = styled.div.attrs({
  className: "container-name",
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  & span {
    padding: 20px 0px;
    text-align: center;

    & img {
      display: block;
      margin: 10px auto;
    }
  }
`;
export const Link = styled(NewLink)`
  transition: 0.3 ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`;
