import './about.css';
import '../blocks/header/header.css';
import '../blocks/footer/footer.css';
import '../blocks/about/about.css';

import { GitHubApi } from "./../js/modules/GitHubApi";
import { CommitCard } from "./../js/components/CommitCards";
import { CommitCardList } from "./../js/components/CommitCardList";
import { TimeUtil } from "../js/utils/TimeUtil"

// Контейнер для слайдера
const container = document.querySelector(".main-carousel");

// Объявление классов
const date = new TimeUtil();
const card = new CommitCard(container);
const cardList = new CommitCardList(card, date);
const gitHubApi = new GitHubApi();

// Слушатель для адаптивного слайдера
window.addEventListener('resize', () => card.flickity());

// Отрисовка слайдера
gitHubApi.getCommits().then((data) => {
  cardList.renderCommits(data);
}).catch((error) => console.error(error));
