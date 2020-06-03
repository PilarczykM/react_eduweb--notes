import React from 'react';
import { StyledHeading } from './Heading.styled';
import { HeagindProps } from './types';

export const Heading: React.FC<HeagindProps> = (props) => {
  const { ref, ...otherProps } = props;
  return <StyledHeading {...otherProps}>{otherProps.children}</StyledHeading>;
};
