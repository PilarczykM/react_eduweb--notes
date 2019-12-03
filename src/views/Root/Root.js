import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/mainTheme';
import Button from '../../components/atoms/Button/Button';

const Root = () => (
  // Theme provider pass props.theme to all childs.
  <ThemeProvider theme={theme}>
    <h1>Header 1</h1>
    <Button>Close / save</Button>
    <Button secondary>Remove</Button>
  </ThemeProvider>
);

export default Root;
