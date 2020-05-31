import styled from 'styled-components';
import { Props } from './types';

const Heading = styled.h1`
  font-size: ${({ theme, big }: Props) =>
    big ? theme.fontSize.xl : theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
`;

export default Heading;
