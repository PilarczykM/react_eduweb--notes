import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../components/atoms/Button';
import { routes } from '../../routes';
import { AuthTemplate } from '../../template/Auth';
import * as S from './LoginPage.styled';
import { inputValuesProps } from './types';
import { validateEmail, isEmpty } from '../../services/utils';
import { login } from '../../store/user/userThunk';

export const LoginPage: React.FC = () => {
  const [inputValues, setInputValues] = useState<inputValuesProps>({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Todo: Dodac jakis ładny message, informujacy uzytkownika o problemach podczas logowania.
    const { email, password } = inputValues;
    if (!validateEmail(email)) { console.log("Email is not valid!"); return };
    if (isEmpty(email) || isEmpty(password)) { console.log("Values can not be empty!"); return };
    dispatch(login({ email, password }));
  }

  return (
    <AuthTemplate>
      <S.StyledHeading>Sign in</S.StyledHeading>
      <S.Form>
        <S.StyledInput
          type="email"
          name="email"
          placeholder="Email"
          value={inputValues.email}
          onChange={handleChange}
        />
        <S.StyledInput
          type="password"
          name="password"
          placeholder="Password"
          value={inputValues.password}
          onChange={handleChange}
        />
        <Button color="notes" onClick={handleSubmit}>
          Sign in
        </Button>
        <S.StyledLink to={routes.register}>I want my account!</S.StyledLink>
      </S.Form>
    </AuthTemplate>
  );
};
