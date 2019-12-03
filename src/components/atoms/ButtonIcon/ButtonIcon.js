import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  width: 67px;
  height: 6.7rem;
  border: none;
  border-radius: 2rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50%, 50%;
  background-size: 40%;
  background-color: ${({ active }) => (active ? '#fff' : 'transparent')};
`;

export default ButtonIcon;
