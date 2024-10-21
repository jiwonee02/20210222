let jj;

function preload(){
  jj = loadImage("jj.png");
}

function setup() {
  createCanvas(jj.width,jj.height);
}

function draw() {
  image(jj, 0, 0);
}