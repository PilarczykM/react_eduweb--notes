import styled from 'styled-components';
import { Button } from '../../components/atoms/Button';
import { Heading } from '../../components/atoms/Heading';
import { Paragraph } from '../../components/atoms/Paragraph';
import { theme } from './../../theme/mainTheme';

export const Wrapper = styled.div`
  padding: 0 150px 25px 200px;
  max-width: 50vw;
  position: relative;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

export const PageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

export const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${theme.bold};
`;

export const Link = styled.a`
  display: block;
  font-weight: ${theme.bold};
  font-size: ${theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

export const Image = styled.img`
  position: absolute;
  right: -80px;
  top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const StyledButton = styled(Button)`
  margin-top: 3rem;
`;
