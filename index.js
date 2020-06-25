// import {Card} from './Card.js';
// import {FormValidator} from './FormValidator.js';
import {initialCards} from './massive-cards.js';


const element = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const button = document.querySelector('.popup__toggle');
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.popup__item_name');
const jobInput = document.querySelector('.popup__item_occupation');
const profileName = document.querySelector('.profile__name');
const job = document.querySelector('.profile__occupation');
const elementContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('.element-template').content.querySelector('.element');
const elementСard = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.popup_type_card');
const buttonCard = document.querySelector('.popup__toggle_card');
const popupCardTitle = document.querySelector('.popup__item_title'); //находим поле названия 
const popupCardLink = document.querySelector('.popup__item_link'); //находим поле ссылки 
const formCard = document.querySelector('.popup__container_card'); //форма карточек
const imagePopup = document.querySelector('.popup_type_image');
const popupImageOpen = document.querySelector('.popup__imgopen');
const popupName = document.querySelector('.popup__nameopen');
const buttonImg = document.querySelector('.popup__toggle_img');

// const initialCards = [
//     {
//         name: 'Архыз',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//     },
//     {
//         name: 'Челябинская область',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//     },
//     {
//         name: 'Иваново',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//     },
//     {
//         name: 'Камчатка',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//     },
//     {
//         name: 'Холмогорский район',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//     },
//     {
//         name: 'Байкал',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//     }
// ];

const formValidationOptions = {
    formSelector: '.popup__container',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__item_type_error',
    errorClass: 'popup__error_visible'
}
enableValidation(formValidationOptions);

// функция открытия модального окна
function togglePopup(elem) {
    elem.classList.toggle('popup_opened');

}

// Функция добавления картинки и открытия попапа с картинкой

function createCard(name, link) {
    const card = cardTemplate.cloneNode(true); //делаем клона карточки
    const elementPic = card.querySelector('.element__pic'); // нашли в карточке картинку
    elementPic.src = link; // ссылка на фото
    elementPic.alt = name;
    card.querySelector('.element__name').textContent = name; // название карточки

    // открываем картинку на экран
    elementPic.addEventListener('click', () => { //повесили слушателя на картинку
        togglePopup(imagePopup); // при клике добавляем класс открывая попап
        popupImageOpen.src = link;  // вставляем в попап картинку на весь экран, по которой кликнули
        popupName.textContent = name;   // вставляем надпись от картинки по которой кликнули
        popupImageOpen.alt = name;
    });

    // функция добавления лайка
    const buttonLike = card.querySelector('.element__like-button');
    buttonLike.addEventListener('click', (elem) => {
        elem.target.classList.toggle('element__like-button_active')
    })

    // функция удаления картинки
    const deletePlace = card.querySelector('.element__delete');
    deletePlace.addEventListener('click', (event) => {
        event.target.closest('.element').remove()
    })
    return card;
}

//проходим по массиву и вставляем карточки
initialCards.forEach((card) => elementContainer.prepend(createCard(card.name, card.link)));


// функция открытия попапа для добавления карточки

elementСard.addEventListener('click', () => togglePopup(cardPopup));
buttonCard.addEventListener('click', () => togglePopup(cardPopup));

// функция добавления карточки пользователем: 

function addCardNew(e) {
    e.preventDefault();
    const card = createCard(popupCardTitle.value, popupCardLink.value);
    elementContainer.prepend(card);
    togglePopup(cardPopup);
}
formCard.addEventListener("submit", addCardNew);

// функция открытия профиля

function closeClick() {
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
        if (opened)
        {    
        togglePopup(opened)};
        evt.target.removeEventListener('keydown', escHandler);
    }
}

document.addEventListener('keydown', escHandler);



