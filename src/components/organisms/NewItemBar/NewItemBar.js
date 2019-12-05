import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import withContext from '../../../hoc/withContext';

import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 30vw;
  padding: 50px;
  z-index: 10;
  border-left: 5px solid ${({ theme, activeColor }) => theme[activeColor]};
  background-color: white;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled(Input)`
  margin: 25px 0;
  width: 75%;
`;

const StyledTextArea = styled(Input)`
  margin: 15px 0;
  width: 75%;
  height: 150px;
  resize: none;
`;

const StyledButton = styled(Button)`
  margin-top: 50px;
`;

const NewItemBar = ({ pageContext }) => (
  <StyledWrapper activeColor={pageContext}>
    <StyledInnerWrapper>
      <Heading>{`Add item to ${pageContext}`}</Heading>
      <StyledInput placeholder="Title" borderColor={pageContext} />
      <StyledTextArea
        placeholder="Content"
        as="textarea"
        borderColor={pageContext}
      />
      {pageContext === 'twitters' ? (
        <StyledInput placeholder="twitter name" borderColor={pageContext} />
      ) : null}
      {pageContext === 'articles' ? (
        <StyledInput placeholder="article link" borderColor={pageContext} />
      ) : null}
      <StyledButton color={pageContext}>Add item</StyledButton>
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default withContext(NewItemBar);
