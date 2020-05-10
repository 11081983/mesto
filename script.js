let element = document.querySelector('.profile__edit-button');
function openClick() {
    let rank = document.querySelector('.popup');
    rank.className = 'popup popup_opened';
    console.log (`стили: ${rank.classList}`);
    
 }
element.addEventListener('click', openClick);


let button = document.querySelector('.popup__toggle-image');
function closeClick() {
    
    let close = document.querySelector('.popup_opened');
    close.classList.remove('popup_opened');
    console.log (`стили: ${close.classList}`);
  
 }

button.addEventListener('click', closeClick);
