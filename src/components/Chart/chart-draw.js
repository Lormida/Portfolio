let axisX, axisXName, axisYName, axisY, font, lineHeight, x0, y0, dx, dy, amountX, amountY, beginX0, beginY0, hGlobal, wGlobal, canvas, h, w, ctx, deltaX, deltaY, deltaZ

function initiliazeChartCanvas() {
  if (!document.querySelector('#chart')) {
    hGlobal = innerHeight
    wGlobal = innerWidth
    canvas = document.createElement('canvas')
    h = hGlobal * 1
    w = wGlobal * 1
    canvas.width = w
    canvas.height = h
    canvas.id = 'chart'
    document.querySelector('.canvas-container').append(canvas)
    ctx = canvas.getContext('2d')
    deltaX = 0
    deltaY = 0
    deltaZ = 0.020
  } else {
    console.log('Already exists!')

  }
}
function initializeFontChart() {
  axisX = ['HTML', 'CSS', 'GIT<HUB>', 'JS', 'SCSS', 'VUE', 'WEBPACK', 'CANVAS', 'GSAP']
  axisY = ['SQL', 'REST API', 'FIREBASE', 'NODE', 'HBS/PUG', 'EXPRESS', 'MONGO DB', 'MONGOOSE']
  axisXName = 'Front-end'
  axisYName = 'Back-end'
  amountX = axisX.length
  amountY = axisY.length
  dx = Math.floor(w * 0.85 / (amountX + 1))
  dy = Math.floor(h * 0.75 / (amountY + 1))
  beginX0 = Math.floor(w * 0.15)
  beginY0 = Math.floor(h * (0.05 + 0.75))
  x0 = dx
  y0 = dy
  font = 2
  lineHeight = 15
}
function drawChart() {
  // Draw axises
  if (deltaX < w * 0.85 || deltaY < h * 0.75 || deltaZ < 1) {
    requestAnimationFrame(drawChart)
  }
  else {
    return true
  }

  ctx.clearRect(0, 0, innerWidth, innerHeight)


  // X axes
  ctx.beginPath()
  ctx.lineWidth = 3
  ctx.moveTo(w * 0.15, h * 0.8)
  ctx.lineTo(w * 0.15, h * 0.8 - deltaY)
  ctx.strokeStyle = '#e0c3fc'
  ctx.stroke()
  ctx.closePath()


  // Y axes
  ctx.beginPath()
  ctx.lineWidth = 3
  ctx.moveTo(w * 0.15, h * 0.8)
  ctx.lineTo(w * 0.15 + deltaX, h * 0.8)
  ctx.strokeStyle = '#e0c3fc'
  ctx.stroke()
  ctx.closePath()

  if (deltaY < h * 0.75) {
    deltaY += 4
  }
  if (deltaX < w * 0.85) {
    deltaX += 6
  }
  if (deltaZ < 1) {
    deltaZ += Math.pow(deltaZ, 2) / 2.5
  }
  ctx.font = font + 'rem Oswald'

  // Drow x words
  for (let i = 0; i < axisX.length; i++) {
    ctx.beginPath()
    ctx.lineWidth = 2
    ctx.moveTo(beginX0 + dx * (i + 1), h * 0.8)
    ctx.lineTo(beginX0 + dx * (i + 1), h * 0.8 - deltaY + dy / 2)
    ctx.strokeStyle = 'rgba(255, 198, 255,0.5)'
    ctx.stroke()
    ctx.closePath()

    ctx.save()
    ctx.textBaseline = "center"
    ctx.translate(beginX0 + dx * (i + 1), beginY0 + dy / 4)
    ctx.rotate(-Math.PI / 4)

    ctx.textAlign = 'right'
    ctx.fillStyle = `rgba(255,255,255,${deltaX / (w * 0.85)})`
    ctx.fillText(`${axisX[i]}`, 0, lineHeight / 2)
    ctx.restore()
  }
  // Drow y words
  for (let i = 0; i < axisY.length; i++) {
    ctx.beginPath()
    ctx.lineWidth = 2
    ctx.moveTo(w * 0.15, beginY0 - dy * (i + 1))
    ctx.lineTo(w * 0.15 + deltaX - dx / 2, beginY0 - dy * (i + 1))
    ctx.strokeStyle = 'rgba(144, 224, 239,0.5)'
    ctx.stroke()
    ctx.closePath()

    ctx.save()
    ctx.textBaseline = "center"
    ctx.translate(beginX0 - dx / 6, beginY0 - dy * (i + 1))
    ctx.rotate(-Math.PI / 4)

    ctx.textAlign = 'right'
    ctx.fillStyle = `rgba(255,255,255,${deltaY / (h * 0.75)})`
    ctx.fillText(`${axisY[i]}`, 0, lineHeight / 2)
    ctx.restore()
  }


  buildGraph([[0, 0], [1, 1], [5, 1], [6, 3], [7, 3], [8, 8], [9, 8]])

  function buildGraph(coordinates) {

    function connect(firstCoordinate, secondCoordinate) {
      let grad = ctx.createLinearGradient(0, 100, 600, 100)

      grad.addColorStop(0, `rgba(255, 255, 0, ${deltaZ} )`)
      grad.addColorStop(0, `rgba(255, 129, 128, ${deltaZ})`)
      grad.addColorStop(1, `rgba(255, 255, 255, ${deltaZ})`)

      ctx.beginPath()
      ctx.strokeStyle = grad
      ctx.lineWidth = 4
      ctx.moveTo(w * 0.15 + firstCoordinate[0] * dx, h * 0.8 - firstCoordinate[1] * dy)
      ctx.lineTo(w * 0.15 + secondCoordinate[0] * dx, h * 0.8 - secondCoordinate[1] * dy)
      ctx.stroke()
      ctx.closePath()
    }

    coordinates.reduce(function (previousCoordinate, currentCoordinate) {
      connect(previousCoordinate, currentCoordinate)
      return currentCoordinate
    })

  }

}

export { initiliazeChartCanvas, initializeFontChart, drawChart }