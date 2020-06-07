import React from 'react';
import { Heading } from '../../components/atoms/Heading';
import * as S from './Auth.styled';
import { Redirect } from 'react-router';
import { routes } from '../../routes';
import { useSelector } from 'react-redux';
import { State } from '../../store/types';


const logoImg = require("../../assets/icons/logo.svg")



export const AuthTemplate: React.FC = ({ children }) => {
  const user = useSelector((state: State) => state.user);
  
  return user.email ? <Redirect to={routes.home} /> :(
  <S.Wrapper>
    <S.Logo src={logoImg} alt="" />
    <Heading>Your new favorite online notes experience</Heading>
    <S.AuthCard>{children}</S.AuthCard>
  </S.Wrapper>
)};

