
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground, paper1, dust1;
var world;


function setup() {
	createCanvas(1600,700);

	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,620,width,20);

	//paper1 = new Paper(200,200,20);
	paper1 = new Paper(200,450,70);

	dust1 = new dustbin(1200,650);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

 /* paper1.body.position.x = mouseX;
  paper1.body.position.y = mouseY;*/

 
  paper1.display();
  ground.display();
  dust1.display();
  
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:65,y:-65});
	}
}



