class Bullet{
  constructor(){
    this.height = 30
    this.width = 100
    this.y = player.y - this.height
    this.x = player.x + player.width / 2 - this.width / 2
    this.directionY = -1
    this.speed = 20
    this.sprite = document.createElement('div')
    this.interval = setInterval(this.move.bind(this), 200)
  }

  insert(){
    this.sprite.setAttribute('class', 'bullet')
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
    this.checkCollision(this)
    if( newY >= 0 && newY <= 700 - this.height){
      this.y = newY
      this.sprite.style.top = this.y + 'px'
    } else {
      this.remove()
    }
  }

  checkCollision(self){
    enemies.forEach(function(enemy, index){
      if ( enemy.x < self.x + self.width &&
        enemy.y < self.y + self.height &&
        enemy.x + enemy.width > self.x &&
        enemy.y + enemy.height > self.y) {
        enemy.remove()
        enemies.splice(index, 1)
        player.score += 1
        self.remove()
        }
    })
  }
  

}