//ФК кнопки
import React from "react";
import { StyledButton } from "./styles";

// Функция кнопки с параметром-текстом от родителя при наличии
export default function Button({ children }) {
  // Возвращаем Button c использованием внутренней ФК для стилизации CSS-in-JS
  return <StyledButton type="button">{children}</StyledButton>;
}
