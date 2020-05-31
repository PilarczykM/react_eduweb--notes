/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PageContext from '../context';
import { GlobalStyle } from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';

class MainTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: 'notes',
    };
  }

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState = '') => {
    const pageTypes = ['twitters', 'notes', 'articles'];
    const {
      location: { pathname },
    } = this.props;

    const [currentPage] = pageTypes.filter((pageType) =>
      pathname.includes(pageType),
    );
    if (prevState.pageType !== currentPage) {
      this.setState({ pageType: currentPage });
    }
  };

  render() {
    const { children } = this.props;
    const { pageType } = this.state;
    return (
      <PageContext.Provider value={pageType}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PageContext.Provider>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(MainTemplate);
