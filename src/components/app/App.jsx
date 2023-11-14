// Функциональный компонент (ФК) приложения для страницы
import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import featureList from "/src/mocks/featureList";
import { GlobalStyle } from "./styles";

export default function App() {
  // Добавляем глобальные стили
  <GlobalStyle />;
  // Возвращаем в функциональный компонент (ФК) обёртки страницы моковые данные (МД) для отрисовки
  return <PageWrapper features={featureList} />;
}
