const element = document.querySelector('.profile__edit-button');
function openClick() {
    const rank = document.querySelector('.popup');
    rank.className = 'popup popup_opened';

}
element.addEventListener('click', openClick);

const button = document.querySelector('.popup__toggle-image');
function closeClick() {
    const close = document.querySelector('.popup_opened');
    close.classList.remove('popup_opened');

}
button.addEventListener('click', closeClick);

const formElement = document.querySelector('.form');

function formSubmitHandler(evt) {
    evt.preventDefault();

    const nameInput = document.querySelector('.popup__item');
    const jobInput = document.querySelector('.popup__item_occupation');

    const name = document.querySelector('.profile__name');
    const job = document.querySelector('.profile__occupation');

    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closeClick();

}
formElement.addEventListener('submit', formSubmitHandler);