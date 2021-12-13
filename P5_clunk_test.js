let img;
var button_draw;
var button_erase;
let canvas;
let yellow = '#E8CD34';
let pencil = false;
let button_erase_x = 1000;
let button_erase_y = 700;
let imagesize = 50;
let button_draw_x = 1000;
let button_draw_y = 800;
let myImageArray1 = [];
let myImageArray2 = [];
let myImageArray3 = [];
let y3 = 1000;
let y1 = 398;
let y2 = 688;
let v = 50;
let timer = 6000;
let timer_animation = 20000;
let timer_delta = 12000;
let nextChange_animation = timer_animation;
let nextChange = timer;
let x = 600;
let y = 900;
let draw_sound;


function preload() {
  img = loadImage('/images/background.png');
  clunk = loadImage('/images/clunk.png');
  soundFormats('wav', 'ogg');
  draw_sound = loadSound('sounds/plop_draw.wav');
  erase_sound = loadSound('sounds/plop_erase.wav');
  icon_sound = loadSound('sounds/bubble.wav');

  for (let i = 1; i < 37; i++) {
    myImageArray1[i] = loadImage('icons/Level1/Doodle' + i + '.png');
  }
  for (let i = 1; i < 100; i++) {
    myImageArray2[i] = loadImage('ccons/Level2/2_Doodle' + i + '.png');
  }
  for (let i = 1; i < 60; i++) {
    myImageArray3[i] = loadImage('icons/Level3/3_Doodle' + i + '.png');
  }
  console.log(myImageArray1);
  console.log(myImageArray2)
}

function setup() {
  createCanvas(1200, 900);
  icons = createGraphics(width, height);
  canvas = createGraphics(width, height);

  button_draw = createImg('draw_default.png');
  button_draw.position(button_draw_x, button_draw_y);
  button_draw.size(60, 60);
  button_draw.mousePressed(changedraw);

  button_erase = createImg('erase_default.png');
  button_erase.position(button_erase_x, button_erase_y);
  button_erase.size(60, 60);
  button_erase.mousePressed(changeerase);
  clunk.resize(200, 400);
}


function draw() {
  image(img, 0, 0);
  if (millis() > nextChange_animation && millis() < (nextChange_animation + timer_delta)) {
    animation();
  }
  if (millis() > nextChange_animation + timer_delta) {
    nextChange_animation = millis() + timer_animation + timer_delta;
    x = 600;
    y = 900;
  }

  if ((millis() > nextChange) && pencil == true) {
    animation();
    iconsShow();
    nextChange = millis() + timer;
  }

  image(icons, 20, 20);
  image(canvas, 30, 30);

}

function changedraw() {
  pencil = true;
  draw_sound.play();
}
function changeerase() {
  eraseFunction();
  pencil = false;
}

function mouseDragged() {
  if (pencil == false) {


    eraseFunction();
  }
  else {
    sketch();
  }



  console.log(pencil);

}

function sketch() {
  canvas.stroke(yellow);
  canvas.line(pmouseX, pmouseY, mouseX, mouseY);

}

function eraseFunction() {
  canvas.clear();
  // canvas.loadPixels();
  // let d = canvas.pixelDensity();
  // for (let x = 0; x < canvas.width*d; x++) {
  //   for (let y = 0; y < canvas.height*d; y++) {
  //     let distance = dist(x, y, mouseX, mouseY);
  //     if (distance <= 25) {
  //       let loc = x + y * canvas.width;
  //       canvas.pixels[loc] = red(pink);
  //       canvas.pixels[loc + 1] = green(pink);
  //       canvas.pixels[loc + 2] = blue(pink);
  //       canvas.pixels[loc + 3] = alpha(pink);


  //     }
  //   }
  // }
  // canvas.updatePixels();

}

function iconsShow() {

  if (mouseY > 0 && mouseY < y1) {
    icons.image(myImageArray1[int(random(1, 37))], random((mouseX - v), (mouseX + v)), random(0, y1));
  }
  if (mouseY > y1 && mouseY < y2) {
    icons.image(myImageArray2[int(random(1, 100))], random((mouseX - v), (mouseX + v)), random(y1, y2));
  }
  if (mouseY > y2 && mouseY < y3) {
    icons.image(myImageArray3[int(random(1, 60))], random((mouseX - v), (mouseX + v)), random(y2, y3));
  }
  icon_sound.play();
}



function animation() {

  image(clunk, x, y, 50, 50);

  x = x + random(-1, 1);
  y = y - 1;
  if (y < 0) {
    y = height;

  }
}


