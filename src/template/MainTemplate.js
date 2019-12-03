import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/mainTheme';

const MainTemplate = ({ children }) => (
  // Theme provider pass props.theme to all childs.
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

MainTemplate.prototype = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
