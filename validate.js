
function enableValidation(options) {
    // находим формы
    const formElements = Array.from(document.querySelectorAll(options.formSelector));
    // для каждой формы
    formElements.forEach(formElement => {
        // находим ее инпуты
        const inputElements = Array.from(formElement.querySelectorAll(options.inputSelector));
        // находим сабмит
        const submitButton = formElement.querySelector('.popup__button');

        // для всех инпутов
        inputElements.forEach(input => {
            // проверка валидности инпута
            input.addEventListener('input', e => handleInput(e, options.inputErrorClass))
        })

       

        // возможно, не имеет смысл добавлять этот обработчик в рамках enableValidation
        formElement.addEventListener('submit', evt => {
            // обработка сабмита
            evt.preventDefault()
        })
         // включаем / выключаем кнопку в зависимости от валидности формы
        formElement.addEventListener('input', () => {
            const hasErrors = !formElement.checkValidity();
            submitButton.disabled = hasErrors;
            submitButton.classList.toggle(
                options.inactiveButtonClass,
                // если второй аргумент true -- добавляем, если false -- удаляем класс
                hasErrors
            )   
        })
    })



}

// function handleFormInput(formElement, submitButton, inactiveButtonClass) {
//     // включаем / выключаем кнопку в зависимости от валидности формы
//     const hasErrors = !formElement.checkValidity();
//     submitButton.disabled = hasErrors;
//     submitButton.classList.toggle(
//         inactiveButtonClass,
//         // если второй аргумент true -- добавляем, если false -- удаляем класс
//         hasErrors
//     )
// }


function handleInput(evt, errCls) {
    const input = evt.target;
    // ищем ошибку по id инпута + '-error'
    const error = document.querySelector(`#${input.id}-error`);
    if (input.checkValidity()) {
        input.classList.remove(errCls);
        error.textContent = '';
    }
    else {
        input.classList.add(errCls);
        error.textContent = input.validationMessage;

    }
}