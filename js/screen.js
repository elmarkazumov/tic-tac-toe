import { Render } from "./render.js";

class GameSreen {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        const field = document.querySelector('.game__field');
        field.appendChild(canvas);

        const render = new Render(context);

        render.drawRect(0, 0, canvas.width, canvas.height, '#424345');

        // first gorizontal line
        render.drawLine(0, canvas.height / 3, canvas.width, canvas.height / 3, 2, '#ffffff');

        // second gorizontal line
        render.drawLine(0, canvas.height / 1.5, canvas.width, canvas.height / 1.5, 2, '#ffffff');

        // fisrt vertical line
        render.drawLine(canvas.width / 3, 0, canvas.width / 3, canvas.height, 2, '#ffffff');

        // second vertical line
        render.drawLine(canvas.width / 1.5, 0, canvas.width / 1.5, canvas.height, 2, '#ffffff');
    }
}

export { GameSreen }