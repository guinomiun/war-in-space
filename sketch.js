var aviao,aviaoImg, bala,balaImg,fundo,fundoImg,moeda,moedaImg,inimigo,inimigoImg, fuel,fuelImg,  bala2;
var balas =[];
var inimigos,balas, balas2;
var gameOver, gameOverImg;
var gameState = play,play = 1, end = 0;
function preload() {
  aviaoImg =  loadImage("aviao.png");
  balaImg = loadImage("bala.jpg");
  moedaImg =  loadImage("moeda.jpg");
  inimigoImg = loadImage("inimigo.png");
  fundoImg =  loadImage("fundo2.jpg");
  fuelImg = loadImage("fuel.png");
  gameOverImg =  loadImage("gameOver.png")
  }
function setup(){
  createCanvas(800,1000)

  
  aviao = createSprite(400,800,40,40);
  aviao.addImage("aviao",aviaoImg);
  aviao.scale = 0.3

  //fundo =  createSprite(400,100);
  fundo =  createSprite(width/2,height/2);
  fundo.addImage("fundo",fundoImg)
  fundo.scale =  2;
  fundo.depth=aviao.depth-1;
  fundo.velocityY =  2;
  inimigos =  new Group ()
  balas    =  new Group ()
  balas2   =  new Group ()
  gameOver = createSprite(width/2,height/2);
  gameOver.addImage(gameOverImg)
  gameOver.scale = 0.5;
  gameOver.visible = false;
}

function draw() {
background("blue")
image(fundoImg,0,0,800,1000)


if(keyIsDown(DOWN_ARROW)){
  aviao.y = aviao.y + 5;
  }
  if(keyIsDown(UP_ARROW)){
  aviao.y = aviao.y - 5;
  }
  if(keyIsDown(LEFT_ARROW)){
    aviao.x = aviao.x - 5;
    }
   if(keyIsDown(RIGHT_ARROW)){
      aviao.x = aviao.x + 5;
   }

 if(balas2.isTouching(aviao)){
  aviao.destroy()
  
  gameState =  end
  }

    

    if(fundo.y>=650){
    fundo.y = 350;
    
     
    
     
  }
  if(balas.isTouching(inimigos)){
    inimigos.destroyEach()
    }
  if(gameState == end){
   inimigos.setVelocityYEach(0)
    balas2.setVelocityYEach(0)
    fundo.velocityY =  0 
    balas2.destroyEach()
    inimigos.setLifetimeEach(-1)
    balas2.setLifetimeEach(-1)
    inimigos.destroyEach()

   gameOver.visible = true;
    
   
  }


createInimigo()
createBalas()

drawSprites();
}

function createBalas(){
if(keyDown("space") ){
  bala = createSprite(aviao.x,aviao.y,10,10);
  bala.addImage("bala", balaImg);
  bala.scale =  0.1; 
  bala.velocityY = -20;
  bala.lifetime =  height/bala.velocityY
  balas.add(bala)
}
}
function  createInimigo(){
  if(frameCount%120 === 0){
    inimigo = createSprite(random(80,750),150,100,100)
    inimigo.addImage ("inimigo",inimigoImg)
    inimigo.scale =  0.6;
    inimigo.velocityY = 10;
    inimigo.lifetime = height/inimigo.velocityY
    bala2 = createSprite(inimigo.x-45,inimigo.y,10,10);
    bala2.addImage("bala", balaImg);
    bala2.scale =  0.1; 
    bala2.velocityY = 20;
    bala2.lifetime =  height/bala2.velocityY
    inimigo.debug = false;
    inimigo.setCollider("rectangle",-65,0,20,100)
    inimigos.add(inimigo)
    balas2.add(bala2);
  }
}