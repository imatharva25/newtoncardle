
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball=new Ball(100,200);
	ball2=new Ball(151,200);
	ball3=new Ball(202,200);
	ball4=new Ball(303,200);
	ball5=new Ball(404,200);

	chain=new Chain(ball.body,{x:200,y:50});
	chain2=new Chain(ball2.body,{x:250,y:50});
	chain3=new Chain(ball3.body,{x:300,y:50});
	chain4=new Chain(ball4.body,{x:350,y:50});
	chain5=new Chain(ball5.body,{x:400,y:50});

	
	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  
chain.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();

ball.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
  drawSprites();
 
}



