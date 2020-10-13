const shapeContainer = document.getElementById("shapeContainer");
const rectBtn = document.getElementById("rectBtn");
const squareBtn = document.getElementById("squareBtn");
const circleBtn = document.getElementById("circleBtn");
const triangleBtn = document.getElementById("triangleBtn");

class Shape {
    constructor(height, width) {
    this.height = height;
    this.width = width;
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.rectangle = document.createElement("div");
        this.rectangle.classList.add("rectangle");
        this.rectangle.style.width = `${this.width}px`,
            this.rectangle.style.height = `${this.height}px`
        shapeContainer.append(this.rectangle)
    }
}

class Square extends Shape {
    constructor(height, width, squareSideLength) {
        super(height, width)
        this.squareSideLength = squareSideLength;
        this.square = document.createElement("div");
        this.square.classList.add("sqaure");
        this.square.style.width = `${this.squareSideLength}px`,
            this.square.style.height = `${this.squareSideLength}px`,
            shapeContainer.append(this.square);
    }
}

class Circle extends Shape {
    constructor(circleRadius) {
        super()
        this.circleRadius = circleRadius;
        this.circle = document.createElement("div");
        this.circle.classList.add("circle");
        this.circle.style.width = `${this.circleRadius * 2}px`,
            this.circle.style.height = `${this.circleRadius * 2}px`,
            shapeContainer.append(this.circle);
    }
}

class Triangle extends Shape {
    constructor(triangleSide) {
        super()
        this.triangleSide = triangleSide;
        this.triangle = document.createElement("div");
        this.triangle.classList.add("triangle");
        this.triangle.style.borderBottom = `${this.triangleSide}px`,
            this.triangle.style.borderRight = `${this.triangleSide}px`,
            shapeContainer.append(this.triangle)
    }
}

rectBtn.addEventListener("click", () => { new Rectangle(rectWidth.value, rectHeight.value) });
squareBtn.addEventListener("click", () => { new Square(squareSideLength.value, squareSideLength.value) });
circleBtn.addEventListener("click", () => { new Circle((circleRadius.value * 2), (circleRadius.value * 2)) });
triangleBtn.addEventListener("click", () => { new Triangle(triangleSide.value, triangleSide.value) });
