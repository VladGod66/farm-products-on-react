// ФК секции промо
import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";

import { StyledSection, StyledDiv, StyledP } from "./styles.js";
// Функция вывода секции промо
export default function About() {
  return (
    <StyledSection>
      <StyledDiv>
        {/* Выводим ФК заголовка с параметром размера BIG и текстом children */}
        <Title level={TitleLevel.H1} size={TitleSize.BIG}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <StyledP>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </StyledP>
      </StyledDiv>
    </StyledSection>
  );
}
