class Grid {
    constructor(container) {
        //local properties and setup function calls
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
        //creates cells according to the container's size
        this._container.appendChild(this._element);
        var count = this._count;
        for (var i = 0; i < count - 1; i++) {
            var c = new Cell(i);
            this._element.appendChild(c.element)
            this._cells.push(c);
        }

    }
    _scaleRandomCellsInRow() {
        //random selection of a cell for the top row of every 2 rows and enlarge it
        var columnsCount = this._columnsCount;
        var rowsCount = this._rowsCount;
        var itemsCount = 0;
        var r;
        var i = 0;
        while (itemsCount < this._cells.length) {
            r = Math.floor(Math.random() * (columnsCount - 1));
            this._cells[itemsCount + r].grow(i, r); // i is the row, r is the column
            this._bigCells.push(this._cells[itemsCount + r]);
            itemsCount += 1 + (columnsCount - 2) * 2;
            rowsCount++;
            i += 2;
        }
    }

    get element() {
        return this._element;
    }

    onResize() {
        //shrinks back every big cell
        for (var i in this._bigCells) {
            this._bigCells[i].shrink();
        }
        this._scaleRandomCellsInRow()
    }
}