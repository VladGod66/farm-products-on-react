// ФК заголовка
import React from "react";
import { StyledH } from "./styles";

// Определяем объект с вариантами заголовка для использования в названиях классов
export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  MINI: "mini",
  DEFAULT: ""
};

// Определяем объект с вариантами заголовка для использования в названиях тегов
export const TitleLevel = {
  H1: "1",
  H2: "2",
  H3: "3",
  H4: "4",
  H5: "5",
  H6: "6"
};

// Функция вывода заголовка с параметрами уровня, текста и размера
export default function Title({ level = 1, children, size }) {
  /* Возвращаем тег заголовка h1 с тегом и классом по умолчанию, если параметр тега и классом размера не задан
  или выбранным тегом, классом и текстом от родителя при наличии */
  return (
    <StyledH as={`h${level}`} $size={size}>
      {children}
    </StyledH>
  );
}
