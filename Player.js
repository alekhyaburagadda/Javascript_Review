class Player {
    constructor(){
      this.index=null;
      
    }
    
    car1=createSprite(100,200);
    car1= addImage("car1",car1Img);

  
    keyPressed(){
 if(keyIsDown(UP_ARROW) && player.index !== null){
car1.velocityY = -2;
}
if(keyIsDown(DOWN_ARROW) && player.index !== null){
car1.velocityY = 2;
 }
  if(keyIsDown(RIGHT_ARROW) && player.index !== null){
  car1.velocityX = 2;
 }
 if(keyIsDown(LEFT_ARROW) && player.index !== null){
  car1.velocityX = -2;
  }
    }

  play(){
if(allPlayers !== undefined){
  background(rgb(198,135,103));
  image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
   var index = 0;
    var x = 175 ;
    var y;
    for(var plr in car1){
index = index + 1 ;
y = displayHeight - allPlayers[plr].distance;
car1[index-1].x = x;
car1[index-1].y = y;
 }
}
 }
 drawSprites();
}

