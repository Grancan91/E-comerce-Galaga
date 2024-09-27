class Player{
  constructor(x, y){
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.directionX = 0
    this.speed = 10
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

}

