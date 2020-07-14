import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
    constructor(popupName, { toggleButtonState }, clearErrors) {
        super(popupName);
        this._toggleButtonState = toggleButtonState;
        this._clearErrors = clearErrors;
    }



    // собирает данные всех полей формы.
    _getInputValues() {
        this._inputList = this._popup.querySelectorAll('.popup__item');
        this._formValues = {};
        this._inputList.forEach(input =>
            this._formValues[input.name] = input.value
        );
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupName.addEventListener('submit', () => {
            this._toggleButtonState(this._getInputValues());
            this.close();
        })
    }

    open() {
        super.open();
        this._clearErrors();
    }

    close() {
        super.close();
        this._popup.querySelector('.popup__item').reset();
    }
}