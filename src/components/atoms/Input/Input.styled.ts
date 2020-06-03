import styled, { css } from 'styled-components';
import magnifireIcon from '../../../assets/icons/magnifier.svg';
import { theme } from '../../../theme/mainTheme';
import { InputProps } from './types';

export const StyledInput = styled.input`
  padding: 15px 30px;
  font-size: ${theme.fontSize.s};
  font-weight: ${theme.regular};
  background-color: ${theme.grey100};
  border: ${({ borderColor }: InputProps) =>
    borderColor ? `1px solid ${theme[borderColor]}` : 'none'};
  border-radius: 15px;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.5);
  }

  ${({ search }: InputProps) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: ${theme.fontSize.xs};
      background-image: url(${magnifireIcon});
      background-size: 15px;
      background-repeat: no-repeat;
      background-position: 15px 50%;
    `}
`;
