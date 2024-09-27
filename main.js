let playField = document.getElementById('playfield')

let player
let movePlayerInterval

function startGame() {
  player = new Player(275, 650)
  player.insert()

  movePlayerInterval = setInterval(function(){
    player.move()
  }, 50)

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
} )

startGame()