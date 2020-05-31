const element = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const button = document.querySelector('.popup__toggle');
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.popup__item_name');
const jobInput = document.querySelector('.popup__item_occupation');
const name = document.querySelector('.profile__name');
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

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
// Функция добавления картинки и открытия попапа с картинкой

function addCard(name, link) {
    const card = cardTemplate.cloneNode(true); //делаем клона карточки
    const elementPic = card.querySelector('.element__pic'); // нашли в карточке картинку
    elementPic.src = link; // ссылка на фото
    card.querySelector('.element__name').textContent = name; // название карточки

    elementContainer.prepend(card); // добавляем элемент в DOM


    elementPic.addEventListener('click', function (evt) { //повесили слушателя на картинку
        imagePopup.classList.toggle('popup_opened'); // при клике добавляем класс открывая попап
        popupImageOpen.src = link;  // вставляем в попап картинку на весь экран, по которой кликнули
        popupName.textContent = name;   // вставляем надпись от картинки по которой кликнули

    });

    // функция добавления лайка
    const buttonLike = document.querySelector('.element__like-button');
    buttonLike.addEventListener('click', function (elem) {
        elem.target.classList.toggle('element__like-button_active')

    })


    // функция удаления картинки
    const deletePlace = document.querySelector('.element__delete');
    deletePlace.addEventListener('click', function (event) {
        event.target.closest('.element').remove()
        console.log(deletePlace);
    })

}

//проходим по массиву и вставляем карточки

initialCards.forEach(function (item) {
    addCard(item.name, item.link);
});

// функция открытия попапа для добавления карточки

function cardClick() {
    if (!cardPopup.classList.contains('popup_opened')) {
        cardPopup.classList.add('popup_opened');
    }

    else {
        cardPopup.classList.remove('popup_opened');

    }
}
elementСard.addEventListener('click', cardClick);
buttonCard.addEventListener('click', cardClick);


// функция добавления карточки пользователем: 

function addCardNew(e) {
    e.preventDefault();
    const card = addCard(popupCardTitle.value, popupCardLink.value);
    elementContainer.append(card);
    cardClick();


};
formCard.addEventListener("submit", addCardNew);

// функция открытия профиля

function closeClick() {
    if (!popup.classList.contains('popup_opened')) {
        nameInput.value = name.textContent;
        jobInput.value = job.textContent;
    }
    popup.classList.toggle('popup_opened');

}

// функция сохранения профиля

function formSubmitHandler(evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;

    closeClick();
}

element.addEventListener('click', closeClick);
button.addEventListener('click', closeClick);
formElement.addEventListener('submit', formSubmitHandler);



// функция закрытия увеличенной картинки

buttonImg.addEventListener('click', function () { // закрываем окно с увеличенной картинкой
    imagePopup.classList.toggle('popup_opened');
})

