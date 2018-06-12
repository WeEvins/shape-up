//https://css-tricks.com/examples/ShapesOfCSS/

class Shape {
    constructor (height, width, x, y) {
        this.div = document.createElement('div')
        this.div.height = height;
        this.div.width = width;
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.div.x = randVal();
        this.div.y = randVal();
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width, x, y);
        this.div.classList.add('rectangle')
        this.height = document.getElementById(rectheight);
        this.width = document.getElementById(rectwidth);
        
    }
}
// to create the random placement. 
//needs to constrain to the 600x600 'canvas' I made. do I just append to the canvas?
function randVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
};

//playing with event listner here
document.getElementById(rectangleform).addEventListener("submit", function() {
    let newRect = new Rectangle;
    canvas.appendChild(newRect);
});



