ditribute = () => {
    var b = document.body;
    createRow = () => {
        var rowElement = document.createElement('div')
        rowElement.classList.add('row');
        var w = 300;
        var h = 169;
        var columns;
        var rows;
        /*var w1=610;
        var h1=348;*/
        var windowWidth = window.outerWidth;
        var windowHeight = window.outerHeight;
        var count = Math.floor(windowWidth / w) * Math.floor(windowHeight / h);
        var r = parseInt(Math.random() * count);
        //var r=10000;
        var dudes = [];
        var bigDudes = [];

        for (var i = 0; i < count; i++) {
            /*var dude =  createDude(i==3?'big':'small');
            if (i==3)
                window.dude=dude;*/
            //var dude =  createDude(i!=r?'small':'big',i);
            var dude = createDude('small');
            dudes.push(dude);
            rowElement.appendChild(dude);
        }

        onresize = (e) => {
            /*var windowWidth = window.outerWidth;            
            rowElement.style.setProperty('grid-template-columns',"repeat("+Math.floor(windowWidth/w)+","+w+"px)");*/
            /*for (var i in dudes) {

            }*/
            for (var i in bigDudes) {
                bigDudes[i].classList.remove('big');
                bigDudes[i].classList.add('small');
                deflateDude(bigDudes[i]);
            }
            bigDudes = [];
            windowWidth = window.outerWidth;
            windowHeight = window.outerHeight;
            columns = Math.floor(windowWidth / w);
            rows = Math.floor(windowHeight / h);
            for (var i = 0; i < rows; i += 2) {
                var r = Math.floor(Math.random() * columns);
                enlargeDude(dudes[r + (i * columns)], i, r);
                bigDudes.push(dudes[r + (i * columns)]);
            }
            window.removeEventListener('resize', onresize);
        }
        window.addEventListener('resize', onresize);
        onresize();
        return rowElement;
    }

    createDude = (aclass, index) => {
        var e = document.createElement('div')
        e.classList.add(aclass);
        e.index = index;
        /*if (aclass==='big') {
            var o={    
                'grid-row-start': 1,
                'grid-row-end': 3,  
                'grid-column-start': index+1,
                'grid-column-end': index+3
            }
            for (var i in o) {
                e.style.setProperty(i,o[i])
            }
        }*/
        return e;
    }
    deflateDude = (dude) => {        
        dude.style.setProperty('grid-area','auto')        
    }
    enlargeDude = (dude, row, column) => {
        dude.classList.remove('small');
        dude.classList.add('big');
        var o = {
            'grid-row-start': row + 1,
            'grid-row-end': row + 3,
            'grid-column-start': column + 1,
            'grid-column-end': column + 3
        }
        for (var i in o) {
            dude.style.setProperty(i, o[i])
        }
    }
    b.appendChild(createRow());
}