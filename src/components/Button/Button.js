import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: #ffd82b;
  width: 220px;
  height: 47px;
  border: 0;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;

  ${({ secondary }) => secondary
    && css`
      background-color: #e6e6e6;
      width: 120px;
      height: 32px;
      font-weight: 300;
      font-size: 12px;
    `};
`;

export default Button;
