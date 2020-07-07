import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../components/utils.js';
import { formValidationOptions } from '../components/utils.js';
import { Section } from '../components/Section.js';


const element = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const button = document.querySelector('.popup__toggle');
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.popup__item_name');
const jobInput = document.querySelector('.popup__item_occupation');
const profileName = document.querySelector('.profile__name');
const job = document.querySelector('.profile__occupation');
const elementContainer = document.querySelector('.elements');
const elementСard = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.popup_type_card');
const buttonCard = document.querySelector('.popup__toggle_card');
const popupCardTitle = document.querySelector('.popup__item_title'); //находим поле названия 
const popupCardLink = document.querySelector('.popup__item_link'); //находим поле ссылки 
const formCard = document.querySelector('.popup__container_card'); //форма карточек
const imagePopup = document.querySelector('.popup_type_image');
const buttonImg = document.querySelector('.popup__toggle_img');


const formValidator = new FormValidator(formValidationOptions, document.forms.userdata);
formValidator.enableValidation();



const formCardValidator = new FormValidator(formValidationOptions, document.forms.form_card);
formCardValidator.enableValidation();



// функция открытия модального окна
function togglePopup(elem) {
    elem.classList.toggle('popup_opened');
}

// initialCards.forEach((item) => {
//     // Создадим экземпляр карточки
//     const card = new Card(item.name, item.link, '.element-template');
//     // Создаём карточку и возвращаем наружу
//     const cardElement = card.generateCard();
//     // Добавляем в DOM
//     elementContainer.append(cardElement);
// })

const renderCards = new Section({
   items: initialCards,
   renderer: (item) => {
    const card = new Card(item.name, item.link, '.element-template');
    const cardElement = card.generateCard();
    return cardElement;  
   }},'.elements'); 
   renderCards.renderItems();


// функция открытия попапа для добавления карточки
elementСard.addEventListener('click', () => { formCardValidator.clearErrors(); togglePopup(cardPopup) });
buttonCard.addEventListener('click', () => togglePopup(cardPopup));



// функция добавления карточки пользователем: 
function addCardNew(e) {
    e.preventDefault();
    const card = new Card(popupCardTitle.value, popupCardLink.value, '.element-template');
    const cardElement = card.generateCard();
    elementContainer.prepend(cardElement);
    togglePopup(cardPopup);
}
formCard.addEventListener("submit", addCardNew);

// функция открытия профиля
function closeClick() {
    formValidator.clearErrors();
    nameInput.value = profileName.textContent;
    jobInput.value = job.textContent;
    togglePopup(popup);
}

// функция сохранения профиля
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    job.textContent = jobInput.value;
    togglePopup(popup);
}

element.addEventListener('click', closeClick);
button.addEventListener('click', () => togglePopup(popup));
formElement.addEventListener('submit', formSubmitHandler);

// функция закрытия увеличенной картинки
buttonImg.addEventListener('click', () => togglePopup(imagePopup));


//закрытие по клику на оверлэй
const popupList = Array.from(document.querySelectorAll('.popup'));
popupList.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup')) {
            e.target.classList.remove('popup_opened');
        }
    })
})

//закрытие escape
function escHandler(evt) {
    const opened = document.querySelector('.popup_opened')
    if (evt.key === 'Escape') {
        if (opened) {
            togglePopup(opened)
        };
        evt.target.removeEventListener('keydown', escHandler);
    }
}

document.addEventListener('keydown', escHandler);



