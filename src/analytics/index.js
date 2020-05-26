import "./analytics.css";
import "../blocks/header/header.css";
import "../blocks/footer/footer.css";
// Импорт модулей
import { TimeUtil } from "../js/utils/TimeUtil";
import { Graph } from "./../js/components/Graph";
// Объявление констант
const title = document.querySelector(".request__title");
const total = document.querySelector(".request__number-news_bold");
const mentions = document.querySelector('.request__number-mention_bold');
const table = document.querySelector('.analytics__table');
// Константы с данными из localStorage
const searchWord = JSON.parse(localStorage.getItem("searchWord"));
const totalResults = JSON.parse(localStorage.getItem("totalResults"));
const allNews = JSON.parse(localStorage.getItem('news'));
// Добавление на страницу ключеворго слова и общее количество новостей
title.textContent = `Вы спросили: «${searchWord}»`;
total.textContent = `${totalResults}`;
// Инициализация классов
const date = new Date();
const weekBack = new Date();
const timeUtil = new TimeUtil(date, weekBack);
const graph = new Graph(allNews, searchWord);


// Функция преобразования даты в формат графика
function dateAnalyticsFormat(date, number) {
  let dayWeek = date.getDay();
  switch (dayWeek - number)
  {
    case 1: dayWeek="пн"; break;
    case 2: dayWeek="вт"; break;
    case 3: dayWeek="ср"; break;
    case 4: dayWeek="чт"; break;
    case 5: dayWeek="пт"; break;
    case 6: dayWeek="сб"; break;
    case 0: dayWeek="вс"; break;
    case -1: dayWeek="сб"; break;
    case -2: dayWeek="пт"; break;
    case -3: dayWeek="чт"; break;
    case -4: dayWeek="ср"; break;
    case -5: dayWeek="вт"; break;
    case -6: dayWeek="пн"; break;
  }
  const day = (date.getDate() - number) + ', ' + (dayWeek);
  return day;
}

// Нахождение совпадений слова в заголовке и добавления на страницу
const totalMentions = graph.searchMentions();
mentions.textContent = `${totalMentions}`;

// Добавление графика на страницу
function renderTable(table) {
  for(let i = 0; i < 7; i++) {
    const weekAgo = timeUtil.apiFormateFrom(i);
    const day = dateAnalyticsFormat(date, i);
    const sum = graph.numbersOfDayNews(weekAgo);
    table.insertAdjacentHTML("beforeend", graph.createGraph(day, sum, sum));
  }
}
renderTable(table);
