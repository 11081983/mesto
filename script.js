const element = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const button = document.querySelector('.popup__toggle');
const formElement = document.querySelector('.form');
let nameInput = document.querySelector('.popup__item_name');
let jobInput = document.querySelector('.popup__item_occupation');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__occupation');

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

const elementContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('.element-template').content;

function addCard(name, link) {
    const card = cardTemplate.cloneNode(true); //делаем клона карточки
    card.querySelector('.element__pic').src = link; // ссылка на фото
    card.querySelector('.element__name').textContent = name; // название карточки
    elementContainer.prepend(card); // добавляем элемент в DOM
    return card;
}


initialCards.forEach(function (item) {
    addCard(item.name, item.link);
});  //проходим по массиву и вставляем карточки


const element_card = document.querySelector('.profile__add-button');
const popup__card = document.querySelector('.popup__card');
const button_card = document.querySelector('.popup__toggle_card');

// функция открытия попапа для добавления карточки
function cardClick() {     
    if (!popup__card.classList.contains('popup_opened')) {
        popup__card.classList.add('popup_opened');
    }

    else {
        popup__card.classList.remove('popup_opened');

    }
}
element_card.addEventListener('click', cardClick);
button_card.addEventListener('click', cardClick);


// функция добавления карточки пользователем:
let popupCardTitle = document.querySelector('.popup__item_title'); //находим поле названия 
let popupCardLink = document.querySelector('.popup__item_link'); //находим поле ссылки 
const formCard = document.querySelector('.popup__container_card'); //форма карточек



function addCardNew(e) {
    e.preventDefault();
    const card = addCard(popupCardTitle.value, popupCardLink.value);
    elementContainer.prepend(card);
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




// функция добавления лайка
function makeLove(evt) {
    evt.target.classList.toggle('element__like-button_active');
}

function addListener(elem) {
    elem.addEventListener('click', makeLove);
}

const buttonLike = document.querySelectorAll('.element__like-button');
buttonLike.forEach(addListener);

// функция удаления картинки

const deletePlace = document.querySelectorAll('.element__delete');

deletePlace.forEach(function (ele) {
    ele.addEventListener('click', function (event) {
        event.target.closest('.element').remove()

    })
})

// функция открытия картинки на экран

const imagePopup = document.querySelector('.popup__image');
const popupImageOpen = document.querySelector('.popup__imgopen');
const popupName = document.querySelector('.popup__nameopen');
const buttonImg = document.querySelector('.popup__toggle_img');


// elementContainer.addEventListener('click', function(e) {
// imagePopup.classList.toggle('popup_opened');
// popupImageOpen.src = e.target.src;
// popupName.textContent = e.target.getAttribute('element__name');


// });



// buttonImg.addEventListener('click', function() {
//     imagePopup.classList.toggle('popup_opened');
// })



// Еще пробы
// function close() {
//     if (imagePopup.classList.toggle('popup_opened')){ 
//         popupImageOpen.src = e.target.src;
//         popupName.textContent = e.target.name
//     }
//   }

// document.querySelectorAll('.element__pic').addEventListener('click', close);


//Сам

function open(evt) {
    imagePopup.classList.toggle('popup_opened');
    popupImageOpen.src = evt.target.src;
    popupName.textContent = evt.target.name;
    console.log(event.target)
}

function addListener(elem) {
    elem.addEventListener('click', open);
}

const elementPic = document.querySelectorAll('.element__pic');
elementPic.forEach(addListener);

buttonImg.addEventListener('click', function() {
    imagePopup.classList.toggle('popup_opened');
})



