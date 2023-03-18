var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){

path=loadAnimation("path.png")

jake1=loadAnimation("jake1.png");

jake2=loadAnimation("jake2.png");

jake3=loadAnimation("jake3.png");

jake4=loadAnimation("jake4.png");

jake5=loadAnimation("jake5.png");




 
}

function setup(){
  
  createCanvas(400,400);

  jake1= createSprite(50,180,20,50);
  jake1.addAnimation("running",jake1_running)

  jake2= createSprite(50,180,20,50);
  jake2.addAnimation("running",jake2_running)

  jake3= createSprite(50,180,20,50);
  jake3.addAnimation("running",jake3_running)

  jake4= createSprite(50,180,20,50);
  jake4.addAnimation("running",jake4_running)

  jake5= createSprite(50,180,20,50);
  jake5.addAnimation("running",jake5_running)

  sprite.path("camino");
  
 //crear sprite de path (camino) 
//agregar imagen de path
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.scale=1.2;

//crear sprite de boy (niño)
//agregar animación para boy
boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
