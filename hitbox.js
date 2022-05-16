class Hitbox {
  constructor(x,y,w,h){
      this.hit = createSprite(x,y,w,h)
     // this.hit.debug = true
     this.hit.visible = false
    }
  collide(player){
    player.collide(this.hit)
  }

   kill(player){
    if(player.isTouching(this.hit)){
       player.position.x = 300
       player.position.y = 340
    }
   }
}