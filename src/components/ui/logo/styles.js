// Внутренний ФК для стилизации тега a через CSS-in-JS
import styled from "styled-components";

export const StyledLink = styled.a`
  display: flex;
  height: 44px;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s ease-out;

  &:hover {
    opacity: 70%;
  }
  &:active {
    opacity: 100%;
  }
`;

// Внутренний ФК для стилизации тега span через CSS-in-JS
export const StyledSpan = styled.span`
  display: flex;
  height: 44px;
  margin-left: 24px;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  color: #333333;
`;
