var bg,sleep,brush,gym,eat,drink,move,background,astronaut,bath,edges;

function preload(){
bg = loadImage("iss.png")
sleep = loadAnimation("sleep.png")
brush = loadAnimation("brush.png")
gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
eat = loadAnimation("eat1.png","eat2.png")
drink = loadAnimation("drink1.png","drink2.png")
move = loadAnimation("move.png","move1.png")
bath = loadAnimation("bath1.png","bath2.png")
}
function setup() {
  createCanvas(800,400);
  textSize(5);
  text("Instructions :",200,100);
  text("up arrow = brushing",200,90);
  text("Down arrow = Gyming",200,100);
  text("left arrow = Bathing",200,100);
  text("Right arrow = eating",200,100);
  text("M = Moving",200,100)
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale=0.1;
  
}

function draw() {
  
  background(bg);
  edges=createEdgeSprites(); 
  astronaut.bounceOff(edges);

  if (keyDown(UP_ARROW)){
    astronaut.addAnimation("Brushing",brush)
    astronaut.changeAnimation("Brushing")
    astronaut.y = 350;
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if (keyDown(DOWN_ARROW)){
    astronaut.addAnimation("Gyming",gym)
    astronaut.changeAnimation("Gyming")
    astronaut.y = 350;
    astronaut.velocityX = 0
    astronaut.velocityY = 0

  }
  if (keyDown(LEFT_ARROW)){
    astronaut.addAnimation("Bathing",bath)
    astronaut.changeAnimation("Bathing")
    astronaut.y = 350;
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if (keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("Eating",eat)
    astronaut.changeAnimation("Eating")
    astronaut.y = 350;
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if (keyDown("m")){
    astronaut.addAnimation("Moving",move)
    astronaut.changeAnimation("Moving")
    astronaut.velocityX = 1
    astronaut.velocityY = 1
  }

  drawSprites();
  
}