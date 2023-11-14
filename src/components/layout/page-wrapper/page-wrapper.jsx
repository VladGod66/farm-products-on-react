// ФК обёртки для контента страницы
import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import MainPage from "/src/components/pages/main-page/main-page";
import { StyledMain } from "./styles";

// Функция вывода обёртки для контента страницы с прокинутыми МД от родителя
export default function PageWrapper({ ...features }) {
  return (
    //Обязательная пустая родительская обёртка
    <>
      {/*ФК шапки*/}
      <Header />
      <StyledMain>
        {/* ФК главной страницы с прокинутыми МД от родителя */}
        <MainPage {...features} />
      </StyledMain>
      {/* ФК подвала */}
      <Footer />
    </>
  );
}
