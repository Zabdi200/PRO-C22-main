const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, ground;

var backgroundimage;
var torreimg;
var torre;
var canon;
var canon1;
angle = 15;

function preload() {

    backgroundimage = loadImage("assets/background.gif");
    torreimg = loadImage("assets/tower.png");
}

function setup() {

    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    var options = {
        isStatic: true
    }

    ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
    World.add(world, ground);

    torre = Bodies.rectangle(160, 350, 160, 310, options);
    World.add(world, torre);
    canon1 = new Canon(180, 110, 130, 100, angle);
}

function draw() {

    image(backgroundimage, 0, 0, width, height);

    Engine.update(engine);
    rect(ground.position.x, ground.position.y, width * 2, 1);
    push();
    imageMode(CENTER);
    image(torreimg, torre.position.x, torre.position.y, 160, 310);
    pop();

    canon1.display();
}