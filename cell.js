class Cell {
    constructor() {
        this._element = document.createElement('div');
        this._element.classList.add('cell','small');
    }
    get element() {
        return this._element;
    }
    grow() {
        this._element.classList.remove('small')
        this._element.classList.add('big');
    }
    shrink() {
        this._element.classList.remove('big')
        this._element.classList.add('small');
    }
}