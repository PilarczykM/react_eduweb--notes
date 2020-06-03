import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';
import { ParagraphProps } from './types';

export const StyledParagraph = styled.p<ParagraphProps>`
  font-size: ${theme.fontSize.s};
  font-weight: ${theme.regular};
`;
