import React from 'react';
import { StyledParagraph } from './Paragraph.styled';
import { ParagraphProps } from './types';

export const Paragraph: React.FC<ParagraphProps> = (props) => {
  const { ref, ...otherProps } = props;
  return (
    <StyledParagraph {...otherProps}>{otherProps.children}</StyledParagraph>
  );
};
