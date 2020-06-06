import styled, { css } from 'styled-components';
import { Paragraph } from '../../atoms/Paragraph';
import { colors, theme } from './../../../theme/mainTheme';
import { Heading } from './../../atoms/Heading/index';

export const Wrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px 5px hsla(0, 0%, 0%, 0.2);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

interface InnerWrappeProps {
  activeColor?: colors;
  flex?: boolean;
}

export const InnerWrapper = styled.div<InnerWrappeProps>`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor }: InnerWrappeProps) =>
    activeColor ? theme[activeColor] : 'white'};

  :first-of-type {
    z-index: 1;
  }

  ${({ flex }: InnerWrappeProps) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

export const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

export const Avatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
`;

interface LinkButtonProps {
  linkicon: string;
}

export const LinkButton = styled.a<LinkButtonProps>`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${({ linkicon }: LinkButtonProps) => linkicon})
    no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;
