var monkey , monkeyrunning;
var banana ,bananaimage;
var  obstacle, obstacleimage;
var foodgroup, obstaclegroup;

var score

function preload(){
  
  
  monkeyrunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaimage = loadImage("banana.png");
  obstaceimage = loadImage("obstacle.png");
 
}



function setup() {

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkeyrunning);
   monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-5;
  ground.x=ground.width/2;
  //console.log(ground.x)

  foodgroup = new Group();
  obstaclesgroup = new Group();

   var survivalTime=0;
  
 }


function draw() {
  
  background("white");
   
  if(ground.x<0) {
   ground.x=ground.width/2;
   }
   
  if(keyDown("space") ) {
     monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);
  
    spawnfood();
    spawnobstacles();
 
  drawSprites();
  
  
  if(obstaclesgroup.isTouching(monkey)){
    
    ground.velocityX = 0;
    monkey.velocityY = 0;
    
    obstaclesgroup.setVelocityXEach(0);
    obstaclesgroup.setLifetimeEach(-1);
    
    foodgroup.setVelocityXEach(0); 
    foodgroup.setLifetimeEach(-1);
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
}



function spawnfood() {
  
  if (frameCount % 80 === 0) {
    
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -6;
    
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
     banana.addImage(bananaimage);
     banana.scale=0.07;
    
    foodgroup.add(banana);
   }
  
}

function spawnobstacles() {
  
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
     
    obstacle.addImage(obstaceimage);
    obstacle.scale=0.13;
         
    obstacle.lifetime = 300;
    
    obstaclesgroup.add(obstacle);
    }
  
}
