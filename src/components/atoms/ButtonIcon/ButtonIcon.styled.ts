import styled from 'styled-components';
import { ButtonIconProps } from './types';

export const StyledButtonIcon = styled.button<ButtonIconProps>`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }: ButtonIconProps) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &.active {
    background-color: white;
  }
`;
