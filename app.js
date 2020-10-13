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
    constructor(x, y, rectwidth, rectheight) {
        super(x, y,);
        this.width = width;
        this.height = height;
        this.shape.addClass("rectangle");
        this.shape.style.width = `${rectwidth}px`,
            this.shape.style.height = `${rectheight}px`
        this.shape.style.display = "inherit";
        shapeContainer.append(this.shape)
    }
}


class Square extends Shape {
    constructor(x, y, squareSideLength) {
        super()
        this.shape.addClass("sqaure");
        this.shape.style.width = `${squareSideLength}px`,
            this.shape.style.height = `${squareSideLength}px`,
            this.shape.style.display = "inherit";
        shapeContainer.append(this.shape);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.shape.addClass("circle");
    }
}

class Triangle extends Shape {
    constructor(height) {
        super()
        this.shape.addClass("triangle");
    }
}

