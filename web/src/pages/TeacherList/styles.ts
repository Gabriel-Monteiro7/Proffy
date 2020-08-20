import styled from "styled-components";

export const Container = styled.div.attrs({ className: "container" })`
  width: 100vw !important;
  min-height: 100vh;
  color: var(--color-text-in-primary);
  background: var(--color-background);
  &.container {
    @media (min-width: 700px) {
      max-width: 100%;
      .form {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 16px;
        position: absolute;
        bottom: -20px;
        & div + div {
          margin-top: 0px;
        }
        input,.select__control{
          box-shadow: 2px 3px 6px 0 rgba(0, 0, 0, 0.24) !important;
        }
      }
      main {
        padding: 3.2rem 0px;
        max-width: 740px;
        margin: 0 auto;
        & header,
        & footer {
          padding: 3rem;
        }

        & footer {
          strong {
            font-size: 2rem;
          }
          p {
            margin-left: 1.6rem;
          }
          .price {
            flex-direction: row;
            align-items: center;

            label {
              margin-left: 10px;
            }
          }
          a {
            width: 24rem;
            font-size: 1.4rem;
            justify-content: center;
            border-radius: 0.8rem;
            height: 5.5rem;
          }
        }
        .no-teacher {
          font-size: 3rem;
        }
      }
    }
  }
`;
export const Form = styled.div.attrs({ className: "form" })`
  /* height: 100%; */
`;

export const Main = styled.main`
  width: 90%;
  margin: auto;
  /* padding: 20px; */
`;

export const TeacherItem = styled.div`
  margin: 20px 0px;
  background: var(--color-box-base);
  /* padding: 20px 15px 0 15px; */
  border-radius: 0.4rem;
`;
export const TeacherHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 25px 0px;
`;
export const TeacherImage = styled.div.attrs({ className: "image-teacher" })<{
  image: string;
}>`
  background: #111111;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  height: 7.5rem;
  width: 7.5rem;
  border-radius: 100%;
  margin-right: 20px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.24);
`;
export const TeacherName = styled.strong`
  display: block;
  color: var(--color-text-title);
  font-size: 1.8rem;
`;
export const TeacherDescription = styled.p`
  width: 100%;
  color: var(--color-text-base);
  margin: 10px 0px;
  font: normal 1.4rem Poppins;
  padding: 25px;
  line-height: 26px;
`;
export const TeacherFooter = styled.footer`
  border-top: 1px solid var(--color-line-in-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-box-footer);
  padding: 30px 25px;
`;
export const TeacherButton = styled.a`
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  color: #ffffff;
  height: 4.5rem;
  border: 0px;
  background: var(--color-secundary);
  border-radius: 0.6rem;
  outline: none;
  width: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 700 1rem Archivo;
  img {
    margin-right: 10px;
  }
  &:hover {
    background: var(--color-secundary-dark);
  }
`;
export const TeacherPrice = styled.div.attrs({ className: "price" })`
  flex-direction: column;
  display: flex;
  & span {
    font-size: 1.2rem;
    color: var(--color-text-complement);
  }
  & label {
    font-size: 1.6rem;
    color: var(--color-primary);
    font: bold 1.4rem Archivo;
  }
`;
export const ContainerName = styled.div`
  & span {
    color: var(--color-text-base) !important;
    font: normal 1.6rem Poppins;
  }
`;

export const NoTeacher = styled.span.attrs({ className: "no-teacher" })`
  align-items: center;
  font: normal 1.7rem Poppins;
  color: var(--color-text-base);
  display: flex;
  height: 60vh;
  margin: auto;
  justify-content: center;
`;
