"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_ev) {
        const centerPoint = { x: 825, y: 450 };
        const canvas = document.querySelector("canvas");
        const crc2 = canvas.getContext("2d");
        const radius = 100;
        const amount = 10;
        canvas.width = 1650;
        canvas.height = 900;
        for (let i = 0; i < amount; i++) {
            const x1 = centerPoint.x;
            const y1 = centerPoint.y;
            const x2 = Math.sin(Math.PI * 2 / amount * i) * radius + centerPoint.x;
            const y2 = Math.sin(Math.PI * 2 / amount * i) * radius + centerPoint.y;
            const x3 = Math.sin(Math.PI * 2 / amount * (i + 1)) * radius + centerPoint.x;
            const y3 = Math.sin(Math.PI * 2 / amount * (i + 1)) * radius + centerPoint.y;
            const color = getRandomColor();
            drawTriangle(x1, y1, x2, y2, x3, y3, color, crc2);
        }
    }
    function drawTriangle(x1, y1, x2, y2, x3, y3, color, crc2) {
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
