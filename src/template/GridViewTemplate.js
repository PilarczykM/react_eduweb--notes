/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

const StyledContent = styled.div`
  margin-left: 150px;
  padding: 25px 150px 25px 70px;
`;

const StyledPageHeader = styled.div`
  margin: 2.5rem 0 5.5rem;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledParagraph = styled(Paragraph)`
  font-weight: 300;
  font-size: 12px;
`;

const StyledHeading = styled(Heading)`
  ::first-letter {
    text-transform: uppercase;
  }
`;

const GridViewTemplate = ({ children, pageType }) => (
  <>
    <StyledContent>
      <StyledPageHeader>
        <Input search />
        <StyledHeading>{pageType}</StyledHeading>
        <StyledParagraph>6 {pageType}</StyledParagraph>
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
    </StyledContent>
  </>
);

GridViewTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  pageType: PropTypes.oneOf(['notes', 'articles', 'twitters']),
};

GridViewTemplate.defaultProps = {
  pageType: 'notes',
};

export default GridViewTemplate;
