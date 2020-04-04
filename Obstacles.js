class Obstacles{
    constructor(x,y){
    }
    display(){
        if(World.frameCount% 100===0){
            var obstacles= createSprite(1000,500,50,50);
            obstacles= addImage("obstacles",obstaclesImg);
            obstacles.velocityY=2;
            track= addImage("track",trackImg);
        
        }
    }
}