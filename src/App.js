import React from 'react';

import { createGlobalStyle } from 'styled-components';

import Root from './views/Root/Root';

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap');
    font-family: 'Montserrat', sans-serif;
    &,
    &::after,
    &::before{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Root />
    </>
  );
}

export default App;
