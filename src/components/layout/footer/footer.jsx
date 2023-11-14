// ФК подвала сайта
import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledFooter, StyledSpan } from "./styles";

export default function Footer() {
  return (
    <StyledFooter>
      {/* Выводим ФК логотипа */}
      <Logo />
      <StyledSpan>Создано Владиславом Годуновым в ноябре 2023</StyledSpan>
    </StyledFooter>
  );
}
