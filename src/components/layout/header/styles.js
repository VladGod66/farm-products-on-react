import styled from "styled-components";

// Внутренний ФК для стилизации тега header через CSS-in-JS
export const StyledHeader = styled.header`
  display: flex;
  padding-left: 90px;
  padding-right: 90px;
  width: 1280px;
  position: relative;
  margin: 0 auto;
  height: 80px;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
  align-items: center;
  box-sizing: border-box;
`;
