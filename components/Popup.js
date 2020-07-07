export class Popup {
    constructor(popupName) {
        this._popupName = popupName;
    }

    open() {
        this._popupName.classList.add('popup_opened');
        this.setEventListeners()
    }

    close() {
        // // const activePopup = document.querySelector('.popup_opened');
        window.removeEventListener('keydown', this._closePopupEscListener);
        this._popupName.classList.remove('popup_opened');
    } 

        _closeByClick = (evt) => {

            const closeButton = this._popupName.querySelector('.popup__toggle') 
          
            if (evt.target === closeButton) { // по крестику
                this.close();
            }
            if (evt.target === this._popupName) { // по оверлею
                this.close();
            }
        }




        _handleEscClose = (evt) => {
            if (evt.key === 'Escape') {
                this.close();
            }

        }

        _closePopupEscListener = (evt) => {
            this._handleEscClose(evt)
        }


        setEventListeners(){
            window.addEventListener('keydown', this._closePopupEscListener);
            this._popupName.addEventListener('click', this._closeByClick);

        }

    }