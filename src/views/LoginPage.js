import { Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { authenticate as authenticateAction } from '../actions';
import { Button } from '../components/atoms/Button/Button';
import { Heading } from '../components/atoms/Heading/Heading';
import { Input } from '../components/atoms/Input/Input';
import routes from '../routes';
import AuthTemplate from '../template/AuthTemplate';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const LoginPage = ({ authenticate, user }) => (
  <AuthTemplate>
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={({ email, password }) => {
        authenticate(email, password);
      }}
    >
      {({ handleChange, handleBlur, values }) => {
        if (Object.entries(user).length !== 0) {
          return <Redirect to={routes.home} />;
        }
        return (
          <>
            <Heading>Sign in</Heading>
            <StyledForm>
              <StyledInput
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <StyledInput
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <Button color="notes" type="submit">
                sign in
              </Button>
            </StyledForm>
            <StyledLink to={routes.register}>I want my account!</StyledLink>
          </>
        );
      }}
    </Formik>
  </AuthTemplate>
);

const mapStateToProps = ({ user = null }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => ({
  authenticate: (email, password) =>
    dispatch(authenticateAction(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
