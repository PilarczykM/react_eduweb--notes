import React from 'react';
import * as S from './Heading.styled';
import { Props } from './types';

export const Heading: React.FC<Props> = ({
  className,
  big,
  theme,
  children,
}) => {
  return (
    <S.Heading className={className} big={big} theme={theme}>
      {children}
    </S.Heading>
  );
};
