
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paper,ground	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	wall1=new Box(1300, 610, 20, 100);
	wall2=new Box(1565, 610, 20, 100);
	wall3= new Box(1430, 650, 260, 20);
	paper=new Paper(200,450,20);
	ground=new Ground(width/2,670,width,20);

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  wall1.display();
  wall2.display();
  wall3.display();
  paper.display();
  ground.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paper.body,paper.body.position,{x:81,y:-100});
  	}
}







