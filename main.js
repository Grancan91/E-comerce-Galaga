let playField = document.getElementById('playfield')

let player

function startGame() {
  player = new Player(275, 650)
  player.insert()

}

window.addEventListener('keydown', function (event) {

  switch (event.key.toLowerCase()) {
    case 'a':
      player.directionX = -1
      player.move()
      break;

    case 'd':
      player.directionX = 1
      player.move()
      break;
  }

})

startGame()