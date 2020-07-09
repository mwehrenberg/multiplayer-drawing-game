/* global createCanvas, colorMode, strokeWeight, background, rect, stroke, fill,
HSB, mouseX, mouseY */

/* this is a
multi-line comment */

// This is a single-line comment.

let brushHue

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  strokeWeight(6);
  background(95);
  prevX = 0;
  prevY = 0;
}

function draw() {
  //background(95);
  
  chooseColors();
  if (mouseIsPressed) {
    //rect(mouseX, mouseY, 15, 15);
    line(prevX, prevY, mouseX, mouseY);
  }
  prevX = mouseX
  prevY = mouseY
}

function chooseColors() {
  brushHue += 1
  if (brushHue >= 360) {
    brushHue = 0
  }
  stroke(brushHue, 50, 80);
  fill(brushHue, 50, 80);
}

function keyPressed() {
  background(95);
}

/*
function mousePressed() {
  // x, y, width, height
  ellipse(random(width), random(height), 30, 30);
}
*/