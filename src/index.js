import './style.css';
import './about/about.css';
import './analytics/analytics.css';
import { NewsApi } from "./js/modules/NewsApi";
import { NewsCard } from "./js/components/NewsCard";
import { NewsResult } from "./js/components/NewsResult";
import { TimeUtil } from "./js/utils/TimeUtil";
import { Vision } from "./js/utils/Vision";
import { Reset } from "./js/utils/Reset"
import { ValidateSearch } from "./js/components/ValidateSearch"
import {
  resultsSection,
  resultsCard,
  notFound,
  preloader,
  showMoreNews,
  serverError,
  searchForm,
  sumLoadCards,
  apiUrl,
  SUM_CARDS_AT_TIME} from "./js/constants/constants";

// Выделение input при вводе слова
const field = document.querySelector(".search__field");
document.addEventListener("click", function () {
  if (event.target.classList.value === "search__input") {
    field.classList.add("search__field_active");
  } else {
    field.classList.remove("search__field_active");
  }
});

// Обьявление классов
const day = new Date();
const weekBack = new Date();
const vision = new Vision();
const card = new NewsCard();
const date = new TimeUtil(day, weekBack);
const resultCards = new NewsResult(resultsCard, card, date, SUM_CARDS_AT_TIME);
const reset = new Reset(notFound, serverError, resultsSection, preloader, resultsCard, vision);
const mainApi = new NewsApi(apiUrl, date);
const validate = new ValidateSearch();

/* Блок слушателя для кнопки "Искать"*/
searchForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Сбрасываем поведение браузера
  validate.searchInputBlock();
  const searchWord = event.target.querySelector("#search").value; // Сохраняем введеное слово
  if (validate.validateInput(searchWord)) { // Проверяем введено ли слово
    reset.clear(); // Убираем блок результата, если была ошибка - убраем, показываем прелоудер
    mainApi
    .getNews(searchWord) // Отправляем запрос на API
    .then((data) => {
      if (data.articles.length === 0) { // Проверяем данные с сервера
        reset.dataEmpty(); // Если данных нет, скрываем прелоудер и блок результатов, показываем ошибку
        validate.searchInputNonBlock();
      } else {
        reset.dataComplete(); // Если данные есть, скрываем прелоудер, отображаем данные
        validate.searchInputNonBlock();
        localStorage.setItem("searchWord", JSON.stringify(searchWord)); // Добавляем введеное слово для аналитики
        localStorage.setItem("totalResults", JSON.stringify(data.totalResults)); // Добавляем количетсво данных для аналитики
        localStorage.setItem("news", JSON.stringify(data)); // Добавляем данные для отображения
        resultCards.render(localStorage.getItem("news"), sumLoadCards); // Отрисовка результатов запроса
      }
    })
    .catch((err) => { // Обработка ошибки
      console.error(err);
      reset.dataError(); // Скрываем ненужные блоки, показываем ошибку
      validate.searchInputNonBlock();
    });
  } else {
    validate.searchInputNonBlock();
    reset.notInput(); // Скрываем прелоудер
  }
});

/* Блок слушателя для кнопки "Показать еще"*/
showMoreNews.addEventListener("click", () => {
  const sumLoadCards = resultsCard.children.length; // Сохряняем количество отрисованных на страницу карточек
  if (
    /* Проверяем, что количество отрисованных карточек и 3 новых карточек
      не больше общего количества данных с сервера */
    sumLoadCards + SUM_CARDS_AT_TIME >=
    JSON.parse(localStorage.getItem("news")).articles.length
  ) {
    showMoreNews.classList.add("container__hidden"); // Скрываем кнопку "Показать еще"
    resultsSection.classList.add("results-no-button"); // Добавляем дополнительный класс с отступами блоку results
  }
  resultCards.render(localStorage.getItem("news"), sumLoadCards); // Отрисовываем допольнительные +3 карточки
});

/* Слушатель для страницы */
window.onload = () => { // В случае если была перезагрузка
  if (localStorage.getItem("news") !== null) { // Проверяем локальное хранилище на наличие новостей
    vision.visible(resultsSection); // Отображаем блок с результатами
    resultCards.render(localStorage.getItem("news"), sumLoadCards); // Отрисовываем карточки
    document.querySelector("#search").value = JSON.parse(localStorage.getItem("searchWord")); // Добавляем искомое слово в инпут
  }
};
