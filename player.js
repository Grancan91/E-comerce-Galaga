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
}