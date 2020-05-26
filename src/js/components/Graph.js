export class Graph {
  constructor(news, word) {
    this.news = news;
    this.word = word;
  }

  // Метод поиска количества совпадений искомого слова в заголовках
  searchMentions() {
    const rgxp = new RegExp(`${this.word}`, 'gi');
    let mention = 0;
    for(let i = 0; i < this.news.articles.length; i++) {
      if(this.news.articles[i].title.match(rgxp)) {
        mention++;
      }
    }
    return mention;
  }

  // Метод поиска упоминаний по дням ключевого слова
  numbersOfDayNews(date) {
    const rgxp = new RegExp(`${date}`, "g");
    let count = 0
    for(let i = 0; i < this.news.articles.length; i++) {
      if(this.news.articles[i].publishedAt.match(rgxp)) {
        count++;
      }
    }
    return count;
  }

  createGraph(day, width, sum) {
    if(sum > 100) width = 100;
    if(sum < 3) width = 2;
    const template =
        `<p class="analytics__week">${day}</p>
        <div class="analytics__quantity" style="width: ${width}%;">
          <span class="analytics__number">${sum}</span>
        </div>`;
    return template;
  }
}
