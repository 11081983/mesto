
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
        const inputCheck = formElement.querySelector(options.inputSelector);
       
       //кнопка сабмита
        inputCheck.addEventListener('input', () => handleFormInput(inputElements, submitButton, options.inactiveButtonClass))
       
        inputElements.forEach(input => {
            // проверка валидности инпута
            input.addEventListener('input', e => {
                handleInput(e, options.inputErrorClass);
                handleFormInput(inputElements, submitButton, options.inactiveButtonClass)
            })
            
            // обработка сабмита
            formElement.addEventListener('submit', evt => {
                evt.preventDefault();

            })
        })
    })
}

// включаем / выключаем кнопку Submit в зависимости от валидности формы

function handleFormInput(inputElements, submitButton, inactiveButtonClass) {
    const hasErrors = !inputElements.every(function (inputCheck) {
        return inputCheck.checkValidity()
    });
    submitButton.disabled = hasErrors;
    submitButton.classList.toggle(
        inactiveButtonClass,
        // если второй аргумент true -- добавляем, если false -- удаляем класс
        hasErrors
    )
}

const handleInput = (evt, errCls) => {
    const input = evt.target;
    const error = document.querySelector(`#${input.id}-error`);
    if (input.checkValidity()) { hideError(input, errCls, error) }
    else { showError(input, errCls, error); }
}

const hideError = (input, errCls, error) => {
    input.classList.remove(errCls);
    error.textContent = '';
}

const showError = (input, errCls, error) => {
    input.classList.add(errCls);
    error.textContent = input.validationMessage;

}

