var f1,m1;
var car,wall;

function setup() {
  createCanvas(1200,800);
  f1=createSprite(400, 100, 50, 80);
  f1.shapeColor='pink';
  f1.debug=true;

   m1=createSprite(400,700,80,50);
  m1.shapeColor='orange';
  m1.debug=true; 
  m1.velocityY=-5;
  f1.velocityY=5;

  car = createSprite(100,500,50,50);
  car.shapeColor = "blue";
  car.velocityX = 4;

  wall = createSprite(1000,500,50,100);
  wall.shapeColor = "yellow";

}

function draw() {
  background(0); 
  bounceOff(car,wall);
  drawSprites();
}