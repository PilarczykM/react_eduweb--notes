import React from 'react';
import * as S from './Button.styled';
import { Props } from './types';

export const Button: React.FC<Props> = ({
  className,
  color,
  theme,
  secondary,
  children,
}) => {
  return (
    <S.Button
      className={className}
      color={color}
      theme={theme}
      secondary={secondary}
    >
      {children}
    </S.Button>
  );
};
