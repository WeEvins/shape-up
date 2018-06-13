//https://css-tricks.com/examples/ShapesOfCSS/
const canvasHeight = 600;
const canvasWidth = 600;
let canvas = document.querySelector('.canvas');
let rectHeight = document.getElementById('rectheight').value;
let rectWidth = document.getElementById('rectwidth').value;
let cirCircum = document.getElementById('cirsize').value;
let sqrHeight = document.getElementById('sqrsize').value;
let sqrWidth = document.getElementById('sqrsize').value;
let triBase = document.getElementById('trisize').value;


//defining my classes
class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.draw();
    }
    draw() {
        this.div = document.createElement('div');
        let x = Math.floor(Math.random() * (canvasWidth - this.width));
        let y = Math.floor(Math.random() * (canvasHeight - this.height));
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.div.style.height = `${height}px`;
        this.div.style.width = `${width}px`;
        
        this.div.addEventListener('click', () => {
            console.log('clicked');    
        });
        this.div.addEventListener('dblclick', () => {
            console.log('dblclicked');    
        });

        canvas.appendChild(this.div);
    }
};

class Rectangle extends Shape {
    constructor(height, width, x, y) {
        super(height, width, x, y);
        this.div.classList.add('rectangle', 'shape');
   }

   area () {
       return this.width * this.height;
   }

   perimeter() { 
       return 2 * this.width + 2 * this.height;
   }
};

class Square extends Rectangle {
    constructor(height, width) {
        super(height, width);
        this.div.classList.add('square', 'shape');
    }
};

class Circle extends Shape {
    constructor(radius) {
        super(2 * radius, 2 * radius)
        this.radius = radius;
        this.div.classList.add('circle', 'shape')
    }

    area () {
        return Math.PI * this.radius * this.radius;
    }

    circum() {
        return 2 * Math.PI * this.radius;
    }
};

class Triangle extends Shape {
    constructor(height){
        super(height, height);
        this.div.classList.add('triangle', 'shape')
    }
    area() {
        return 0.5 * this.height * this.height;
    }
    perimeter(){
        return 2 * this.height + Math.sqrt(2) * this.height;
    }

};

//playing with event listener here
document.getElementById('rectangleform').addEventListener("submit", createRect());
document.getElementById('sqrform').addEventListener("submit", createSqr());
document.getElementById('cirform').addEventListener("submit", createCir());
document.getElementById('triform').addEventListener("submit", createTri());


//funcs for the event buttons
function createRect(){
    new Rectangle(rectHeight, rectWidth); 
}
function createSqr(){
    new Square(sqrHeight, sqrWidth);
}
function createCir() {
    new Circle(cirCircum);
}
function createTri() {
    new Triangle(triBase);

}