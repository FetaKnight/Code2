"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", handleLoad);
    const canvas = document.querySelector("canvas");
    const crc2 = canvas.getContext("2d");
    function handleLoad() {
        crc2.fillStyle = "#000000ff";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.translate(canvas.width / 2, canvas.height / 2);
        drawCoordinateSystem();
    }
    function drawCoordinateSystem() {
        const axisLength = 200;
        const notchSpacing = 10;
        const notchLength = 5;
        crc2.strokeStyle = "black";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(-axisLength, 0);
        crc2.lineTo(axisLength, 0);
        crc2.moveTo(0, -axisLength);
        crc2.lineTo(0, axisLength);
        crc2.stroke();
        crc2.beginPath();
        for (let i = -axisLength; i <= axisLength; i += notchSpacing) {
            if (i === 0)
                continue;
            crc2.moveTo(i, -notchLength);
            crc2.lineTo(i, notchLength);
            crc2.moveTo(-notchLength, i);
            crc2.lineTo(notchLength, i);
        }
        crc2.stroke();
        crc2.closePath();
    }
    function applyTransformation(translateX, translateY, rotateDeg, scale) {
        crc2.setTransform(1, 0, 0, 1, 0, 0);
        crc2.translate(canvas.width / 2 + translateX, canvas.height / 2 + translateY);
        crc2.rotate((rotateDeg * Math.PI) / 180);
        crc2.scale(scale, scale);
        crc2.fillStyle = "#000000ff";
        crc2.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        drawCoordinateSystem();
    }
    Canvas.applyTransformation = applyTransformation;
})(Canvas || (Canvas = {}));
