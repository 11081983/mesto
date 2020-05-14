
const popup = document.querySelector('.popup');
const element = document.querySelector('.profile__edit-button');
const button = document.querySelector('.popup__toggle-image');
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.popup__item_name');
const jobInput = document.querySelector('.popup__item_occupation');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__occupation');

function closeClick() {
    popup.classList.toggle('popup_opened')
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
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





