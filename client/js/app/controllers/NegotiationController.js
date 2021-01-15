class NegotiationController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputPrice = $('#price');
    }

    add(event){
        event.preventDefault();

        let negotiation = new Negotiation(
            DateHelper.transformDate(this._inputDate.value), 
            this._inputQuantity.value,
            this._inputPrice.value
        );
    }
}
