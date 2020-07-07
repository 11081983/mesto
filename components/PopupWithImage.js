import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
    constructor(popupName) {
        super(popupName);
        this._cardName = cardName;
        this._cardLink = cardLink;
    }

    open() {
        super.open();
        this._popupName.querySelector('.popup__imgopen').src = this._cardLink;
        this._popupName.querySelector('.popup__nameopen').textContent = this._cardName;
        this._popupName.querySelector('.popup__imgopen').alt = this._cardName;
    }


}
    


