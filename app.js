const shapeContainer = document.getElementById("shapeContainer");
const rectBtn = document.getElementById("rectBtn");
const squareBtn = document.getElementById("squareBtn");
const circleBtn = document.getElementById("circleBtn");
const triangleBtn = document.getElementById("triangleBtn");

class Shape {
    constructor(x, y) {
        this.shape = document.getElementById("div");
        this.shape.style.left = `${x}px`,
            this.shape.style.top = `${y}px`
        shapeContainer.appendChild(this.shape);
    }
}

class Rectangle extends Shape {
    constructor(x, y, rectWidth, rectHeight) {
        super(x, y);
        this.shape.addClass("rectangle");
        this.shape.style.width = `${rectWidth}px`,
            this.shape.style.height = `${rectHeight}px`
        this.shape.style.display = "inherit";
        shapeContainer.append(this.shape)
    }
}

class Square extends Shape {
    constructor(x, y, squareSideLength) {
        super(x, y)
        this.shape.addClass("sqaure");
        this.shape.style.width = `${squareSideLength}px`,
            this.shape.style.height = `${squareSideLength}px`,
            this.shape.style.display = "inherit";
        shapeContainer.append(this.shape);
    }
}

class Circle extends Shape {
    constructor(x, y, circleRadius) {
        super(x, y)
        this.shape.addClass("circle");
        this.shape.style.width = `${circleRadius * 2}px`,
            this.shape.style.height = `${circleRadius * 2}px`,
            this.shape.style.display = "inherit";
        shapeContainer.append(this.shape);
    }
}

class Triangle extends Shape {
    constructor(x, y) {
        super(x, y)
        this.shape.addClass("triangle");
        this.shape.style.borderBottom = `${this.width}px`,
            this.shape.style.borderRight = `${this.height}px`,
            this.shape.style.display = "inherit";
        shapeContainer.append(this.shape)
    }
}
