"use strict";
var Viktor;
(function (Viktor) {
    class Vector {
        x = 4;
        y = 2;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    }
    let v1 = new Vector(21, 21);
    v1.scale(2);
    console.log(v1);
})(Viktor || (Viktor = {}));
