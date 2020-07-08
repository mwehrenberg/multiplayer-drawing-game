// We'll use variables for most of our colors in this code-along.
let backgroundColor, color1, color2, textColor, globalS, globalB;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  noStroke();

  // When used with only one argument, the color mode is greyscale.
  // 0 is black and 100 is white.
  backgroundColor = color(95);
  textColor = color(20);
  // When used with three arguments, the function takes, in this order:
  // HUE - 0 to 360 degrees on a color wheel - 0 is red, 120 is green and 240
  //       is blue.
  // SATURATION - 0 is no color (greyscale), and 100 is as bold as possible.
  // BRIGHTNESS - 0 is no light (black), and 100 is as bright as possible.
  // (c, 50, 100) will give pastels
  // (c, 100, 100) will give neons
  // (c, 100, 50) will give dark colors
  globalS = 80;
  globalB = 80;
  color1 = color(0, globalS, globalB);
  color2 = color(200, globalS, globalB);
}

function draw() {
  background(backgroundColor);
  // Call the drawCenterLine function here to run the three lines of code
  // contained in that function.
  drawCenterLine();


  // The red and blue circles:
  fill(color1);
  ellipse(width/4, height/2, 50);
  fill(color2);
  ellipse(300, height/2, 50);

  // The grey circle and the text:
  fill(textColor);
  ellipse(50, 50, 50);
  text("Flip the switch", 20, 20);
}

function drawCenterLine() {
  // This function will turn stroke on, draw the line, and then turn stroke
  // back off.
  // Remember a line segment in p5.js has four arguments: x1, y1, x2, y2
  stroke(textColor);
  // width = canvas width, height = canvas height
  line(width/2, 0, width/2, height);
  noStroke();
}