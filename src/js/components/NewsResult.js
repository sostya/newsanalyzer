export class NewsResult {
  constructor(container, card, formateDate, SUM_CARDS_AT_TIME) {
    this.container = container;
    this.card = card;
    this.formateDate = formateDate;
    this.SUM_CARDS_AT_TIME = SUM_CARDS_AT_TIME;
  }

  render(data, sumLoadCards) {
    data = JSON.parse(data);
    for (let i = sumLoadCards; i < data.articles.length; i++) {
      if (i > sumLoadCards + this.SUM_CARDS_AT_TIME - 1) return;
      const template = this.card.createCard(
        data.articles[i].urlToImage,
        this.formateDate.formate(data.articles[i].publishedAt),
        data.articles[i].title,
        data.articles[i].description,
        data.articles[i].source.name,
        data.articles[i].url
      );
      this.container.insertAdjacentHTML("beforeend", template);
    }
  }
}
