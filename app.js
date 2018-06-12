//https://css-tricks.com/examples/ShapesOfCSS/

class Shape {
    constructor (height, width, x, y) {
        this.div = document.createElement('div');
        this.div.style.height = `${height}px`;
        this.div.style.width = `${width}px`;
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
    }
}

class Rectangle extends Shape {
    constructor(height, width, x, y) {
        super(height, width, x, y);
        this.div.classList.add('rectangle');
        this.height = document.getElementById(rectheight);
        this.width = document.getElementById(rectwidth);
        
    }
}
// to create the random placement. 
//needs to constrain to the 600x600 'canvas' I made. do I just append to the canvas? or make the max 600px?
function randVal() {
    return Math.floor(Math.random() * (600 - 1)) + 1
};

//playing with event listner here

document.getElementById('rectangleform').addEventListener("submit", function(e) {
    e.preventDefault();
    let rectHeight = document.getElementById('rectheight').value;
    let rectWidth = document.getElementById('rectwidth').value;
    let newRect = new Rectangle(rectHeight, rectWidth, randVal(), randVal());
    let canvas = document.querySelector('.canvas');
    canvas.appendChild(newRect.div);
});
