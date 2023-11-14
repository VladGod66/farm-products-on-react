import styled from "styled-components";

// Внутренний ФК для стилизации тега footer через CSS-in-JS
export const StyledFooter = styled.footer`
  position: relative;
  width: 1280px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 80px;
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-left: 90px;
  padding-right: 90px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    content: "";
    background-color: #000000;
    opacity: 10%;
  }
`;

// Внутренний ФК для стилизации тега span через CSS-in-JS
export const StyledSpan = styled.span`
  min-height: 43px;
  min-width: 148px;
  max-width: 700px;
  padding: 8px 12px;
  font-size: 18px;
  border-radius: 5px;
  text-align: center;
  box-sizing: border-box;
`;
