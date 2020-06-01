import React from 'react';
import * as S from './ButtonIcon.styled';
import { Props } from './types';

export const ButtonIcon: React.FC<Props> = ({ className, icon, children }) => (
  <S.ButtonIcon className={className} icon={icon}>
    {children}
  </S.ButtonIcon>
);
