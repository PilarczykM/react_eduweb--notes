import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Heading } from '../../components/atoms/Heading';
import { Input } from '../../components/atoms/Input';
import { theme } from '../../theme/mainTheme';

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledHeading = styled(Heading)`
  margin-bottom: 30px;
`;

export const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`;

export const StyledLink = styled(Link)`
  display: block;
  font-weight: ${theme.bold};
  font-size: ${theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;
