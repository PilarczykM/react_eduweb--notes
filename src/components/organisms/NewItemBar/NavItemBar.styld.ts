import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';
import { Button } from '../../atoms/Button';
import { Heading } from '../../atoms/Heading';
import { Input } from '../../atoms/Input';
import { colors } from './../../../theme/mainTheme';
import { TextArea } from './../../atoms/TextArea/index';

interface WrapperProps {
  activeColor: colors;
  isVisible: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 30vw;
  padding: 50px;
  z-index: 1;
  border-left: 5px solid
    ${({ activeColor }: WrapperProps) => theme[activeColor]};
  background-color: white;
  transform: translateX(
    ${({ isVisible }: WrapperProps) => (isVisible ? '0' : '100%')}
  );
  transition: transform 0.3s ease-in;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled(Input)`
  margin: 15px 0;
  width: 75%;
`;

export const StyledTextArea = styled(TextArea)`
  margin: 15px 0;
  width: 75%;
  height: 350px;
  resize: none;
`;

export const StyledButton = styled(Button)`
  margin-top: 50px;
`;

export const Header = styled(Heading)`
  margin-bottom: 50px;
`;
