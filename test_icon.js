
let myImageArray1 = [];
let myImageArray2 = [];
let myImageArray3 = [];
let y3 = 1000; 
let y1= 398; 
let y2= 688;
let v = 50; 
let timer = 6000;  
let nextChange = timer; 

function preload() {
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
    console.log(myImageArray2);
}
function setup() {
    createCanvas(1600, 1200);
    background(255, 0, 0);
    icons = createGraphics(width, height);
}

function draw() {
    if(millis() > nextChange){
        iconsShow();
       nextChange = millis() + timer; 
     }
   
    image(icons, 20, 20);
}

function iconsShow() {
    
    if ( mouseY > 0 && mouseY < y1){
    icons.image(myImageArray1[int(random(1, 37))], random((mouseX-v), (mouseX+v)), random(0,y1));
    } 
    if ( mouseY > y1 && mouseY < y2){
        icons.image(myImageArray2[int(random(1, 100))], random((mouseX-v), (mouseX+v)), random(y1,y2));
        } 
        if ( mouseY > y2 && mouseY < y3){
            icons.image(myImageArray3[int(random(1, 60))], random((mouseX-v), (mouseX+v)), random(y2,y3));
            } 
}







