
function preload(){
chicken_run=loadAnimation("img chik/chicken1.png","img chik/chicken2.png","img chik/chicken3.png","img chik/chicken4.png",
"img chik/chicken5.png","img chik/chicken6.png","img chik/chicken7.png")

chicken_standing=loadAnimation("img chik/chickenStanding.png")
}

function setup() {
  createCanvas(1200,600);

//chicken 🐥
c1=createSprite(40,467,30,30)

//standing 
c1.addAnimation("standing",chicken_standing)
}

function draw() {
  background("white");  
 text(mouseX+","+mouseY,mouseX,mouseY)
 //p=platform
 p1=createSprite(100,565,200,70)
 p2=createSprite(450,565,200,70)
 p3=createSprite(800,565,200,70)
 p4=createSprite(1150,565,200,70)
 
 //l=lava
 l1=createSprite(275,580,150,70)
 l1.shapeColor="#FC6A03"
 l2=createSprite(625,580,150,70)
l2.shapeColor="#FC6A03"
l3=createSprite(975,580,150,70)
l3.shapeColor="#FC6A03"

if(keyWentDown("Right_Arrow")){




}





 drawSprites();
}

function keyPresed(){
if(keyCord===39){
  
c1.changeAnimation("runing",chicken_run)
}

}
