import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

// Dispositivos small (telefones em modo paisagem, com 576px ou mais)
export const sm = 576;

// Dispositivos médios (tablets com 768px ou mais)
export const md = 768;

// Dispositivos large (desktops com 992px ou mais)
export const lg = 992;

// Dispositivos extra large (desktops grandes com 1200px ou mais)
export const xl = 1200;
export const GlobalStyle = createGlobalStyle`

:root{
    @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&family=Poppins:wght@500&display=swap');

  --color-background: #F0F0F7;
  --color-primary-lighter: #9871F5;
  --color-primary-light: #916BEA;
  --color-primary: #8257E5;
  --color-primary-dark: #774DD6;
  --color-primary-darker: #6842C2;
  --color-secundary: #04D361;
  --color-secundary-dark: #04BF58;
  --color-title-in-primary: #FFFFFF;
  --color-text-in-primary: #D4C2FF;
  --color-text-title: #32264D;
  --color-text-complement: #9C98A6;
  --color-text-base: #6A6180;
  --color-line-in-white: #E6E6F0;
  --color-input-background: #F8F8FC;
  --color-button-text: #FFFFFF;
  --color-box-base: #FFFFFF;
  --color-box-footer: #FAFAFC;
  font-size: 60%;
  
}
html,body,#root{
    min-height: 100vh
}
*{
    padding:0px;
    margin:0px;
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased !important;
}
#root{
    justify-content: center;
    display: flex;
    align-items: center;
}
button{
    outline:none;
}
body,input,button,textarea{
    font: 500 1.6rem Poppins;
    color: var(--color-text-base)

}  
h1{
    font-family:Archivo;
    font-weight:700;
    width:100%;
    @media (min-width: 700px) {
        font-size:3.5rem;
        width: 330px;

    }
    
} 
.container{
    width: 90vw;
    max-width: 700px;
}
@media(min-width:700px){
    :root{
        font-size:62.5%
    }
} 
::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
}
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #6E6E6E;
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
}
`;
