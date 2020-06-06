import React from 'react';
import { StyledButton } from './Button.styled';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = (props) => {
  const { ref, ...otherProps } = props;

  return <StyledButton {...otherProps}>{otherProps.children}</StyledButton>;
};
