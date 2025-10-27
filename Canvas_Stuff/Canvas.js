"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", handleLoad);
    const canvas = document.querySelector("canvas");
    const crc2 = canvas.getContext("2d");
    function handleLoad(_ev) {
        canvas.width = 1650;
        canvas.height = 900;
        for (let i = 0; i < 200; i++) {
            const x1 = Math.floor(Math.random() * canvas.width);
            const y1 = Math.floor(Math.random() * canvas.height);
            const x2 = Math.floor(Math.random() * canvas.width);
            const y2 = Math.floor(Math.random() * canvas.height);
            const x3 = Math.floor(Math.random() * canvas.width);
            const y3 = Math.floor(Math.random() * canvas.height);
            const color = getRandomColor();
            drawTriangle(x1, y1, x2, y2, x3, y3, color);
        }
    }
    function drawTriangle(x1, y1, x2, y2, x3, y3, color) {
        crc2.beginPath();
        crc2.moveTo(x1, y1);
        crc2.lineTo(x2, y2);
        crc2.lineTo(x3, y3);
        crc2.closePath();
        crc2.fillStyle = color;
        crc2.fill();
    }
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
})(Canvas || (Canvas = {}));
//crc2.fillStyle = "#00d635ff";
//crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
//function drawTriangle()
//crc2.beginPath();
//crc2.arc(150, 100, 20, 0, 1.2 * Math.PI);
//crc2.ellipse(0, 0, 30, 40, 3, 15, 15);
//crc2.moveTo(10, 10);
//crc2.lineTo(200, 10);
//crc2.lineTo(10, 60);
//crc2.fillText("Hallo", 30, 30);
//new Path2D()
//crc2.strokeText("Hello", 50, 40);
//crc2.closePath();
//crc2.stroke();
//let path Path2D = new Path2D();
//      path.arc(60, 60, 50, 0, 2 * Math.PI);
//    crc2.stroke(path);
