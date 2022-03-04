import { gsap } from 'gsap'

function leftCardAnimate() {
  // dx , dy - расстояния от центра экрана до элемента
  // cx , cy - половина ширины и высоты экрана
  let cardLeft = document.querySelector('.about-me-left')

  let dxL, dyL, clientXL, clientYL, tiltXL, tiltYL, radiusL, degreeL
  let halfWidthL = cardLeft.getBoundingClientRect().width / 2
  let halfHeightL = cardLeft.getBoundingClientRect().height / 2

  cardLeft.addEventListener('mousemove', e => {
    clientXL = e.pageX - cardLeft.getBoundingClientRect().x
    clientYL = e.pageY - document.querySelector('.container-greetings').getBoundingClientRect().height - cardLeft.getBoundingClientRect().y
    requestAnimationFrame(updateLeft)
  })
  cardLeft.addEventListener('mouseleave', e => {
    requestAnimationFrame(updateLeftOff)
  })

  function updateLeft() {
    dxL = clientXL - halfWidthL
    dyL = halfHeightL - clientYL


    tiltXL = 2 * dxL / halfWidthL
    tiltYL = 1 * dyL / halfHeightL

    radiusL = Math.sqrt(Math.pow(tiltXL, 2) + Math.pow(tiltYL, 2))
    degreeL = radiusL * 8

    gsap.to('.about-me-left', 1,
      { transform: `rotate3d(${tiltYL},${tiltXL},0,${degreeL}deg` }
    )
  }
  function updateLeftOff() {
    gsap.to('.about-me-left', 3,
      { transform: `rotate3d(0,0,0,0deg) scale(0.9)` }
    )
  }
}

function rightCardAnimate() {
  // dx , dy - расстояния от центра экрана до элемента
  // cx , cy - половина ширины и высоты экрана
  let cardRight = document.querySelector('.about-me-right')
  let dxR, dyR, clientXR, clientYR, tiltXR, tiltYR, radiusR, degreeR
  let halfWidthR = cardRight.getBoundingClientRect().width / 2
  let halfHeightR = cardRight.getBoundingClientRect().height / 2

  cardRight.addEventListener('mousemove', e => {
    clientXR = e.pageX - cardRight.getBoundingClientRect().x
    clientYR = e.pageY - document.querySelector('.container-greetings').getBoundingClientRect().height - cardRight.getBoundingClientRect().y

    requestAnimationFrame(updateRight)
  })
  cardRight.addEventListener('mouseleave', e => {
    requestAnimationFrame(updateRightOff)
  })

  function updateRight() {
    dxR = clientXR - halfWidthR
    dyR = halfHeightR - clientYR

    tiltXR = 2 * dxR / halfWidthR
    tiltYR = 1 * dyR / halfHeightR

    radiusR = Math.sqrt(Math.pow(tiltXR, 2) + Math.pow(tiltYR, 2))
    degreeR = radiusR * 8

    gsap.to('.about-me-right', 1,
      { transform: `rotate3d(${tiltYR},${tiltXR},0,${degreeR}deg` }
    )
  }
  function updateRightOff() {
    gsap.to('.about-me-right', 3,
      { transform: `rotate3d(0,0,0,0deg) scale(0.9)` }
    )
  }
}
function tilt3dCardInitialize() {
  leftCardAnimate()
  rightCardAnimate()

}

export { tilt3dCardInitialize }