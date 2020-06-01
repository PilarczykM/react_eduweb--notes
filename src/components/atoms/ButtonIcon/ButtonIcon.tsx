import React from 'react';
import * as S from './ButtonIcon.styled';
import { Props } from './types';

export const ButtonIcon: React.FC<Props> = ({
  className,
  icon,
  children,
  onClick,
}) => (
  <S.ButtonIcon className={className} icon={icon} onClick={onClick}>
    {children}
  </S.ButtonIcon>
);
