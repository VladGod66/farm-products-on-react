// ФК логотипа с текстом
import React from "react";
import { StyledLink, StyledSpan } from "./styles";
import { ReactComponent } from "/src/assets/logo.svg";

// Функция ФК Logo
export default function Logo() {
  // Возвращаем Logo c использованием внутренних ФК для стилизации CSS-in-JS
  return (
    <StyledLink href="./">
      <ReactComponent />
      <StyledSpan>Фермерские продукты</StyledSpan>
    </StyledLink>
  );
}
