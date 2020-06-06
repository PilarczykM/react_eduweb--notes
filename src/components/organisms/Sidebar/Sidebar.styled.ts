import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors, theme } from '../../../theme/mainTheme';

interface WrapperProps {
  activeColor: colors;
}

export const Wrapper = styled.nav<WrapperProps>`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor }: WrapperProps) =>
    activeColor ? theme[activeColor] : theme.notes};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

interface LogoLinkProps {
  logoIcon: string;
}

export const LogoLink = styled(NavLink)<LogoLinkProps>`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${({ logoIcon }: LogoLinkProps) => logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

interface ButtonIconProps {
  logoIcon: string;
  activeclass?: string;
}

export const NavButton = styled(NavLink)<ButtonIconProps>`
  margin-top: auto;

  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ logoIcon }: ButtonIconProps) => logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &.active {
    background-color: white;
  }
`;

export const LinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
