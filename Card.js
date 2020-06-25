export class Card {
  constructor(template, cardName, cardLink) {
    this._template = template;
    this._cardName = cardName;
    this._cardLink = cardLink;
  }

  _getTemplate() {
    // забираем размеку из HTML и клонируем элемент
    // const card = cardTemplate.cloneNode(true); const cardTemplate = document.querySelector('.element-template').content.querySelector('.element');
    const cardElement = document
      .querySelector(this._template)
      .content
      .querySelector('.element')
      .cloneNode(true);

    // вернём DOM-элемент карточки
    return cardElement;
  }
  generateCard() {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    // Добавим данные
    this._element.querySelector('.element__pic').src = this._cardLink;
    this._element.querySelector('.element__name').textContent = this._cardName;
    this._element.querySelector('.element__pic').alt = this._cardName;

    // Вернём элемент наружу
    return this._element;
  }

  // установим слушатели
  _setEventListeners() {
    //для лайка
    this._element.querySelector('.element__like-button').addEventListener('click', () => { this._buttonLike(); })
    // для удаления карточки
    this._element.querySelector('.element__delete').addEventListener('click', () => { this._deletePlace(); })
    // для открытия большой картинки
    this._element.querySelector('.element__pic').addEventListener('click', () => {
      this._elementPic();
    })
  }


  //устанавливаем лайк
  _buttonLike() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  }
  // удаляем карточку
  _deletePlace() {
    this._element.remove()
  }
  // открытие большой карточки
  _elementPic() { 
    const picOpen = document.querySelector('.popup_type_image');
    picOpen.classList.toggle('popup_opened');
    picOpen.querySelector('.popup__imgopen').src = this._cardLink;  // вставляем в попап картинку на весь экран, по которой кликнули
    picOpen.querySelector('.popup__nameopen').textContent = this._cardName;   // вставляем надпись от картинки по которой кликнули
    picOpen.querySelector('.popup__imgopen').alt = this._cardName;  // альт для большой картинки

    //слушатель для закрытия по Esc 
    document.addEventListener('keydown', this._escHandler);
}
  //закрытие по клавише Esc
  _escHandler (evt) {
    if (evt.key === 'Escape') {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
    document.removeEventListener('keydown', this._escHandler);
    }
}



}
// initialCards.forEach((item) => {
//   // Создадим экземпляр карточки
//   const card = new Card(item.name, item.link);
//   // Создаём карточку и возвращаем наружу
//   const cardElement = card.generateCard();

//   // Добавляем в DOM
//   document.body.append(cardElement);


// }