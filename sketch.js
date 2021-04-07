
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var d1
var paperObj;
var p1;
function preload(){

}



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

  

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,550);
	paperObj=new paper(300,550,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  groundObject.display();
  dustbinObj.display();
  paperObj.display()

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:80,y:-95}); }
	}
	

