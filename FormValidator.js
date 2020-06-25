export class FormValidator {
    constructor(data, formName) {
      // Конструктор с массивом селекторов и элементом конкретной формы
      this._formSelector = formName;
      this._inputSelector = data.inputSelector;
      this._submitButtonSelector = data.submitButtonSelector;
      this._inactiveButtonClass = data.inactiveButtonClass;
      this._inputErrorClass = data.inputErrorClass;
      this._errorClass = data.errorClass;}
      