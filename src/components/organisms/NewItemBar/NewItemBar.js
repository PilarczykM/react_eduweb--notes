import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';

import withContext from '../../../hoc/withContext';
import { addItem as addItemAction } from '../../../actions';

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

const NewItemBar = ({ pageContext, isVisible, addItem, handleClode }) => (
  <StyledWrapper activeColor={pageContext} isVisible={isVisible}>
    <StyledInnerWrapper>
      <StyledHeader>{`Add item to ${pageContext}`}</StyledHeader>
      <Formik
        initialValues={{
          title: '',
          content: '',
          articleUrl: '',
          twitterName: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = 'Required';
            return errors;
          }
        }}
        onSubmit={(values, { setSubmitting }) => {
          addItem(pageContext, values);
          setSubmitting(false);
          handleClode();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <StyledInput
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              placeholder="Title"
              borderColor={pageContext}
            />
            {errors.title && touched.title && errors.title}
            {pageContext === 'articles' ? (
              <>
                <StyledInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="articleUrl"
                  value={values.articleUrl}
                  placeholder="article link"
                  borderColor={pageContext}
                />
              </>
            ) : null}
            {pageContext === 'twitters' ? (
              <>
                <StyledInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="twitterName"
                  placeholder="twitter name"
                  value={values.twitterName}
                  borderColor={pageContext}
                />
              </>
            ) : null}
            <StyledTextArea
              placeholder="Content"
              as="textarea"
              name="content"
              onChange={handleChange}
              onBlur={handleBlur}
              borderColor={pageContext}
              value={values.content}
            />
            <StyledButton
              color={pageContext}
              type="submit"
              disabled={isSubmitting}
            >
              Add item
            </StyledButton>
          </Form>
        )}
      </Formik>
    </StyledInnerWrapper>
  </StyledWrapper>
);

NewItemBar.proptype = {
  pageContext: PropTypes.element.isRequired,
  isVisible: PropTypes.bool.isRequired,
  handleClode: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, content) => dispatch(addItemAction(itemType, content)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
