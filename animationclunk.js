let x, y;


function setup() {
  createCanvas(720, 400);
  graphics = createGraphics(600, 400);

  x = width / 2;
  y = height;
  background(0); 
  
}

function preload(){
    clunk = loadImage('clunk.png');
    ocean = loadImage('background.png');
}

function draw(){
    // background(0); 
    backgroundimage(); 
    animation(); 
} 
function animation() { 
image(clunk,x, y, 24, 24);

  x = x + random(-1, 1);
  y = y - 1;
  if (y < 0) {
    y = height;
  }
}

function backgroundimage(){
    image(ocean,0,0); 
}