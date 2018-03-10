class Cell {
    constructor(id) {
        //local properties
        this._element = document.createElement('div');
        this._element.classList.add('cell','small');
        this._element.innerHTML = id;
    }
    get element() {
        return this._element;
    }
    grow(row,column) {
        this._element.classList.remove('small')
        this._element.classList.add('big');
        var o = {
            'grid-row-start': row + 1,
            'grid-row-end': row + 3,
            'grid-column-start': column + 1,
            'grid-column-end': column + 3
        }
        for (var i in o) {
            this._element.style.setProperty(i, o[i])
        }
    }
    shrink() {
        this._element.classList.remove('big')
        this._element.classList.add('small');
        this._element.style.setProperty('grid-area','auto')    
    }
}