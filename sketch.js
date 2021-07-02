
const Engine = Matter.Engine;
const   World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisions = [];
var divisionsHeight = 300;
var paricles = [];
var plinkos = [];

{

}



function setup() {
  createCanvas(800,700);
engine = Engine.create();
world = engine.world;

// create the Bodies Here.
ground = new Ground(400,690,800,20);


for(var i = 0; i<=innerWidth;mi= i+80){
  divisions.push(new Division(i,height-divisonsheight/2, 10, divisonsHeight));
}

for(var j=75; j<Width;j = j+50){
  plinkos.push(new Plinko(j,75));
}
for(var j=50; j<Width-10;j = j+50){
  plinkos.push(new Plinko(j,175));
}
for(var j=75; j<Width;j = j+50){
  plinkos.push(new Plinko(j,275));
}
for(var j=50; j<Width-10;j = j+50){
  plinkos.push(new Plinko(j,375));
}


// for()

Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);  

  drawSprites();



for(var n = 0;n,divisions.lenght;n++){
  divisons[n].display();
}

if (frameCount %60 === 0){
  particles.push(new particles(random(width/2-30, width/2+30),10,10));
}

for (var h = 0 ;h <particles.lenght; h++){
 particles[h].display();
}

for (var j = 0 ;h <plinkos.lenght; j++){
  plinkos[j].display();
 }


ground.display();



}



