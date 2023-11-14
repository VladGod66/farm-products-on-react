// ФК навигации
import React from "react";
import Button from "/src/components/ui/button/button";

export default function Nav() {
  return (
    <nav>
      {/* Выводим ФК кнопки с названием по месту, без родительских данных */}
      <Button>Купить</Button>
    </nav>
  );
}
