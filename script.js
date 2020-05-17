const element = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const button = document.querySelector('.popup__toggle');
const formElement = document.querySelector('.form');
let nameInput = document.querySelector('.popup__item_name');
let jobInput = document.querySelector('.popup__item_occupation');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__occupation');

    function closeClick() {
        if (!popup.classList.contains('popup_opened')) {
         popup.classList.add('popup_opened');
         nameInput.value = name.textContent;
         jobInput.value = job.textContent;}
           
         else {
         popup.classList.remove('popup_opened');
              
         }
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





