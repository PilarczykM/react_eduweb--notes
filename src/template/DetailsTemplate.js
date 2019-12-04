import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 3rem 0 0 15rem;
`;

const DetailsTemplate = ({ children }) => (
  <StyledWrapper>
    {children}
    <Link to="/">go back</Link>
  </StyledWrapper>
);

DetailsTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DetailsTemplate;
