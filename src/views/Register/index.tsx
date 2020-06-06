import React, { useState } from 'react';
import { Button } from '../../components/atoms/Button';
import { routes } from '../../routes';
import { AuthTemplate } from '../../template/Auth';
import * as S from './RegisterPage.styled';
import { inputValuesProps } from './types';

export const RegisterPage: React.FC = () => {
  // TODO: Podpiac redux thunk jak tylko backend zadziala.
  const [inputValues, setInputValues] = useState<inputValuesProps>({
    email: '',
    password: '',
    confirmPassword: '',
    userName: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <AuthTemplate>
      <S.Form>
        <S.StyledHeading>Sign up</S.StyledHeading>
        <S.StyledInput
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={inputValues.email}
        />
        <S.StyledInput
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={inputValues.password}
        />
        <S.StyledInput
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          onChange={handleChange}
          value={inputValues.confirmPassword}
        />
        <S.StyledInput
          type="text"
          name="userName"
          placeholder="User name"
          onChange={handleChange}
          value={inputValues.userName}
        />
        <Button color="notes" type="submit">
          register
        </Button>
        <S.StyledLink to={routes.login}>I want to log in!</S.StyledLink>
      </S.Form>
    </AuthTemplate>
  );
};
