import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body{
    width: 100vw;
    min-height: 100vh;
    background-color: #121212;
  }

  body{
    color: #fff;
    font-family: 'Work Sans', sans-serif;
  }

`;

export const theme = {
	colors: {
		primary: "#ccc",
	},
};

export default GlobalStyle;
