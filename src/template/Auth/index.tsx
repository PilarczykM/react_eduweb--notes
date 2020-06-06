import React from 'react';
import { Heading } from '../../components/atoms/Heading';
import * as S from './Auth.styled';


const logoImg = require("../../assets/icons/logo.svg")



export const AuthTemplate: React.FC = ({ children }) => (
  <S.Wrapper>
    <S.Logo src={logoImg} alt="" />
    <Heading>Your new favorite online notes experience</Heading>
    <S.AuthCard>{children}</S.AuthCard>
  </S.Wrapper>
);

