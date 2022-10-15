class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    toString() {
        return "Radius= " + this.radius + " Color= " + this.color;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
    getCircumference() {
        return 2 * this.radius * Math.PI;
    }
}
const c1 = new Circle();
console.log("Object created with no params:", c1);
const c2 = new Circle(2.0);
console.log("Object created passing radius:", c2);
const c3 = new Circle(3.0, "blue");
console.log("Object created passing radius and color:", c3);
const radius = c3.getRadius();
console.log("Getting radius using getRadius(): ", radius);
c3.setRadius(4)
console.log("Radius set using setRadius(): ", c3.getRadius());
const color = c3.getColor();
console.log("Getting color using getRadius(): ", color);
c3.setColor("purple")
console.log("Color set using setColor(): ", c3.getColor());
console.log("String using toString(): ", c3.toString());
const area = c3.getArea();
console.log("Area using getArea(): ", area);
const circumference = c3.getCircumference();
console.log("Circumference using getCircumference(): ", circumference);