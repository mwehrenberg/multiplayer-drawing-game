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
}

function draw() {
  //background(95);
  chooseColors();
  rect(mouseX, mouseY, 15, 15);
}

function chooseColors() {
  stroke(brushHue, 50, 80);
  fill(brushHue, 50, 80);
}