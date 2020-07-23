/* global line, pmouseX, pmouseY, mouseIsPressed, keyCode, UP_ARROW, createCanvas, colorMode, HSB, strokeWeight, background, rect, mouseX,
mouseY, stroke, fill */

let brushHue

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  strokeWeight(6);
}

function draw() {
  chooseColors();
  //rect(mouseX, mouseY, 15, 15);
  
  if (mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function chooseColors() {
  brushHue = (brushHue+1)%360;
  stroke(brushHue, 50, 80);
  fill(brushHue, 50, 80);
}

function keyPressed(){
  if (keyCode == 32 || keyCode == UP_ARROW){
    background(95);
  }
}