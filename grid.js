class Grid {
    constructor(container) {
        this._element = document.createElement('div');
        this._element.classList.add('grid');
        this._cells=[];
        this._cellWidth = 300;
        this._cellHeight = 169;
        this._container = container;
        this._create();
        this._scaleRandomCellsInRow();
    }
    
    get _count() {
        return Math.floor(this._element.offsetWidth / this._cellWidth) * Math.floor(this._element.offsetHeight / this._cellHeight);
    }

    get _containerCellCount() {
        return Math.floor(this._container.offsetWidth / this._cellWidth) * Math.floor(this._container.offsetHeight / this._cellHeight);
    }
    
    get _columnsCount() {
        return Math.floor(this._element.offsetWidth / this._cellWidth);
    }
    
    get _rowsCount() {
        return Math.floor(this._element.offsetHeight/ this._cellHeight);
    }

    _create() {
        var tempContainer = document.createElement('div');
        for (var i = 0; i < this._containerCellCount; i++) {
            /*var dude =  createDude(i==3?'big':'small');
            if (i==3)
                window.dude=dude;*/
            //var dude =  createDude(i!=r?'small':'big',i);
            var c = new Cell();
            this._element.appendChild(c.element)
            this._cells.push(c);

            /*dudes.push(dude);
            rowElement.appendChild(dude);*/
        }
        //this._element.innerHTML = tempContainer.innerHTML;
        this._container.appendChild(this._element)        
    }
    _scaleRandomCellsInRow() {
        for (var i = 0; i < this._rowsCount; i += 2) {
            var r = Math.floor(Math.random() * this._columnsCount);
            this._cells[r+(i*this._columnsCount)].grow();
            //enlargeDude(dudes[r + (i * columns)], i, r);
            //bigDudes.push(dudes[r + (i * columns)]);
        }
    }
    
    get element() {
        return this._element;
    }
    
    onResize() {
        this._scaleRandomCellsInRow()
    }
}