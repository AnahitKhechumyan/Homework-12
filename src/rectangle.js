class Rectangle{
    constructor(length, width){
        this._length = length;
        this._width = width;
    }
    get length(){
        return this._length;
    }
    set length(length) {
        this._length = length;
    }
    get width() {
        return this._width;
    }
    set width(width) {
        this._width = width;
    }
    getArea() {
        return this.length * this.width;
    }
    getPerimeter() {
        return 2 * (this.length + this.width);
    }
    toString() {
        return `Rectangle(length: ${this.length}, width: ${this.width})`;
    }
};

const rectangle = new Rectangle(200, 100);
console.log(rectangle);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.toString());
 