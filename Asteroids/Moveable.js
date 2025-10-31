"use strict";
var Asteroids;
(function (Asteroids) {
    class Moveable {
        position;
        velocity;
        expendable = false;
        constructor(_position) {
            //console.log("Moveable constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Asteroids.Vector(0, 0);
            this.velocity = new Asteroids.Vector(0, 0);
        }
        move(_timeslice) {
            //console.log("Moveable move");
            const offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Asteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Asteroids.crc2.canvas.height;
            if (this.position.x > Asteroids.crc2.canvas.width)
                this.position.x -= Asteroids.crc2.canvas.width;
            if (this.position.y > Asteroids.crc2.canvas.height)
                this.position.y -= Asteroids.crc2.canvas.height;
        }
        draw() {
            //console.log("Asteroid draw");
        }
    }
    Asteroids.Moveable = Moveable;
})(Asteroids || (Asteroids = {}));
