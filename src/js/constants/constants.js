// Константы главной страницы
export const resultsSection = document.querySelector(".results");
export const resultsCard = document.querySelector(".results__cards");
export const notFound = document.querySelector(".not-found");
export const preloader = document.querySelector(".preloader");
export const showMoreNews = document.querySelector(".results__button");
export const serverError = document.querySelector(".error-server");
export const searchForm = document.forms.field;
export const sumLoadCards = document.querySelector(".results__cards").children.length;
export const apiUrl = {
  "api": "8dcb48ee27d842ab9252c979d63d47e6",
  "url": "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?"
}
export const SUM_CARDS_AT_TIME = 3;
export const searchInput = document.querySelector('.search__input');
export const searchButton = document.querySelector('.search__button');
export const searchErrorMessage = document.querySelector('.search__error');
