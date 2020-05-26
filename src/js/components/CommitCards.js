import { TimeUtil } from "../utils/TimeUtil"

export class CommitCard {
  constructor(container) {
    this.container = container;
    this.formateDate = new TimeUtil();
  }

  createCard(date, avatar, name, email, commit) {
    const sliderCell = document.createElement('div');
    const sliderDate = document.createElement('p');
    const sliderInfo = document.createElement('div');
    const sliderAvatar = document.createElement('img');
    const sliderPerson = document.createElement('div');
    const sliderName = document.createElement('h3');
    const sliderEmail = document.createElement('p');
    const sliderComments = document.createElement('p');

    sliderCell.classList.add('carousel-cell');
    sliderDate.classList.add('history__date');
    sliderInfo.classList.add('history__info');
    sliderAvatar.classList.add('history__photo');
    sliderPerson.classList.add('history__person');
    sliderName.classList.add('history__name');
    sliderEmail.classList.add('history__email');
    sliderComments.classList.add('history__comments');

    this.container.appendChild(sliderCell);
    sliderCell.appendChild(sliderDate);
    sliderCell.appendChild(sliderInfo);
    sliderInfo.appendChild(sliderAvatar);
    sliderInfo.appendChild(sliderPerson);
    sliderPerson.appendChild(sliderName);
    sliderPerson.appendChild(sliderEmail);
    sliderCell.appendChild(sliderComments);

    sliderDate.textContent = this.formateDate.formate(date);
    sliderAvatar.src = avatar;
    sliderName.textContent = name;
    sliderEmail.textContent = email;
    sliderComments.textContent = commit;
  }

  flickity() {
    let flkty;
    if (window.matchMedia("(max-width: 990px").matches) {
        flkty = new Flickity(document.querySelector('.main-carousel'), {
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            groupCells: '80%',
            setGallerySize: false,
            freeScroll: true,
            arrowShape: {
                x0: 30,
                x1: 55, y1: 25,
                x2: 60, y2: 20,
                x3: 40
            }
        });
    } else {
        flkty = new Flickity(document.querySelector('.main-carousel'), {
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            groupCells: '80%',
            setGallerySize: false,
            freeScroll: true,
            arrowShape: {
                x0: 30,
                x1: 55, y1: 25,
                x2: 60, y2: 20,
                x3: 40
            }
        });
    }
  }
}
