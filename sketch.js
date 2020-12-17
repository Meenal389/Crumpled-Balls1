
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var myworld;
var myEngine;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	myEngine=Engine.create();
  myworld=myEngine.world;

	//Create the Bodies Here.

  var ground_option={
    isStatic:true
  }
  ground=Bodies.rectangle(500,495,1000,10,ground_option);
  World.add(myworld,ground)

    waste= new Paper(100,350,20);
    d1= new Dustbin(800,430,20,150);
    d2=new Dustbin(750,485,100,20);
    d3=new Dustbin(700,430,20,150);
    
  Engine.run(myEngine);
  
  keyPressed()
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  waste.display();
  d1.display();
  d2.display();
  d3.display();
  fill("brown");
  rect(ground.position.x,ground.position.y,1000,10);
  drawSprites();
}

  function keyPressed(){
    if(keyCode===UP_ARROW){
      Matter.Body.applyForce(waste.body,waste.body.position,{x:65,y:-75});
    }
  }




