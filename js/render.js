
class Render {
    constructor(context) {
        if(context && context instanceof CanvasRenderingContext2D){
            this.context = context;
        }
    }

    drawRect(x, y, w, h, color) {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, w, h);
    }

    drawLine(x1, y1, x2, y2, widthLine, colorLine) {
        this.context.strokeStyle = colorLine;
        this.context.lineWidth = widthLine;

        this.context.beginPath();
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.closePath();
        
        this.context.stroke();
    }

    drawCircle(x, y, radius, color) {
        this.context.strokeStyle = color;

        this.context.beginPath();
        this.context.arc(x, y, radius, 0, 2 * Math.PI);
        this.context.closePath();

        this.context.stroke();
    }
}

export {Render}