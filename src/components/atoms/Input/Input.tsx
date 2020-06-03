import React from 'react';
import { StyledInput } from './Input.styled';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = (props) => {
  const { ref, ...otherProps } = props;

  return <StyledInput {...otherProps}>{otherProps.children}</StyledInput>;
};
