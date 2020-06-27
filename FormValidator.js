export class FormValidator {
  constructor(selectors, form) {
    // Конструктор с массивом селекторов и элементом конкретной формы
    this._form = form;
    this._inputSelector = selectors.inputSelector;
    this._submitButtonSelector = selectors.submitButtonSelector;
    this._inactiveButtonClass = selectors.inactiveButtonClass;
    this._inputErrorClass = selectors.inputErrorClass;
    this._errorClass = selectors.errorClass;
    this._button = this._form.querySelector(selectors.submitButtonSelector);
    this._inputElements = Array.from(this._form.querySelectorAll(this._inputSelector));
  }
  enableValidation = () => {

    // находим инпуты
    const inputElements = Array.from(this._form.querySelectorAll(this._inputSelector));

    // находим сабмит ?????
    // const submitButton = this._form.querySelector(data.submitButtonSelector);

    // для всех инпутов
    const inputCheck = this._form.querySelector(this._inputSelector);

    //кнопка сабмита
    inputCheck.addEventListener('input', () =>
      this.handleFormInput(inputElements, this._button, this._inactiveButtonClass))


    inputElements.forEach(input => {
      // проверка валидности инпута
      input.addEventListener('input', e => {
        this._handleInput(e, this._inputErrorClass);
        this.handleFormInput(inputElements, this._button, this._inactiveButtonClass)
      })

      // обработка сабмита
      this._form.addEventListener('submit', evt => {
        evt.preventDefault();

      })
    })
  }

  handleFormInput = (inputElements, submitButton, inactiveButtonClass) => {
    
    const hasErrors = !this._inputElements.every((inputCheck) => {
      return inputCheck.checkValidity()
    });
    this._button.disabled = hasErrors;
    this._button.classList.toggle(
      inactiveButtonClass,
      // если второй аргумент true -- добавляем, если false -- удаляем класс
      hasErrors
    )
  }


  _showError = (input, errCls, error) => {
    input.classList.add(errCls);
    error.textContent = input.validationMessage;

  }
  _hideError = (input, errCls, error) => {
    input.classList.remove(errCls);
    error.textContent = '';
  }

 

  _handleInput = (evt, errCls) => {
    const input = evt.target;
    const error = document.querySelector(`#${input.id}-error`);
    if (input.checkValidity()) {this._hideError(input, errCls, error) }
    else {this._showError(input, errCls, error); }
  }
}




















