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
      enemies.shift()
      this.remove()
    }
  }

  checkCollision(){
    enemies.forEach(function(enemy, index){
      if ( enemy.x < player.x + player.width &&
        enemy.y < player.y + player.height &&
        enemy.x + enemy.width > player.x &&
        enemy.y + enemy.height > player.y) {
        enemy.remove()
        enemies.splice(index, 1)
        player.lives -= 1
        }
    })
  }


}