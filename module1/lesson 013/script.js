const canvas = document.getElementById('our-canvas')

const ctx = canvas.getContext('2d')

const gradient = ctx.createLinearGradient(0, 0, 200, 200)

gradient.addColorStop(0, 'red')
gradient.addColorStop(1, 'blue')

ctx.fillStyle = gradient

ctx.globalAlpha = 0.5
// ctx.fillStyle = 'red'

ctx.fillRect(30, 40, 30, 50)

// ctx.fillStyle = 'blue'

// ctx.strokeStyle = 'blue'

ctx.strokeRect(70, 40, 30, 50)

// ctx.fillStyle = 'brown'

ctx.fillRect(200, 40, 30, 50)

// ctx.clearRect(0, 0, 600, 600)

ctx.beginPath()

ctx.moveTo(30, 50)

ctx.lineTo(30, 100)

ctx.lineTo(80, 100)

ctx.lineTo(80, 30)

ctx.fill()

ctx.stroke()

ctx.closePath()

ctx.beginPath();

ctx.arc(150, 150, 80, (Math.PI/180) * 0, (Math.PI/180) * 240)

ctx.fill()

ctx.beginPath()

ctx.lineWidth = 4
ctx.moveTo(50, 300)

ctx.lineTo(100, 300)

ctx.arcTo(200, 300, 200, 400, 45)

ctx.stroke()

const image = new Image()

image.src = 'mario.jpg'

image.onload = function() {
  ctx.drawImage(image, 200, 200, 50, 100)


}

const wallImage = new Image()

wallImage.src = 'wallpaper.png'

wallImage.onload = function() {
  const pattern = ctx.createPattern(wallImage, 'repeat')

  ctx.fillStyle = pattern

  ctx.fillRect(150, 150, 400, 400)


}

ctx.font = '50px arial'
ctx.fillText('copyright by Jorg', 300, 300)

const button = document.getElementById('button')

button.addEventListener('click', () => {
  ctx.clearRect(0, 0, 600, 600)
})