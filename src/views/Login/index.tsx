import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../components/atoms/Button';
import { routes } from '../../routes';
import { State } from '../../store/types';
import { AuthTemplate } from '../../template/Auth';
import * as S from './LoginPage.styled';
import { inputValuesProps } from './types';
import { validateEmail, isEmpty } from '../../services/utils';
import { login } from '../../store/user/userThunk';
import { Redirect } from 'react-router';

export const LoginPage: React.FC = () => {
  // TODO: Podpiac redux thunk jak tylko backend zadziala.

  const [inputValues, setInputValues] = useState<inputValuesProps>({
    email: '',
    password: '',
  });

  const user = useSelector((state: State) => state.user);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const {email, password} = inputValues;
    if (!validateEmail(email)) { console.log("Email is not valid!"); return };
    if (isEmpty(email) || isEmpty(password)) { console.log("Values can not be empty!"); return };
    dispatch(login({email, password}));
  }

  return user.email ? <Redirect to={routes.home} /> : (
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
