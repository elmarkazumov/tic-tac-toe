import { Render } from "./render.js";

class Screen {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        const field = document.querySelector('.game__field');
        field.appendChild(canvas);

        const render = new Render(context);

        render.drawRect(0, 0, 800, 600, '#424345');
    }
}

export {Screen}