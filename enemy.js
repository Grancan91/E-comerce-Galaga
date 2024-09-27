class Enemy{
  constructor(){
    this.height = 50
    this.width = 50
    this.y = 0
    this.x = Math.floor(Math.random() * (600 - this.width))
    this.directionY = 1
    this.speed = 10
    this.sprite = document.createElement('div')
    this.interval = setInterval(this.move.bind(this), 100)
  }

  insert(){
    this.sprite.setAttribute('class', 'enemy')
    this.sprite.style.width = this.width  + 'px'
    this.sprite.style.height = this.height  + 'px'
    this.sprite.style.top = this.y + 'px'
    this.sprite.style.left = this.x  + 'px'
    playField.appendChild(this.sprite)
  }

  remove(){
    playField.removeChild(this.sprite)
    clearInterval(this.interval)
  }

  move(){
    let newY = this.y + this.speed * this.directionY
    this.checkCollision()
    if( newY >= 0 && newY <= 700 - this.height){
      this.y = newY
      this.sprite.style.top = this.y + 'px'
    } else {
      this.remove()
    }
  }

  checkCollision(){
    if ( this.x < player.x + player.width &&
      this.y < player.y + player.height &&
      this.x + this.width > player.x &&
      this.y + this.height > player.y) {
      this.remove()
      player.remove()
      }
  }


}