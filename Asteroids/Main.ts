namespace Asteroids {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    const moveables: Moveable[] = [];

    export const linewidth: number = 2;

    function handleLoad(_event: Event): void {
        console.log("Asteroids starting");
        const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;

        canvas.width = 1650;
        canvas.height = 900;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.width);
        crc2.lineWidth = linewidth;

        createPaths();
        console.log("Asteroids paths: ", asteroidPaths);

        createAsteroids(5);
        // createShip();
        createUfo();

        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);

        window.setInterval(update, 10);
    }

    function createUfo(): void {
        console.log("Create ufo");
        const ufo: Ufo = new Ufo();
        moveables.push(ufo);
    }

    function shootProjectile(_event: MouseEvent): void {
        console.log("Shoot laser");
        const origin: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        const velocity: Vector = new Vector(0, 0);
        velocity.random(100, 100);
        const projectile: Projectile = new Projectile(origin, velocity);
        moveables.push(projectile);
    }


    function shootLaser(_event: MouseEvent): void {
        console.log("Shoot laser");
        const hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        const asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }

    function createAsteroids(_nAsteroids: number): void {
        console.log("Create asteroids");
        for (let i: number = 0; i < _nAsteroids; i++) {
            const asteroid: Asteroid = new Asteroid(1.0);
            moveables.push(asteroid);
        }
    }

    function getAsteroidHit(_hotspot: Vector): Asteroid | null {
        for (const moveable of moveables) {
            if (moveable instanceof Asteroid && moveable.isHit(_hotspot))
                return moveable;
        }
        return null;
    }

    function breakAsteroid(_asteroid: Asteroid): void {
        if (_asteroid.size > 0.3) {
            for (let i: number = 0; i < 2; i++) {
                const fragment: Asteroid = new Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                moveables.push(fragment);
            }
        }
        _asteroid.expendable = true;

    }

    function update(): void {
        //console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (const moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }

        deleteExpendables();

        // ship.draw();
        // handleCollisions();
    }

    function deleteExpendables(): void {
        for (let i: number = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable)
                moveables.splice(i, 1);
        }
    }
}



// const asteroid: Asteroid = new Asteroid(1);
// console.log(asteroid);

// for (let i: number = 0; i <100; i++){
// crc2.fillRect(0,0,crc2.canvas.width, crc2.canvas.width);
// asteroid.draw();
// asteroid.move(0.1);
// }
