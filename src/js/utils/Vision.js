export class Vision {
  constructor(activeItem) {
    this.activeItem = activeItem;
  }

  visible(activeItem) {
    activeItem.classList.remove("container__hidden");
  }

  hidden(activeItem) {
    activeItem.classList.add("container__hidden");
  }
}
