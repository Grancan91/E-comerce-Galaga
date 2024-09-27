class Player{
  constructor(x, y){
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.directionX = 0  // -1 = Izquierda   1 = Derecha
    this.speed = 20
    this.sprite = document.createElement('div')
  }

  insert(){
    this.sprite.setAttribute('id', 'player')
    this.sprite.style.width = this.width  + 'px'
    this.sprite.style.height = this.height  + 'px'
    this.sprite.style.top = this.y + 'px'
    this.sprite.style.left = this.x  + 'px'
    playField.appendChild(this.sprite)
  }

  remove(){
    playField.removeChild(this.sprite)
    clearInterval(movePlayerInterval)
  }

  move(){
  let newX = this.x + this.speed * this.directionX

  if( newX >= 0 && newX <= 600 - this.width){
    this.x = newX
    this.sprite.style.left = this.x + 'px'
  }
  }

 

}

