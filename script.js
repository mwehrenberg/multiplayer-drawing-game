let dvdImage;

function setup(){
  createCanvas(800, 600);
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  x = 50;
  y = 50;
  xVelocity = 3;
  yVelocity = 3;
}

function draw(){
  background(220);
  
  if (x > 600) {
    // If the DVD is too far to the right, move left
    xVelocity = -3
  } else if (x < 0) {
    // If the DVD is too far to the left, move right
    xVelocity = 3
  }
  x += xVelocity
  
  if () {
    // If the DVD is too far down, move up
  } else if () {
    // If the DVD is too far up, move down
  }
  y += yVelocity
  
  // Draw the logo at the new position.
  image(dvdImage, x, 50, 200, 150);
}