import React from 'react';
import * as S from './Input.styled';
import { Props } from './types';

export const Input: React.FC<Props> = ({
  className,
  borderColor,
  children,
  theme,
  search,
}) => (
  <S.Input
    className={className}
    theme={theme}
    borderColor={borderColor}
    search={search}
  >
    {children}
  </S.Input>
);
