let dvdImage;

function setup(){
  createCanvas(800, 600);
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  x = 50;
  xVelocity = 3;
}

function draw(){
  background(220);
  
  if (x == 50) {
    
  }
  if (x == 75) {
    
  }
  
  
  if (x < 600) {
      x += xVelocity
  } else if (x > 600) {
    
  } else {
    
  }
  
  // Draw the logo at the new position.
  image(dvdImage, x, 50, 200, 150);
}