
const canvDimx = 1200;  
const canvDimy = 700; 

let img_background;


var button_draw;
var button_erase;

let canvas;
let yellow = '#E8CD34';

let pencil = false;

let button_erase_x = 1000;
let button_erase_y = 700;

let button_draw_x = 1000;
let button_draw_y = 800;

let myImageArray1 = [];
let myImageArray2 = [];
let myImageArray3 = [];


let y3 = 1000; 
let y1= 398; 
let y2= 688;
let v = 50;



let timer = 6000;  
let timer_animation = 9000;
let timer_delta =14000;
let nextChange_animation = timer_animation; 
let nextChange = timer; 
 let timer_sound = 9000; 
 let nextChange_sound = timer_sound; 
let x = 10;
let y = 600;
let draw_sound;
let erase_sound; 


function preload() {

  img_background = loadImage('Images/background.png');
  clunk = loadImage('Images/Clunk.png');



  soundFormats('mp3', 'ogg');
   draw_sound = loadSound('sounds/plop_draw.mp3');
  erase_sound = loadSound('sounds/slide_erase.mp3');
  icon_sound = loadSound('sounds/bubble.mp3');
  clunkwalk = loadSound ( "Sounds/clunkwalk.mp3");

  for (let i = 1; i < 37; i++) {
    myImageArray1[i] = loadImage('Icons/Level1/Doodle' + i + '.png');
  }
  for (let i = 1; i < 100; i++) {
    myImageArray2[i] = loadImage('Icons/Level2/2_Doodle' + i + '.png');
  }
  for (let i = 1; i < 60; i++) {
    myImageArray3[i] = loadImage('Icons/Level3/3_Doodle' + i + '.png');
  }
  console.log(myImageArray1);
  console.log(myImageArray2)
}

function setup() {
  createCanvas(canvDimx, canvDimy);
  icons = createGraphics(canvDimx, canvDimy);
  canvas = createGraphics(canvDimx, canvDimy);

  button_draw = createImg('draw_default.png');
  button_draw.position(width+100, height-200);
  button_draw.size(60, 60);
  button_draw.mousePressed(changedraw);

  button_erase = createImg('erase_default.png');
  button_erase.position(width+100, height-100);
  button_erase.size(60, 60);
  button_erase.mousePressed(changeerase);
  clunk.resize(300,0);
  img_background.resize(width, height);
}


function draw() {

  image(img_background, 0, 0); 


  
  if (millis() > nextChange_animation && millis() < (nextChange_animation + timer_delta)) {
    animation();
  }
  if (millis() > nextChange_animation + timer_delta) {
    nextChange_animation = millis() + timer_animation + timer_delta;
    x = 10;
    y = 600;
  }
  
 
  
  if((millis() > nextChange_sound)){ 
   clunkwalk.play(); 
   nextChange_sound = millis() + timer_sound+(2*timer_delta); 
 }

  if ((millis() > nextChange) && pencil == true) {
    
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
  canvas.clear(); 
  pencil = false;
  erase_sound.play(); 
}

function mouseDragged() {
  //if (pencil == true) {
    sketch(); 
 // }
  



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

    image(clunk, x, y);
  
    x =x+ random(-1,3); 
    y = y - 1;
    
  }



