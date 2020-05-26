export class NewsCard {
  createCard(image, date, title, description, source, url) {
    let style;
    if (image === null) {
      image = "";
      style = "style: backgroundColor: #fff";
    }
    const template = `<a href="${url}" target="_blank" class="card">
                <img src="${image}" class="card__image" ${style}>
                <p class="card__date">${date}</p>
                <div class="card__content">
                    <h4 class="card__title">${title}</h4>
                    <p class="card__description">${description}</p>
                </div>
                <p class="card__source">${source}</p>
            </a>`;
    return template;
  }
}
