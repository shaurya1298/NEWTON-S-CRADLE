const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var Ball;
var Ball2;
var rope1;
var rope2;
var con;
var con1;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		restitution:  0.8
			
	}


	

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var ball_options={

		isStatic:true
	  }
	  ball=Bodies.circle(350,300,20,ball_options);
	  World.add(world,ball)

	   ball2_options={

		isStatic:true
	  }
	  ball2=Bodies.circle(390,300,20,ball2_options);
	  World.add(world,ball2)

	  rope=new rope(ball,roof,-80,0)
	   
	  con1_options={
		pointA:{x:200,y:20},
		bodyB:ball,
		lenght:10,
		stiffness:0.8
	  }
	  con1=Matter.Constraint.create(con1_options)
	  World.add(world,con1)
	



	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  

  
  //create ellipse shape for multiple bobs here
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);

  ellipseMode(RADIUS)
  ellipse(ball2.position.x,ball2.position.y,20,20);
  Engine.update(engine);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
