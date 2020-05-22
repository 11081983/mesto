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

function addCard (name,link) {
    const card = cardTemplate.cloneNode(true); //делаем клона карточки
    card.querySelector('.element__pic').src = link; // ссылка на фото
    card.querySelector('.element__name').textContent = name; // название карточки
    elementContainer.append(card); // добавляем элемент в DOM

}
initialCards.forEach( function (item) {
    addCard(item.name, item.link);
});

    // function closeClick() {
    //     if (!popup.classList.contains('popup_opened')) {
    //      popup.classList.add('popup_opened');
    //      nameInput.value = name.textContent;
    //      jobInput.value = job.textContent;}
           
    //      else {
    //      popup.classList.remove('popup_opened');
              
    //      }
    //     }
        function closeClick() {
            if (!popup.classList.contains('popup_opened')) {
              nameInput.value = name.textContent;
              jobInput.value = job.textContent;}
              popup.classList.toggle('popup_opened');     
            
            }
        

function formSubmitHandler(evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
   
    closeClick();
}

element.addEventListener('click', closeClick);
button.addEventListener('click', closeClick);
formElement.addEventListener('submit', formSubmitHandler);




