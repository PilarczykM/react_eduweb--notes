import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';
import { HeagindProps } from './types';

export const StyledHeading = styled.h1<HeagindProps>`
  font-size: ${({ big }: HeagindProps) =>
    big ? theme.fontSize.xl : theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
`;
