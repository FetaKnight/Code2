"use strict";
var Asteroids;
(function (Asteroids) {
    class Projectile extends Asteroids.Moveable {
        lifetime = 2;
        constructor(_position, _velocity) {
            super(_position);
            console.log("Projectile constructor");
            this.velocity = _velocity.copy();
        }
        draw() {
            //console.log("Asteroid draw");
            Asteroids.crc2.save();
            Asteroids.crc2.translate(this.position.x, this.position.y);
            Asteroids.crc2.strokeRect(-1, -1, 1, 1);
            Asteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
    Asteroids.Projectile = Projectile;
})(Asteroids || (Asteroids = {}));
