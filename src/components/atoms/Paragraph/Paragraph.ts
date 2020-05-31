import styled from 'styled-components';
import { Props } from './types';

const Paragraph = styled.p`
  font-size: ${({ theme }: Props) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
`;

export default Paragraph;
