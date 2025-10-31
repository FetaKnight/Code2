"use strict";
var Asteroids;
(function (Asteroids) {
    window.addEventListener("load", handleLoad);
    const moveables = [];
    Asteroids.linewidth = 2;
    function handleLoad(_event) {
        console.log("Asteroids starting");
        const canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        canvas.width = 1650;
        canvas.height = 900;
        Asteroids.crc2 = canvas.getContext("2d");
        Asteroids.crc2.fillStyle = "black";
        Asteroids.crc2.strokeStyle = "white";
        Asteroids.crc2.fillRect(0, 0, Asteroids.crc2.canvas.width, Asteroids.crc2.canvas.width);
        Asteroids.crc2.lineWidth = Asteroids.linewidth;
        Asteroids.createPaths();
        console.log("Asteroids paths: ", Asteroids.asteroidPaths);
        createAsteroids(42);
        // createShip();
        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 10);
    }
    function shootProjectile(_event) {
        console.log("Shoot laser");
        const origin = new Asteroids.Vector(_event.clientX - Asteroids.crc2.canvas.offsetLeft, _event.clientY - Asteroids.crc2.canvas.offsetTop);
        const velocity = new Asteroids.Vector(0, 0);
        velocity.random(100, 100);
        const projectile = new Asteroids.Projectile(origin, velocity);
        moveables.push(projectile);
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        const hotspot = new Asteroids.Vector(_event.clientX - Asteroids.crc2.canvas.offsetLeft, _event.clientY - Asteroids.crc2.canvas.offsetTop);
        const asteroidHit = getAsteroidHit(hotspot);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            const asteroid = new Asteroids.Asteroid(1.0);
            moveables.push(asteroid);
        }
    }
    function getAsteroidHit(_hotspot) {
        for (const moveable of moveables) {
            if (moveable instanceof Asteroids.Asteroid && moveable.isHit(_hotspot))
                return moveable;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                const fragment = new Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                moveables.push(fragment);
            }
        }
        _asteroid.expendable = true;
    }
    function update() {
        //console.log("Update");
        Asteroids.crc2.fillRect(0, 0, Asteroids.crc2.canvas.width, Asteroids.crc2.canvas.height);
        for (const moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        deleteExpendables();
        // ship.draw();
        // handleCollisions();
    }
    function deleteExpendables() {
        for (let i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable)
                moveables.splice(i, 1);
        }
    }
})(Asteroids || (Asteroids = {}));
// const asteroid: Asteroid = new Asteroid(1);
// console.log(asteroid);
// for (let i: number = 0; i <100; i++){
// crc2.fillRect(0,0,crc2.canvas.width, crc2.canvas.width);
// asteroid.draw();
// asteroid.move(0.1);
// }
