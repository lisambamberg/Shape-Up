const shapeContainer = document.getElementById("shapeContainer");
const rectBtn = document.getElementById("rectBtn");
const squareBtn = document.getElementById("squareBtn");
const circleBtn = document.getElementById("circleBtn");
const triangleBtn = document.getElementById("triangleBtn");

class Shape {
    constructor(width, height) {
        this.Width = width;
        this.Height = height;
        this.shape = document.getElementById("div");
        this.shape.style.left = `${x}px`,
            this.shape.style.top = `${y}px`
        shapeContainer.appendChild(this.shape);
    }
}

class Rectangle extends Shape {
    constructor(rectWidth, rectHeight) {
        super(width, height);
        this.shape.addClass("rectangle");
        this.shape.style.width = `${rectWidth}px`,
            this.shape.style.height = `${rectHeight}px`
        shapeContainer.append(this.shape)
    }
}

class Square extends Shape {
    constructor(squareSideLength) {
        super()
        this.shape.addClass("sqaure");
        this.shape.style.width = `${squareSideLength}px`,
            this.shape.style.height = `${squareSideLength}px`,
            shapeContainer.append(this.shape);
    }
}

class Circle extends Shape {
    constructor(circleRadius) {
        super()
        this.shape.addClass("circle");
        this.shape.style.width = `${circleRadius * 2}px`,
            this.shape.style.height = `${circleRadius * 2}px`,
            shapeContainer.append(this.shape);
    }
}

class Triangle extends Shape {
    constructor(width, height) {
        super(width, height)
        this.shape.addClass("triangle");
        this.shape.style.borderBottom = `${triangleSide}px`,
            this.shape.style.borderRight = `${triangleSide}px`,
            shapeContainer.append(this.shape)
    }
}

rectBtn.addEventListener("click", () => { new Rectangle(rectWidth.value, rectHeight.value) });
squareBtn.addEventListener("click", () => { new Square(squareSideLength.value, squareSideLength.value) });
circleBtn.addEventListener("click", () => { new Circle((circleRadius.value * 2), (circleRadius.value * 2)) });
triangleBtn.addEventListener("click", () => { new Triangle(triangleSide.value, triangleSide.value) });
