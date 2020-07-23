/* global line, pmouseX, pmouseY, mouseIsPressed, keyCode, UP_ARROW, createCanvas, colorMode, HSB, strokeWeight, background, rect, mouseX,
mouseY, stroke, fill */

let brushHue;
var socket;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  strokeWeight(6);

  socket = io.connect('http://localhost:5000');
}

function draw() {
  brushHue = chooseColors();
  
  //data to send to server/socket
  var data = {
    color: brushHue,
    px: pmouseX, 
    py: pmouseY,
    x: mouseX, 
    y: mouseY
  }
  //receive data from sockets constantly
  socket.on('draw', newDrawing);

  if (mouseIsPressed) {
    stroke(brushHue, 50, 80);
    fill(brushHue, 50, 80);
    line(pmouseX, pmouseY, mouseX, mouseY);
    console.log('Sending data');
    socket.emit('draw', data);
  }
}

function chooseColors() {
  brushHue = (brushHue + 1) % 360;
  //brushHue = random(360);
  return brushHue;
}

function keyPressed() {
  if (keyCode == 32 || keyCode == UP_ARROW) {
    background(95);
  }
}

function newDrawing(data){
  stroke(data.color, 50, 80);
  fill(data.color, 50, 80);
  line(data.px, data.py, data.x, data.y);
}
