class NegotiationController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputPrice = $('#price');
        this._negotiationsList = new NegotiationsList();
    }

    add(event){
        event.preventDefault();
        this._negotiationsList.add(this._createNegotiation());
        this._clearForm();
    }

    _createNegotiation(){
        return new Negotiation(
            DateHelper.transformDate(this._inputDate.value), 
            this._inputQuantity.value,
            this._inputPrice.value
        );
    }

    _clearForm(){
        this._inputDate.value = '';
        this._inputQuantity.value = 1;
        this._inputPrice.value = 0.0;
        this._inputDate.focus();
    }
}
