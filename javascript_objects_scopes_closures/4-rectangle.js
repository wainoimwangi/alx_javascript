#!/usr/bin/node
// class rectangle that defines a rectangle

module.exports = class Rectangle {
    constructor(w,h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        }
    }
    print() {
        for (let i = 0; i < this.height; i++) {
            let row = '';
            for (let j = 0; j < this.width; j++) {
                row += 'X';
            }
            console.log(row);
        }
    }
    rotate() {
        temp = this.width;
        this.width = this.height;
        this.height = temp;
    }
    double() {
        this.width *= 2;
        this.height *= 2;
    }
};