const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var world, engine, ground
var bg
var box1,box2,box3,box4,box5,box6,box7,box8,box9 
var monster,superhero,rope

function preload() {
bg = loadImage("GamingBackground.png")


}

function setup() {
  createCanvas(3000, 800);
  engine =Engine.create();
  world = engine.world;
  ground = new Ground(1000,500,500,20)
  ground1 = new Ground(1350,500,200,10)
  box1 = new Box(1000,450,100,100)
  box2 = new Box(1100,450,100,100)
  box3 = new Box(1200,450,100,100)
  box4 = new Box(900,450,100,100)
  box5 = new Box(800,450,100,100)
  box6 = new Box(1000,350,100,100)
  box7 = new Box(1100,350,100,100)
  box8 = new Box(900,350,100,100)
  box9 = new Box(1000,250,100,100)
  monster = new Monster(1350,450,100,100)
  superhero = new Superhero(400,400)
  rope = new Rope(superhero.body,{x : 550, y : 100})
}

function draw() {
  background(bg);
  Engine.update(engine)
  ground.display()
  ground1.display()
  monster.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  superhero.display()
   
}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x : mouseX, y : mouseY})
}