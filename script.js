let dvdImage;

function setup(){
  createCanvas(800, 600);
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  x = 50;
  
  x += 5;
  
  x += 1;
  x++;
}

function draw(){
  background(220);
  // Draw the logo at the new position.
  image(dvdImage, x, 50, 200, 150);
}