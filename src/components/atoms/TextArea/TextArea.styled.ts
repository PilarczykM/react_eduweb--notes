import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";
import { TextAreaProps } from './types';

export const StyledTextArea = styled.textarea<TextAreaProps>`
  padding: 15px 30px;
  font-size: ${theme.fontSize.s};
  font-weight: ${theme.regular};
  background-color: ${theme.grey100};
  border: ${({ borderColor }: TextAreaProps) =>
    borderColor ? `1px solid ${theme[borderColor]}` : 'none'};
  border-radius: 15px;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.5);
  }
`;
