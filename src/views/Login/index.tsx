import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../../components/atoms/Button';
import { Heading } from '../../components/atoms/Heading';
import { routes } from '../../routes';
import { State } from '../../store/types';
import { AuthTemplate } from '../../template/Auth';
import * as S from './LoginPage.styled';
import { inputValuesProps } from './types';

export const LoginPage: React.FC = () => {
  const [inputValues, setInputValues] = useState<inputValuesProps>({
    email: '',
    password: '',
  });

  const user = useSelector((state: State) => state.user);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <AuthTemplate>
      <Heading>Sign in</Heading>
      <S.Form>
        <S.StyledInput
          type="email"
          name="email"
          placeholder="Email"
          value={inputValues.email}
          onChange={handleOnChange}
        />
        <S.StyledInput
          type="password"
          name="password"
          placeholder="Password"
          value={inputValues.password}
          onChange={handleOnChange}
        />
        <Button color="notes" onClick={() => {}}>
          Sign in
        </Button>
        <S.StyledLink to={routes.register}>I want my account!</S.StyledLink>
      </S.Form>
    </AuthTemplate>
  );
};
