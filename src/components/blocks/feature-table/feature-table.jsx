// ФК секции таблицы преимуществ
import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import Button from "/src/components/ui/button/button";
import { StyledSection, StyledUl, StyledLi } from "./styles.js";

// Функция вывода секции таблицы преимуществ с массивом прокинутых МД от родителя
export default function FeatureTable({ features }) {
  return (
    <StyledSection>
      {/* Проверяем длину массива МД */}
      {features?.length ? (
        /* В случае наличия массива в МД */
        <>
          {/* выводим ФК заголовка средним размером */}
          <Title level={TitleLevel.H2} size={TitleSize.SMALL}>
            Почему фермерские продукты лучше?
          </Title>
          <StyledUl>
            {/* проходим по массиву методом map  */}
            {features.map((feature) => (
              /* и выводим элемент списка из каждого элемента массива МД, */
              <StyledLi key={feature.id}>
                {/* затем выводим карточку преимуществ из МД текущего элемента массива */}
                <FeatureCard {...feature} />
              </StyledLi>
            ))}
          </StyledUl>
          {/* Выводим ФК кнопки */}
          <Button minWidth={260}>Купить</Button>
        </>
      ) : // Если массива нет, ничего не делаем
      null}
    </StyledSection>
  );
}
