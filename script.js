let dvdImage, x, y, xVelocity, yVelocity, imageWidth, imageHeight, masterVelocity;

function setup(){
  createCanvas(500, 600);
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  x = 50;
  y = 50;
  
  masterVelocity = 3;
  xVelocity =  masterVelocity;
  yVelocity = masterVelocity;
  imageWidth = 200;
  imageHeight = 150;
}

function draw(){
  background(220);
  
  if (x > width - imageWidth) {
    // If the DVD is too far to the right, move left
    xVelocity = -masterVelocity
  } else if (x < 0) {
    // If the DVD is too far to the left, move right
    xVelocity = 3
  }
  x += xVelocity
  
  if (y > height - imageHeight) {
    // If the DVD is too far down, move up
    yVelocity = -3
  } else if (y < 0) {
    // If the DVD is too far up, move down
    yVelocity = 3
  }
  y += yVelocity
  
  // Draw the logo at the new position.
  image(dvdImage, x, y, imageWidth, imageHeight);
}