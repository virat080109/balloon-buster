var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var select_balloon=1
var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //Uncomment correct option to get random number from 1 to 4 
   // select_balloon = Math.round(random(1,4));
   // select_balloon = random(1,4);
   // select_balloon = Math.round(random());
   // select_balloon = Math.round(random(1,4,2));
  
   if (World.frameCount % 100 == 0) {



           

}
    
  drawSprites();
  spawnredBalloon();
  spawnblueBalloon();
  spawngreenBalloon();
  spawnpinkBalloon();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  

}

function spawnredBalloon() {
  if(frameCount%60==0){
  var redBalloon = createSprite(10,170,10,10);
  redBalloon.x=Math.random  (round(10,60));
  redBalloon.addImage(red_balloonImage);
  redBalloon.scale = 0.1;
  redBalloon.velocityX = 3;
  redBalloon.lifetime = 100;
  
 
 

}
}
function spawnblueBalloon() {
  if(frameCount%60==0){
  var blueBalloon = createSprite(30,250,10,10);
  blueBalloon.x=Math.random(round(10,60));
  blueBalloon.addImage(blue_balloonImage);
  blueBalloon.scale = 0.1;
  blueBalloon.velocityX = 3;
  blueBalloon.lifetime = 100;
  
  
 

}
}
function spawngreenBalloon() {
if(frameCount%60==0){
  var greenballoon= createSprite(20,340,10,10);
 greenballoon.x=Math.random(round(10,60));
 greenballoon.addImage(green_balloonImage);
 greenballoon.scale = 0.1;
  greenballoon.velocityX = 3;
  greenballoon.lifetime = 100;
  
 


}
}
function spawnpinkBalloon() {
if(frameCount%60==0){
  var pinkBalloon = createSprite(5,50,10,10);
  pinkBalloon.x=Math.random(round(10,60));
  pinkBalloon.addImage(pink_balloonImage);
  pinkBalloon.scale = 1;
  pinkBalloon.velocityX = 3;
  pinkBalloon.lifetime = 100;
  
  


}
}