let hGlobal, wGlobal, hRay, wRay, canvasRay, cRay, deltaRay

function initializeRayCanvas() {
  wGlobal = innerWidth
  hGlobal = innerHeight
  canvasRay = document.createElement('canvas')
  wRay = wGlobal * 0.35
  hRay = hGlobal * 0.5
  canvasRay.width = wRay
  canvasRay.height = hRay
  canvasRay.id = 'canvas-ray'
  document.querySelector('.ufo-container').appendChild(canvasRay)
  cRay = canvasRay.getContext('2d')
  deltaRay = 0
}
function animateRay() {

  if (deltaRay < hRay - 40) {
    cRay.clearRect(0, 0, wRay, hRay)
    requestAnimationFrame(animateRay)
  }
  else {
    return true
  }

  cRay.save()
  // cRay.rotate(-Math.PI / -90)
  cRay.globalAlpha = 1

  // CENTER
  cRay.beginPath()
  cRay.lineWidth = 2
  cRay.moveTo(wRay * 0.36, 0)
  cRay.lineTo(wRay * 0.36, deltaRay)
  cRay.lineTo(wRay * 0.62, deltaRay)
  cRay.lineTo(wRay * 0.62, 0)
  let grad = cRay.createLinearGradient(0, 100, 600, 100)
  grad.addColorStop(0, 'rgba(228, 228, 213, 1)')
  grad.addColorStop(1, 'rgba(255, 255, 255, 1)')
  grad.addColorStop(1, 'rgba(225, 228, 228, 1)')
  cRay.filter = 'blur(15px)'
  cRay.fillStyle = grad
  cRay.fill()
  cRay.closePath()

  cRay.globalAlpha = 0.4

  // LEFT PART
  cRay.beginPath()
  cRay.lineWidth = 2
  cRay.moveTo(wRay * 0.36, 0)
  cRay.lineTo(wRay * 0.08, deltaRay)
  cRay.lineTo(wRay * 0.36, deltaRay)
  cRay.lineTo(wRay * 0.36, 0)
  grad = cRay.createLinearGradient(0, 100, 600, 100)
  grad.addColorStop(0, 'rgba(115, 115, 108, 1)')
  grad.addColorStop(0, 'rgba(255, 151, 151, 1)')
  grad.addColorStop(1, 'rgba(255, 255, 255, 1)')
  cRay.filter = 'blur(10px)'
  cRay.fillStyle = grad
  cRay.fill()
  cRay.closePath()

  // RIGHT PART
  cRay.beginPath()
  cRay.lineWidth = 2
  cRay.moveTo(wRay * 0.62, 0)
  cRay.lineTo(wRay * 0.92, deltaRay)
  cRay.lineTo(wRay * 0.62, deltaRay)
  cRay.lineTo(wRay * 0.62, 0)
  grad = cRay.createLinearGradient(0, 100, 600, 100)
  grad.addColorStop(0, 'rgba(115, 115, 108, 1)')
  grad.addColorStop(0, 'rgba(255, 151, 151, 1)')
  grad.addColorStop(1, 'rgba(255, 255, 255, 1)')
  cRay.filter = 'blur(10px)'

  cRay.fillStyle = grad
  cRay.fill()
  cRay.closePath()
  cRay.restore()

  if (deltaRay < hRay - 40) {
    deltaRay = deltaRay + 15
  }
}

export { initializeRayCanvas, animateRay }