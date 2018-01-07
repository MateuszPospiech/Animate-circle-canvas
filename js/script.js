var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth; //make <canvas> big as window width
canvas.height = window.innerHeight; //make <canvas> big as window Height

var c = canvas.getContext('2d'); //c - context (sometimes called "ctx") .getContext('2d') - drowing some 2d objects


//Animation circle

//Position
var x = 100;
var y = 200;

//Radius
var r = 80;

//Speed
var speedX = 10;
var speedY = 4;

function animateCircle() {

    requestAnimationFrame(animateCircle); //animate a lot of time (something like endless loop)
    c.clearRect(0, 0, innerWidth, innerHeight); //clear rect from 0, 0 to max width and height

    c.beginPath();
    c.arc(x, y, r, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();

    x += speedX;
    y += speedY;

    if ((x > innerWidth - r) || (x < 0 + r)) { //if position x in bigger then max width - radius of circle then  speedX*(-1) it means switch direction
        speedX = speedX * (-1);
        r = r / 1.5;
    }

    if ((y > innerHeight - r) || (y < 0 + r)) {
        speedY = speedY * (-1);
        r = r / 1.5;
    }
}

animateCircle();
