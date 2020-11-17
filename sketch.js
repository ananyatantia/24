
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,bin1,bin2,bin3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  bin1 = createSprite(700,600,10,100)  
	bin2 = createSprite(600,600,10,100)  
	bin1 = createSprite(650,650,100,10)  
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,600,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  drawSprites();
 
  if(keyDown(DOWN_ARROW)){
	  Paper.isStatic(false)
  }
}



