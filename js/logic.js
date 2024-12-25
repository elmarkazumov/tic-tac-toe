import { Render } from "./render.js";


class Field {
    constructor(canvas, context) {

        this.canvas = canvas;

        this.render = new Render(context);

        const canvasVerFirstLine = Math.round(canvas.width / 3);
        const canvasVerSecondLine = Math.round(canvas.width / 1.5);

        const canvasHorFirstLine = Math.round(canvas.height / 3);
        const canvasHorSecondLine = Math.round(canvas.height / 1.5);

        this.cells = [
            { id: 0, place: { leftX: 0, leftY: 0, rightX: canvasVerFirstLine, rightY: canvasHorFirstLine}, state: false, figure: '', },
            { id: 1, place: { leftX: canvasVerFirstLine, leftY: 0, rightX: canvasVerSecondLine, rightY: canvasHorFirstLine}, state: false, figure: '', },
            { id: 2, place: { leftX: canvasVerSecondLine, leftY: 0, rightX: canvas.width, rightY: canvasHorFirstLine}, state: false, figure: '', },
            { id: 3, place: { leftX: 0, leftY: canvasHorFirstLine, rightX: canvasVerFirstLine, rightY: canvasHorSecondLine}, state: false, figure: '', },
            { id: 4, place: { leftX: canvasVerFirstLine, leftY: canvasHorFirstLine, rightX: canvasVerSecondLine, rightY: canvasHorSecondLine}, state: false, figure: '', },
            { id: 5, place: { leftX: canvasVerSecondLine, leftY: canvasHorFirstLine, rightX: canvas.width, rightY: canvasHorSecondLine}, state: false, figure: '', },
            { id: 6, place: { leftX: 0, leftY: canvasHorSecondLine, rightX: canvasVerFirstLine, rightY: canvas.height}, state: false, figure: '', },
            { id: 7, place: { leftX: canvasVerFirstLine, leftY: canvasHorSecondLine, rightX: canvasVerSecondLine, rightY: canvas.height}, state: false, figure: '', },
            { id: 8, place: { leftX: canvasVerSecondLine, leftY: canvasHorSecondLine, rightX: canvas.width, rightY: canvas.height}, state: false, figure: '', },
        ];

        this.winningСombinations = [
            [this.cells[0], this.cells[1], this.cells[2]], [this.cells[3], this.cells[4], this.cells[5]], [this.cells[6], this.cells[7], this.cells[8]],
            [this.cells[0], this.cells[3], this.cells[6]], [this.cells[1], this.cells[4], this.cells[7]], [this.cells[2], this.cells[5], this.cells[8]],
            [this.cells[0], this.cells[4], this.cells[8]], [this.cells[2], this.cells[4], this.cells[6]],
        ];

        this.step = 0;

        this.statusGame = 'none';

    }

    playerStep(cell) {
        if(!cell.state){
            if(this.step % 2 == 0) {
                this.render.drawCross((cell.place.leftX + cell.place.rightX) / 2, (cell.place.leftY + cell.place.rightY) / 2, 40, '#ffffff');
                cell.state = true;
                cell.figure = 'x';
            } else {
                this.render.drawCircle((cell.place.leftX + cell.place.rightX) / 2, (cell.place.leftY + cell.place.rightY) / 2, 40, '#ffffff');
                cell.state = true;
                cell.figure = 'o';
            }
    
            this.step += 1;
            
        } else {
            return;
        }
    }

    checkCombinations() {
        for(const combination of this.winningСombinations) {
            if(combination[0].figure == combination[1].figure && combination[0].figure == combination[2].figure && combination[0].figure != '') {
                alert(`Победил: ${combination[0].figure}`);
                this.statusGame = 'win';
            }
        }

        function cellState(element) {
            return element.state;
        }
        
        if(this.winningСombinations.flat().every(cellState)){
            alert('Ничья');
            this.statusGame = 'dead heat';
        }
    }

    cellClicked() {
        this.canvas.addEventListener('click', (event) => {
            this.cells.forEach(cell => {
                if((event.clientX >= cell.place.leftX && event.clientX <= cell.place.rightX) && (event.clientY >= cell.place.leftY && event.clientY <= cell.place.rightY)) {
                    if(this.statusGame == 'none') {
                        this.playerStep(cell);
                        this.checkCombinations();
                    } else {
                        return;
                    }
                } 
            })
        })
    }

}

export {Field}