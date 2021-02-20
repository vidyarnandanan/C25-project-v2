
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var ball1
var box1,box2,box3
function preload()
{
	dustbinimg=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground=new Ground(400,680,800,10)
	ball1=new ball(100,400,20)
	box1=new box(600,625,10,100)
	box2=new box(650,625,10,100)
	box3=new box(625,670,100,10)

}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display()
  ball1.display()
  box1.display()
  box2.display()
  box3.display()
  image(dustbinimg,625,600,150,150)
  drawSprites();
 
}
function keyPressed(){
if (keyDown(UP_ARROW)){
	Matter.Body.applyForce(ball1.body, ball1.body.position, {x:50,y:-50})

}



}


