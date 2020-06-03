import styled from 'styled-components';
import { ButtonIcon } from '../../components/atoms/ButtonIcon/ButtonIcon';
import { ButtonIconProps } from '../../components/atoms/ButtonIcon/types';
import { Heading } from '../../components/atoms/Heading/Heading';
import { Paragraph } from '../../components/atoms/Paragraph/Paragraph';
import { colors, theme } from '../../theme/mainTheme';

export const Wrapper = styled.div`
  padding: 0 150px 50px 200px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;

  @media (max-width: 1500px) {
    grid-gap: 45px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
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

interface StyledPlusButtonProps extends ButtonIconProps {
  bgColor: colors;
  isVisible: boolean;
}

export const StyledPlusButton = styled(ButtonIcon)<StyledPlusButtonProps>`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  background-size: 35%;
  background-color: ${({ bgColor }: StyledPlusButtonProps) => theme[bgColor]};
  border-radius: 50px;
  z-index: 10;
  transform: rotate(
    ${({ isVisible }: StyledPlusButtonProps) => (isVisible ? '45deg' : '0deg')}
  );
`;
