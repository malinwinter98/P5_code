//canvas dimensions
const canvDimx = 1600;
const canvDimy = 1200; 

//input boxes
var inputun, inputpass;

//button
var loginButton;

//messages
var creatorLogin, UwULogin, loginM, wrong;
function preload(){
login_background= loadImage('loginscreen.png');
}
function setup() {
  createCanvas(canvDimx, canvDimy);
  imageMode(CENTER);
  image(login_background,width/2,height/2); 
  
  inputun = createInput('Username');
  inputun.size(300,50);  
  inputun.position(canvDimx * 1/2 - inputun.width / 2, canvDimy * 1/2 - inputun.height / 2);
  inputun.input(myInputEvent);
  
 
  

  inputpass = createInput('Password');
  inputpass.size(300,50); 
 
  inputpass.position(canvDimx * 1/2 - inputpass.width / 2, canvDimy * 3/5 - inputpass.height / 2);
  
  
 
  loginButton = createImg('login1.png');
  loginButton.size(300,60); 
  loginButton.position(canvDimx * 1/2 - loginButton.width / 2, canvDimy * 4/6 - loginButton.height / 2);
  loginButton.mousePressed(login);
}

function draw() {
  textAlign(CENTER, CENTER);
  textSize(32);
  noStroke();
  fill(255,0,0);
}

function login() {

        window.location.replace("/reflectionpanel.html"); 
    
}
function myInputEvent() {
    
    console.log('you are typing: ', this.value());
  
  }

