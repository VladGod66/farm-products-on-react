// ФК главной страницы сайта
import React from "react";
import About from "/src/components/blocks/about/about";
import FeatureTable from "/src/components/blocks/feature-table/feature-table";

// ФК тела главной страницы для с прокинутыми МД от родителя
export default function MainPage({ ...features }) {
  return (
    // Обязательная пустая родительская обёртка
    <>
      {/* ФК секции представления */}
      <About />
      {/* ФК секции таблицы преимуществ с прокинутыми МД от родителя */}
      <FeatureTable {...features} />
    </>
  );
}
