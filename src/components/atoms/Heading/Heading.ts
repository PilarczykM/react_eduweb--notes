import styled from 'styled-components';
import { Props } from './types';

export const Heading = styled.h1<Props>`
  font-size: ${({ theme, big }: Props) =>
    big ? theme.fontSize.xl : theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
`;
