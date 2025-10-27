"use strict";
var Canvas;
(function (Canvas) {
    // window.addEventListener("load", handleLoad)
    const canvas = document.querySelector("canvas");
    const crc2 = canvas.getContext("2d");
    crc2.beginPath();
    crc2.moveTo(2.1, 1);
    crc2.lineTo(2.1, 10);
    crc2.moveTo(4.5, 1);
    crc2.lineTo(4.5, 10);
    crc2.moveTo(7.5, 1);
    crc2.lineTo(10.5, 10);
    crc2.stroke();
})(Canvas || (Canvas = {}));
//     function handleLoad(){
// crc2.fillStyle = "#00d635ff";
//         crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
//         crc2.beginPath();
//         crc2.arc(150, 100, 20, 0, 1.2 * Math.PI);
//         crc2.ellipse(0, 0, 30, 40, 3, 15, 15);
//         crc2.moveTo(10, 10);
//         crc2.lineTo(200, 10);
//         crc2.lineTo(10, 60);
//         crc2.fillText("Hallo", 30, 30);
//         new Path2D()
//         crc2.strokeText("Hello", 50, 40);
//         crc2.closePath();
//         crc2.stroke();
//     }
