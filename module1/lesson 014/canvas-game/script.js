class GameBoard {
  constructor() {
    this.width = 600
    this.height = 600
  }

  initialise() {
    const canvas = document.createElement('canvas')
    canvas.width = this.width
    canvas.height = this.height

    const body = document.getElementsByTagName('body')[0]

    body.appendChild(canvas)
    this.setCtx(canvas)
  }

  setCtx(canvas) {
    this.ctx = canvas.getContext('2d')
  }
  
}

class Player {
  constructor(x, y, speed) {
    this.x = x
    this.y = y
    this.speed = speed
    this.radius = 20
  }

  moveLeft() {
    this.x -= this.speed
    console.log(this.x)
  }

  moveRight() {
    this.x += this.speed
  }

  moveUp() {
    this.y -= this.speed
  }

  moveDown() {
    this.y += this.speed
  }

  draw(ctx) {
    ctx.fillStyle = 'red'
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, (Math.PI/180) * 360)
    ctx.fill()
  }
}

class Enemy {
  constructor(x, y, speed) {
    this.x = x
    this.y = y
    this.speed = speed
    this.radius = 10 + (Math.random() * 90)
  }

  draw(ctx) {
    ctx.fillStyle = 'magenta'
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, (Math.PI/180) * 360)
    ctx.fill()
  }

  move() {
    this.x -= this.speed
  }
}


class Game {

  constructor() {
    this.gameBoard = new GameBoard()
    this.player = new Player(150, 150, 20)
    this.enemies = []
    this.score = 0
  }

  start() {
    this.gameBoard.initialise()
    this.addListeners()
    requestAnimationFrame(this.gameLoop.bind(this))

    window.setInterval(this.addEnemy.bind(this), 2000)
  }

  gameLoop() {
    const ctx = this.gameBoard.ctx
    ctx.clearRect(0, 0, 600, 600)
    this.player.draw(this.gameBoard.ctx)

    this.enemies.forEach(enemy => {
      enemy.draw(ctx)
      enemy.move()

    })

    this.scoreUpdate(ctx)

    this.collisionDetection(this.enemies)
    requestAnimationFrame(this.gameLoop.bind(this))
  }

  scoreUpdate(ctx) {
    ctx.fillStyle = 'orange'
    ctx.font = '20px Arial'
    ctx.fillText(this.score, 10, 20)
  }

  collisionDetection(enemies) {
    enemies.forEach((enemy, index) => {
      const dx = enemy.x - this.player.x
      const dy = enemy.y - this.player.y

      const distance = Math.sqrt(dx * dx + dy * dy)

      if ( distance < enemy.radius + this.player.radius ) {
        enemies.splice(index, 1)
        this.addScore()
      }
    })

  }
  addEnemy() {

    const randomSpeed = 5 + (Math.random() * 20)
    const randomY = Math.random() * this.gameBoard.height
    const enemy = new Enemy(this.gameBoard.width + 50, randomY, randomSpeed)

    this.enemies.push(enemy)
  }

  addScore (){
    this.score += 1
  }

  addListeners() {
    document.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'ArrowLeft':
          console.log('move left')
          this.player.moveLeft()
          break;
        case 'ArrowRight':
          this.player.moveRight()
          break;
        case 'ArrowUp':
          this.player.moveUp()
          break;
        case 'ArrowDown':
          this.player.moveDown()
          break;
      }
    })
  }
}

const game = new Game()

game.start()