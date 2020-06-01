import styled, { css } from 'styled-components';
import LinkIcon from '../../../assets/icons/link.svg';
import { Heading } from '../../atoms/Heading/Heading';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { StyledProps } from './types';

export const LinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Avatar = styled.img<StyledProps>`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }: StyledProps) => theme.twitters};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
`;

export const Header = styled(Heading)`
  margin: 5px 0 0;
`;

export const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }: StyledProps) => theme.bold};
  font-size: ${({ theme }: StyledProps) => theme.fontSize.xs};
`;

export const InnerWrapper = styled.div<StyledProps>`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }: StyledProps) =>
    activeColor ? theme[activeColor] : 'white'};

  :first-of-type {
    z-index: 1;
  }

  ${({ flex }: StyledProps) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

export const Wrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px 5px hsla(0, 0%, 0%, 0.2);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;
