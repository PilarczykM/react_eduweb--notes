import React from 'react';
import * as S from './Paragraph.styled';
import { Props } from './types';

export const Paragraph: React.FC<Props> = ({ className, theme, children }) => (
  <S.Paragraph className={className} theme={theme}>
    {children}
  </S.Paragraph>
);
