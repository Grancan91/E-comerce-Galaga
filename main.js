let playField = document.getElementById('playfield')

let player
let enemy
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
  player = new Player(275, 650)
  player.insert()

  //movePlayerInterval = setInterval(player.move, 50, player)
  movePlayerInterval = setInterval(function(){
    gameRuning()
  }, 50)

}

function newEnemy() {
  enemiesSpawnInterval = setInterval(function(){
    enemy = new Enemy()
    enemy.insert()
    enemies.push(enemy)
  }, 1000)

}

function endGame(){
  clearInterval(enemiesSpawnInterval)
  clearInterval(movePlayerInterval)
  player.remove()
  enemies.forEach(function(enemy){
    enemy.remove()
  })

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
  }

})

window.addEventListener('keyup', function (event) {
  player.directionX = 0
})

startGame()