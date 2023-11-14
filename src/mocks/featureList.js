import iconEat from "/src/assets/eat-icon.png";
import iconGar from "/src/assets/gar-icon.png";
import iconOrg from "/src/assets/org-icon.png";
import iconMeat from "/src/assets/no-meat-icon.png";

// Объект массива с моковыми данными для вывода таблицы преимуществ
const featureList = [
  {
    id: 0,
    type: "farmer",
    name: "Фермерские продукты",
    title: "Еда намного вкуснее",
    about:
      "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники",
    icon: iconEat
  },
  {
    id: 1,
    type: "store",
    name: "Магазинные продукты",
    title: "Просроченные продукты",
    about:
      "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара",
    icon: iconGar
  },
  {
    id: 2,
    type: "farmer",
    name: "Фермерские продукты",
    title: "Натуральные продукты",
    about:
      "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений",
    icon: iconOrg
  },
  {
    id: 3,
    type: "store",
    name: "Магазинные продукты",
    title: "Некачественное мясо",
    about:
      "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов",
    icon: iconMeat
  }
];

export default featureList;
