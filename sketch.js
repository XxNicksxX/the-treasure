var pular = false 
var fundo 
var box
var player,playerimg,playerrun
function preload(){
  
fundo=loadImage("ala.gif.gif")
playerimg=loadImage("eu.gif")
playerrun=loadImage("eurun.gif")

}

function setup() {
	createCanvas(1708,779);
    
    player=createSprite(300,340,20,20)
    player.addImage("parado",playerimg)
    player.addImage("run",playerrun)
    player.setCollider("rectangle",0,0,300,400)
    player.scale= 0.25
	//Crie os Corpos aqui.
   box = new Hitbox(200,400,390,30)
   box1 = new Hitbox(350,750,450,30)
   box2 = new Hitbox(250,750,20,730)
   box3 = new Hitbox(870,500,650,10)
   box4 = new Hitbox(870,680,220,30)
   box5 = new Hitbox(550,650,120,30)
   box6 = new Hitbox(1160,630,110,30)
   boxdeath = new Hitbox(1450,750,520,30)
   box8 = new Hitbox(1510,430,420,30)
   box9 = new Hitbox(1230,230,320,30)
  player.mirrorX(-1)
}


function draw() {
background("black");
  image(fundo,0,0,1760,800)
  box.collide(player)
  box1.collide(player)
  box2.collide(player)
  box3.collide(player)
  box4.collide(player)
  box5.collide(player)
  box6.collide(player)
  boxdeath.kill(player)
  box8.collide(player)
  box9.collide(player)
 
  controls()
  drawSprites();
  //camera.x= player.x 
  //camera.y= player.y
}
  function controls(){
     player.velocityY += 1
    
      //IMPORTANTE USAR !!!
    
     if(keyDown("space")&&pular===false){
      player.velocityY = -18
      pular = true
      setTimeout(()=>{
        pular = false
      },1500)
     }
     

   
   
     if(keyDown("D")){
      player.changeImage("run")
      player.x += 10 
      player.mirrorX(-1)
    }
    
    else if(keyDown("A")){
      player.changeImage("run")
      player.x -= 10 
      player.mirrorX(+1)
    }
     else {
       player.changeImage("parado")
     }
  }


