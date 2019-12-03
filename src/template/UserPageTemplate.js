import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sidebar from '../components/organisms/Sidebar/Sidebar';

const StyledWrapper = styled.div`
  display: flex;
`;

const UserTemplatePage = ({ children, pageType }) => (
  <StyledWrapper>
    <Sidebar pageType={pageType} />
    {children}
  </StyledWrapper>
);

UserTemplatePage.propTypes = {
  children: PropTypes.node.isRequired,
  pageType: PropTypes.element.isRequired,
};

export default UserTemplatePage;
