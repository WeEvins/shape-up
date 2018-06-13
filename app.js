//https://css-tricks.com/examples/ShapesOfCSS/

class Shape {
    constructor(height, width, x, y) {
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

    }
}

class Square extends Rectangle {
    constructor(height, width, x, y) {
        super(height, width, x, y);
        this.div.classList.add('square');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(2 * radius, 2 * radius)
        this.radius = radius;
    }

    area () {
        return Math.PI * this.radius * this.radius;
    }

    circum() {
        return 2 * Math.PI * this.radius;
    }
}

class Triangle extends Shape {
    constructor(height){
        super(height, height);
    }
    area() {
        return 0.5 * this.height * this.height;
    }
    perimeter(){
        return 2 * this.height + Math.sqrt(2) * this.height;
    }

}


// to create the random placement. 
function randVal() {
    return Math.floor(Math.random() * (600 - 1)) + 1
};

//playing with event listner here
document.getElementById('rectangleform').addEventListener("submit", function (e) {
    e.preventDefault();
    let rectHeight = document.getElementById('rectheight').value;
    let rectWidth = document.getElementById('rectwidth').value;
    let newRect = new Rectangle(rectHeight, rectWidth, randVal(), randVal());
    let canvas = document.querySelector('.canvas');
    canvas.appendChild(newRect.div);
});
document.getElementById('sqrform').addEventListener("submit", function (e) {
    e.preventDefault();
    let sqrHeight = document.getElementById('sqrsize').value;
    let sqrWidth = document.getElementById('sqrsize').value;
    let newSqr = new Square(sqrHeight, sqrWidth, randVal(), randVal());
    let canvas = document.querySelector('.canvas');
    canvas.appendChild(newSqr.div);
});

document.getElementById('circont').addEventListener("submit", function (e) {
    e.preventDefault();

});