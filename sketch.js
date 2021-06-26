const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
// var Engine = Matter.Engine,
//   World = Matter.World,
//   Events = Matter.Events,
//   Bodies = Matter.Bodies;
var snowflakes = [];
var engine, world;
var snow
var pokemon
var pokemon1
function preload(){
  bgImg = loadImage("snow1.jpg");
  pokemon1 = loadImage("Charizard.png");
}

function setup() {
  createCanvas(1200,600);
 // createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,10000,20);
  snow = new Snowflake(300,0,12)
  pokemon=createSprite(600,300, 100, 100)
  pokemon.addImage(pokemon1);
 
}

function draw() {
  background(bgImg); 

  Engine.update(engine);


  if(frameCount%1===0){
    snowflakes.push(new Snowflake(random(10,1190), 20, 12 ))
  }

  for(var i = 0; i < snowflakes.length; i++){
    snowflakes[i].display();
  }
  if (keyDown(LEFT_ARROW)) {
    pokemon.x = pokemon.x-6
}
else if (keyDown(RIGHT_ARROW)) {
  pokemon.x = pokemon.x+6
}
else if (keyDown(UP_ARROW)) {
  pokemon.y= pokemon.y-6
}
else if (keyDown(DOWN_ARROW)) {
  pokemon.y = pokemon.y+6
}

// for(var i = 0; i < snowflakes.length; i++){
//   if(snowflakes[i].isT){

//   }
// }
  ground.display();
  pokemon.display();
  fill(0);
  stroke("white");
  textSize(25);
  text("Use arrow keys to move Character",40,40);
  //drawSprites();
}

