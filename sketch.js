var FixedRect , MovingRect;

function setup() {
  createCanvas(1200,800);
  //createSprite(400, 200, 50, 50);
  FixedRect = createSprite(600,400,50,80);
  MovingRect = createSprite(400,200,80,50);
  ball = createSprite(200,100,50,50);
  car = createSprite(100,100,50,50);
  plane = createSprite(300,100,50,50);
  plane.velocityX = 5;
  train = createSprite(800,100,50,50);
  train.velocityX = -5;
  FixedRect.shapeColor = "green";
  MovingRect.shapeColor = "green";
  ball.shapeColor = "yellow";
  car.shapeColor = "orange";
  plane.shapeColor = "black";
  train.shapeColor = "pink";

}

function draw() {
  background(255,255,255);
  MovingRect.x = World.mouseX ;
  MovingRect.y = World.mouseY ;

  bounceoff(plane,train);

  drawSprites();
}

function bounceoff (object1,object2){
  if(object1.x - object2.x   <= object2.width/2 + object1.width/2 
    && object2.x - object1.x <= object1.width/2 + object2.width/2)
    {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
    if( object1.y - object2.y <= object2.height/2 + object1.height/2
    && object2.y - object1.y <= object1.height/2 + object2.height/2 )
    {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
   }
}
