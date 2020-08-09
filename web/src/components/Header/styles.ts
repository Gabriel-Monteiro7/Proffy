import styled from "styled-components";
import { Link as NewLink } from "react-router-dom";
export const Container = styled.div`
  background: var(--color-primary);
  position: relative;
  display: flex;
  flex-direction: column;
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
`;
export const Title = styled.h1`
  color: var(--color-title-in-primary);
  margin: 10px 0px;
  width: 500px;
`;

export const Link = styled(NewLink)`
  transition: 0.3 ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`;
