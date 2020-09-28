const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var box1;
var pig1;
var log1;




function setup() {
  createCanvas(1200,400);
 engine = Engine.create();
 world = engine.world;
box1 = new box(700,320,70,70);
box2 = new box(920,320,70,70);
ground = new ground(600,height,1200,20);
pig1 = new pig(810,350);
log1 = new log(810,260,300,PI/6);
box3 = new box (700,240,70,70);
box4 = new box (920,240,70,70);
pig2 = new pig (810,220);
log2 = new log(810,180,300,PI/6);
log3 = new log(760,120,150,PI/7);
log4 = new log(870,120,150,-PI/7);
bird = new bird(100,100);


}
function draw() {
  background("yellow");
  Engine.update(engine); 
  box1.display();
box2.display();
ground.display();
pig1.display();
log1.display();
box3.display();
box4.display();
pig2.display();
log2.display();
log3.display();
log4.display();
bird.display();
}
