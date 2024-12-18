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
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6], 
        ];

        this.step = 0;

    }

    circleCell(item) {
        this.render.drawCircle((item.place.leftX + item.place.rightX) / 2, (item.place.leftY + item.place.rightY) / 2, 40, '#ffffff');
    }

    crossCell(item) {
        this.render.drawCross((item.place.leftX + item.place.rightX) / 2, (item.place.leftY + item.place.rightY) / 2, 40, 2, '#ffffff');
    }



    cellClicked() {
        this.canvas.addEventListener('click', (event) => {
            this.cells.forEach(cell => {
                if((event.clientX >= cell.place.leftX && event.clientX <= cell.place.rightX) && (event.clientY >= cell.place.leftY && event.clientY <= cell.place.rightY)) {
                    cell.state = true;
                    this.crossCell(cell);
                    console.log(cell);
                    
                } else {
                    return;
                }
            })
        })
    }

}

export {Field}