class Grid {
    constructor(container) {
        this._element = document.createElement('div');
        this._element.classList.add('grid');
        this._cells = [];
        this._bigCells = [];
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
        return Math.floor(this._element.offsetHeight / this._cellHeight);
    }

    _create() {
        this._container.appendChild(this._element);
        var count = this._count;
        //console.log(count);
        for (var i = 0; i < count - 1; i++) {
            var c = new Cell(i);
            this._element.appendChild(c.element)
            this._cells.push(c);
        }

    }
    _scaleRandomCellsInRow() {
        var columnsCount = this._columnsCount;
        var rowsCount = this._rowsCount;
        /*var pushCount = 0;
        for (var i = 0; i < rowsCount; i += 2) {
            //for (var i = rowsCount-2; i >= 0; i -= 2) {
            var r = Math.floor(Math.random() * (columnsCount - 1));
            this._cells[r + (i * columnsCount)-pushCount].grow(i, r); // i is the row, r is the column
            pushCount++;
        }*/
        for (var i in this._bigCells) {
            this._bigCells[i].shrink();
        }
        var itemsCount = 0;
        var r;
        //for (var i = 0; i < rowsCount; i += 2) {
        i=0;
        while (itemsCount<this._cells.length) {
            r = Math.floor(Math.random() * (columnsCount - 1));
            //this._cells[r + (i * columnsCount)].grow(i, r); // i is the row, r is the column
            try {
                this._cells[itemsCount + r].grow(i, r); // i is the row, r is the column
            } catch (e) {
                debugger;
            }
            this._bigCells.push(this._cells[itemsCount + r]);
            itemsCount += 1 + (columnsCount - 2) * 2;
            rowsCount++;
            i+=2;
        }
    }

    get element() {
        return this._element;
    }

    onResize(){
        this._scaleRandomCellsInRow()
    }
}