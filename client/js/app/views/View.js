class View {

    constructor(element){
        this._element = element;
    }

    template(){
        throw new Error('Template method must be implemented');
    }

    update(model){
        this._element.innerHTML = this._template(model);
    }
}