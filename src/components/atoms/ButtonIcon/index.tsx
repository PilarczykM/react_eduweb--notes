import React from 'react';
import { StyledButtonIcon } from './ButtonIcon.styled';
import { ButtonIconProps } from './types';

export const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  const { ref, ...otherProps } = props;
  return (
    <StyledButtonIcon {...otherProps}>{otherProps.children}</StyledButtonIcon>
  );
};
