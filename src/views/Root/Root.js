import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/mainTheme';
import Button from '../../components/atoms/Button/Button';
import Heading from '../../components/atoms/Heading/Heading';
import Input from '../../components/atoms/Input/Input';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';

const Root = () => (
  // Theme provider pass props.theme to all childs.
  <ThemeProvider theme={theme}>
    <Heading>My heading</Heading>
    <Heading big>Big heading</Heading>
    <br />
    <Button>Close / save</Button>
    <Button secondary>Remove</Button>
    <br />
    <Paragraph>This is my paragraph.</Paragraph>
    <br />
    <Input placeholder="Email" />
    <Input placeholder="Search" search />
  </ThemeProvider>
);

export default Root;
