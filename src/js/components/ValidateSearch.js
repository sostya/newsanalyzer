import {searchInput, searchButton, searchErrorMessage} from '../constants/constants.js'

export class ValidateSearch {
  constructor(phrase) {
    this.phrase = phrase;
  }

  validateInput(word) {
    if(word.length === 0) {
      searchErrorMessage.setAttribute('style', 'display: block');
      return false;
    } else {
      searchErrorMessage.setAttribute('style', 'display: none');
      return true;
    }
  }
  searchInputBlock() {
    searchInput.setAttribute('disabled', true);
    searchButton.setAttribute('disabled', 'true');
  }

  searchInputNonBlock() {
    searchInput.removeAttribute('disabled');
    searchButton.removeAttribute('disabled');
  }
  // searchInputBlock() {
  //   document.querySelector('.search__input').setAttribute('disabled', true);
  //   document.querySelector('.search__button').setAttribute('disabled', 'true');
  // }

  // searchInputNonBlock() {
  //   document.querySelector('.search__input').removeAttribute('disabled');
  //   document.querySelector('.search__button').removeAttribute('disabled');
  // }
}
