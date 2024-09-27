let playField = document.getElementById('playfield')

let player
let enemy
let movePlayerInterval

function startGame() {

  newPlayer()
  newEnemy()


}


function newPlayer() {
  player = new Player(275, 650)
  player.insert()

  //movePlayerInterval = setInterval(player.move, 50, player)
  movePlayerInterval = setInterval(function(){
    player.move()
  }, 50)

}

function newEnemy() {

  enemy = new Enemy()
  enemy.insert()



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