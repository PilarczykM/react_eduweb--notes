import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap');

  *,*::after,*::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      outline: none;
  }

  html {
      font-size: 62.5%; /* 1rem === 10px; */
  }

  body {
      font-size: 1.6rem;
      font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
