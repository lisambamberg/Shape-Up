const shapeContainer = document.getElementById("shapeContainer");
const rectBtn = document.getElementById("rectBtn");
const squareBtn = document.getElementById("squareBtn");
const circleBtn = document.getElementById("circleBtn");
const triangleBtn = document.getElementById("triangleBtn");

class Shape {
    constructor() {

    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super()
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
    }
}

class Triangle extends Shape {
    constructor(height) {
        super()
    }
}

