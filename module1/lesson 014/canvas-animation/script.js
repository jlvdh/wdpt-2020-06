const canvas = document.getElementById('our-canvas');
const ctx = canvas.getContext('2d')



function drawArc(ctx, x, y) {
  ctx.beginPath()
  ctx.arc(x, y, 50, 0, (Math.PI/180)*360)
  ctx.fillStyle = 'red'
  ctx.fill()
}

let xPos = 100
let yPos = 100
let speed = 10

function animationLoop() {

  ctx.clearRect(0,0, 600, 600)
  drawArc(ctx, xPos, yPos)

  xPos += speed

  if(xPos > 600) {
    speed = speed * -1
  }

  if(xPos < 0) {
    speed = speed * -1
  }
  requestAnimationFrame(animationLoop)
}

requestAnimationFrame(animationLoop)

const button = document.getElementById('jump-button')

button.addEventListener('click', () => {
  yPos += 10
})