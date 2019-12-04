/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Sidebar from '../components/organisms/Sidebar/Sidebar';

const StyledSidebar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const UserTemplatePage = ({ children, pageType }) => (
  <>
    <StyledSidebar>
      <Sidebar pageType={pageType} />
    </StyledSidebar>
    {children}
  </>
);

UserTemplatePage.propTypes = {
  children: PropTypes.node.isRequired,
  pageType: PropTypes.oneOf(['notes', 'articles', 'twitters']),
};

UserTemplatePage.defaultProps = {
  pageType: 'notes',
};

export default UserTemplatePage;
