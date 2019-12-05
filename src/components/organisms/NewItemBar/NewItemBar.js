import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import withContext from '../../../hoc/withContext';
import { addItem as addItemAction, addItem } from '../../../actions';

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
  z-index: 1;
  border-left: 5px solid ${({ theme, activeColor }) => theme[activeColor]};
  background-color: white;
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.3s ease-in;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled(Input)`
  margin: 15px 0;
  width: 75%;
`;

const StyledTextArea = styled(Input)`
  margin: 15px 0;
  width: 75%;
  height: 350px;
  resize: none;
`;

const StyledButton = styled(Button)`
  margin-top: 50px;
`;

const StyledHeader = styled(Heading)`
  margin-bottom: 50px;
`;

class NewItemBar extends Component {
  render() {
    const { pageContext, isVisible, addItem } = this.props;
    return (
      <StyledWrapper activeColor={pageContext} isVisible={isVisible}>
        <StyledInnerWrapper>
          <StyledHeader>{`Add item to ${pageContext}`}</StyledHeader>
          <StyledInput placeholder="Title" borderColor={pageContext} />
          {pageContext === 'articles' ? (
            <StyledInput placeholder="article link" borderColor={pageContext} />
          ) : null}
          {pageContext === 'twitters' ? (
            <StyledInput placeholder="twitter name" borderColor={pageContext} />
          ) : null}
          <StyledTextArea
            placeholder="Content"
            as="textarea"
            borderColor={pageContext}
          />
          <StyledButton
            color={pageContext}
            onClick={() => addItem(pageContext, {
                title: 'Marcin',
                content: 'Lorem ipsum',
                created: '1day ago',
              })}
          >
            Add item
          </StyledButton>
        </StyledInnerWrapper>
      </StyledWrapper>
    );
  }
}

NewItemBar.proptype = {
  pageContext: PropTypes.element.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, content) => dispatch(addItemAction(itemType, content)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
