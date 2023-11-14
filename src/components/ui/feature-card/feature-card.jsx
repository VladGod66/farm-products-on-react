//ФК карточки преимуществ
import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import {
  StyledDiv,
  StyledP,
  StyledImg,
  StyledSpan,
  StyledArticle
} from "./styles";

// Функция вывода карточки преимуществ с деструктурированным элементом массива МД от родителя
export default function FeatureCard({ ...feature }) {
  // Возвращаем блок карточки преимуществ с МД из одного элемента массива
  return (
    <StyledArticle {...feature}>
      <StyledDiv>
        <StyledImg src={feature.icon} width={52} height={52} alt="иконка" />
        <StyledSpan {...feature}>{feature.name}</StyledSpan>
        {/* Выводим ФК заголовка уровня h3, размером MINI и текстом из поля title элемента МД */}
        <Title level={TitleLevel.H3} size={TitleSize.MINI}>
          {feature.title}
        </Title>
      </StyledDiv>
      <StyledP>{feature.about}</StyledP>
    </StyledArticle>
  );
}
