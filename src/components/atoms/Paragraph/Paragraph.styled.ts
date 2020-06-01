import styled from 'styled-components';
import { Props } from './types';

export const Paragraph = styled.p<Props>`
  font-size: ${({ theme }: Props) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
`;
