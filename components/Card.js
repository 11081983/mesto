
export class Card {
  constructor(cardName, cardLink, cardSelector, {handleCardClick}) {
    this._cardSelector = cardSelector;
    this._cardName = cardName;
    this._cardLink = cardLink;
    this.handleCardClick = handleCardClick;
  }

  _getTemplate() {
    // забираем размеку из HTML и клонируем элемент
    // const card = cardTemplate.cloneNode(true); const cardTemplate = document.querySelector('.element-template').content.querySelector('.element');
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    // вернём DOM-элемент карточки
    return cardElement;
  }
  generateCard() {
    // Запишем разметку в приватное поле _element. 
    this._element = this._getTemplate();
    this._image = this._element.querySelector(".element__pic")
    this._setEventListeners();
    // Добавим данные
    this._image.src = this._cardLink;
    this._element.querySelector('.element__name').textContent = this._cardName;
    this._image.alt = this._cardName;

    // Вернём элемент наружу
    return this._element;
  }

  // установим слушатели
  _setEventListeners() {
    //для лайка
    this._like = this._element.querySelector('.element__like-button');
    this._like.addEventListener('click', () => { this._buttonLike(); })
    // для удаления карточки
    this._element.querySelector('.element__delete').addEventListener('click', () => { this._deletePlace(); })
    // для открытия большой картинки
    this._image.addEventListener('click', () => {
      this.handleCardClick();
    })
  }


  //устанавливаем лайк
  _buttonLike() {
    this._like.classList.toggle('element__like-button_active');
  }
  // удаляем карточку
  _deletePlace() {
    this._element.remove();
    this._element = null;
  }
  // открытие большой карточки
  // _elementPic() {
  //   const picOpen = document.querySelector('.popup_type_image');
  //   this._openImg = picOpen.querySelector('.popup__imgopen');
  //   picOpen.classList.toggle('popup_opened');
  //   this._openImg.src = this._cardLink;  // вставляем в попап картинку на весь экран, по которой кликнули
  //   picOpen.querySelector('.popup__nameopen').textContent = this._cardName;   // вставляем надпись от картинки по которой кликнули
  //   this._openImg.alt = this._cardName;  // альт для большой картинки
  // }
}




