import { Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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

const RegisterPage = () => (
  <AuthTemplate>
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={({ email, password, confirmPassword }) => {
        console.log({ email, password, confirmPassword });
      }}
    >
      {({ handleChange, handleBlur, values }) => (
        <>
          <Heading>Sign up</Heading>
          <StyledForm>
            <StyledInput
              type="text"
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
            <StyledInput
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <StyledInput
              type="text"
              name="userName"
              placeholder="User name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <Button color="notes" type="submit">
              register
            </Button>
          </StyledForm>
          <StyledLink to={routes.login}>I want to log in!</StyledLink>
        </>
      )}
    </Formik>
  </AuthTemplate>
);

export default RegisterPage;
