// ФК шапки сайта
import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layout/nav/nav";
import { StyledHeader } from "./styles";

export default function Header() {
  return (
    <StyledHeader>
      {/* Выводим ФК логотипа */}
      <Logo />
      {/* Выводим ФК навигации */}
      <Nav />
    </StyledHeader>
  );
}
