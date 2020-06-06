import styled from "styled-components";
import { theme } from "../../theme/mainTheme";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${theme.notes};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 200px;
  height: auto;
`;

export const AuthCard = styled.div`
  width: 400px;
  margin-top: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;