import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { PageContext, pageTypes } from '../../context/pageContext';
import { GlobalStyle } from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';

const MainTemplate: React.FC = ({ children }) => {
  const [pageType, setPageType] = useState<pageTypes>('notes');
  const { pathname } = useLocation();

  useEffect(() => {
    setCurrentPage(pageType);
  }, [pathname]);

  const setCurrentPage = (prevState = pageType) => {
    const pageTypes: pageTypes[] = ['twitters', 'notes', 'articles'];

    const [currentPage] = pageTypes.filter((pageType) =>
      pathname.includes(pageType),
    );
    if (prevState !== currentPage) {
      setPageType(currentPage);
    }
  };

  return (
    <PageContext.Provider value={pageType}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </PageContext.Provider>
  );
};

export default MainTemplate;
