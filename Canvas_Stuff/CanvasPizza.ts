namespace Canvas {

    interface Vector2 {x: number, y: number}

       

    

    window.addEventListener("load", handleLoad);

    function handleLoad(this: Window, _ev: Event) {
        const centerPoint: Vector2 = {x: 825, y: 450};
        const canvas = document.querySelector("canvas") as HTMLCanvasElement;
        const crc2 = canvas.getContext("2d") as CanvasRenderingContext2D;
        const radius: number = 100
        const amount: number = 10
        canvas.width = 1650;
        canvas.height = 900;

        for (let i = 0; i < amount; i++) {

            const x1 = centerPoint.x;
            const y1 = centerPoint.y;

            const x2: number = Math.sin(Math.PI * 2 / amount * i) * radius + centerPoint.x;
            const y2: number = Math.sin(Math.PI * 2 / amount * i) * radius + centerPoint.y;

            const x3: number = Math.sin(Math.PI * 2 / amount * (i+1)) * radius + centerPoint.x;
            const y3: number = Math.sin(Math.PI * 2 / amount * (i+1)) * radius + centerPoint.y;

            const color = getRandomColor();

            drawTriangle(x1, y1, x2, y2, x3, y3, color, crc2);
        }
    }

    function drawTriangle(
        x1: number, y1: number,
        x2: number, y2: number,
        x3: number, y3: number,
        color: string,
        crc2: CanvasRenderingContext2D
    ) 
    {
        crc2.beginPath();
        crc2.moveTo(x1, y1);
        crc2.lineTo(x2, y2);
        crc2.lineTo(x3, y3);
        crc2.closePath();
        crc2.fillStyle = color;
        crc2.fill();
    }

    function getRandomColor(): string {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}