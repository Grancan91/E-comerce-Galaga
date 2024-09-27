let playField = document.getElementById('playfield')
let buttonStart = document.getElementById('btn-start')
let startView = document.getElementById('start')
let restartView = document.getElementById('restart')
let score = document.getElementById('score')

let player
let enemy
let bullet
let enemies = []
let movePlayerInterval
let enemiesSpawnInterval

function startGame() {

  newPlayer()
  newEnemy()

}

function gameRuning(){
  if(player.lives > 0){
    player.move()
  } else {
    endGame()
  }
}


function newPlayer() {
  player = new Player(275, 600)
  player.insert()

  //movePlayerInterval = setInterval(player.move, 50, player)
  movePlayerInterval = setInterval(function(){
    gameRuning()
  }, 10)

}

function newEnemy() {
  enemiesSpawnInterval = setInterval(function(){
    enemy = new Enemy()
    enemy.insert()
    enemies.push(enemy)
  }, 1000)

}

function spawnBullets(){
  bullet = new Bullet()
  bullet.insert()
}

function endGame(){
  clearInterval(enemiesSpawnInterval)
  clearInterval(movePlayerInterval)
  player.remove()
  enemies.forEach(function(enemy){
    enemy.remove()
  })

  playField.style.display = 'none'
  restart.style.display = 'block'

}

window.addEventListener('keydown', function (event) {

  switch (event.key.toLowerCase()) {
    case 'a':
      player.directionX = -1
      // player.move()
      break;

    case 'd':
      player.directionX = 1
      // player.move()
      break;

    case ' ':
      spawnBullets()
      break;
  }

})

window.addEventListener('keyup', function (event) {
  player.directionX = 0
})

buttonStart.addEventListener('click', function(event){
  startGame()
  playField.style.display = 'block'
  startView.style.display = 'none'

})

