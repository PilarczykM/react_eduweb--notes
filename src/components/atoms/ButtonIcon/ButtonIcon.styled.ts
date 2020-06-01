import styled from 'styled-components';
import { Props } from './types';

export const ButtonIcon = styled.button<Props>`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }: Props) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  border: none;

  &.active {
    background-color: white;
  }
`;
