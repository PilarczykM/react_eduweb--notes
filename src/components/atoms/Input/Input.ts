import styled, { css } from 'styled-components';
import magnifireIcon from '../../../assets/icons/magnifier.svg';
import { Props } from './types';

export const Input = styled.input`
  padding: 15px 30px;
  font-size: ${({ theme }: Props) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey100};
  border: ${({ theme, borderColor }: Props) =>
    borderColor ? `1px solid ${theme[borderColor]}` : 'none'};
  border-radius: 15px;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.5);
  }

  ${({ search }: Props) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-image: url(${magnifireIcon});
      background-size: 15px;
      background-repeat: no-repeat;
      background-position: 15px 50%;
    `}
`;
