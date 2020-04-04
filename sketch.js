var canvas;

var obstacles;

var track;
var car1Img,trackImg, obstaclesImg; 
var lives=5;

function preload(){
  car1Img= loadImage("car1.png");
  trackImg= loadImage("track.jpg");
  obstaclesImg= loadImage("obstacles.png")
}


function setup(){
canvas = createCanvas(displayWidth - 20, displayHeight-30);
car1= new Player();
track= new Track();
}


function draw(){

  if(car1.collides(obstacles)){
    lives=lives-1;
  }
  if(lives===0){
    car1.end();
  }

}



 
