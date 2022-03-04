import { gsap } from 'gsap'
function runPuzzle() {

  const pazzleAnimationFinished = () => {
    countPazzle++
    if (countPazzle == 4) {
      countPazzle = 0
      pazzlesArray.forEach((pazzle) => {
        pazzle.style.clipPath = 'none'
      })
    }
  }
  const generatePazzleChangeColorAnimation = (pazzle) => {
    return gsap.fromTo(pazzle,
      {
        backgroundColor: 'rgba(27, 22, 22, 0.5)',
      },
      {
        backgroundColor: 'rgba(27, 22, 22, 1)',
        duration: 2,
        ease: 'none',
      }
    )
  }
  const initiliazePazzles = () => {
    pazzles = document.querySelector('.pazzles')
    pazzle1 = document.querySelector('.item1')
    pazzle2 = document.querySelector('.item2')
    pazzle3 = document.querySelector('.item3')
    pazzle4 = document.querySelector('.item4')
  }
  const initializePazzleChangeColorAnimation = () => {
    pazzleCCA1 = generatePazzleChangeColorAnimation(pazzle1)
    pazzleCCA2 = generatePazzleChangeColorAnimation(pazzle2)
    pazzleCCA3 = generatePazzleChangeColorAnimation(pazzle3)
    pazzleCCA4 = generatePazzleChangeColorAnimation(pazzle4)
  }
  const initializeTweenPazzlesAnimation = () => {

    tweenPazzle1 = gsap.fromTo(".item1",
      {
        opacity: 0,
        left: -width,
        top: -height,
      },
      {
        duration: 2.25,
        left: 0,
        top: 0,
        rotationY: 720,
        opacity: 1,
        ease: "power1.inOut",
        onComplete: (e) => pazzleAnimationFinished(),
        onReverseComplete: () => {
          tweenPazzle1.duration(2).restart()
          pazzleChangeColorArray[0].restart()
        }
      }
    )
    tweenPazzle2 = gsap.fromTo(".item2",
      {
        opacity: 0,
        right: -width,
        top: -height,
      },
      {
        duration: 2,
        right: 0,
        top: 0,
        rotationY: 360,
        rotationZ: -360,
        opacity: 1,
        ease: "power1.inOut",
        onComplete: (e) => pazzleAnimationFinished(),
        onReverseComplete: () => {
          tweenPazzle2.duration(2).restart()
          pazzleChangeColorArray[1].restart()
        }
      }
    )
    tweenPazzle3 = gsap.fromTo(".item3",
      {
        opacity: 0,
        left: -width,
        bottom: -height,
      },
      {
        duration: 2.25,
        left: 0,
        bottom: 0,
        rotationY: -360,
        rotationZ: -360,
        opacity: 1,
        ease: "power1.inOut",
        onComplete: (e) => pazzleAnimationFinished(),
        onReverseComplete: () => {
          tweenPazzle3.duration(2).restart()
          pazzleChangeColorArray[2].restart()
        }
      }
    )
    tweenPazzle4 = gsap.fromTo(".item4",
      {
        opacity: 0,
        right: -width,
        bottom: -height,
      },
      {
        duration: 2,
        right: 0,
        bottom: 0,
        rotationX: 720,
        opacity: 1,
        ease: "power1.inOut",
        onComplete: (e) => pazzleAnimationFinished(),
        onReverseComplete: () => {
          tweenPazzle4.duration(2).restart()
          pazzleChangeColorArray[3].restart()
        }
      }
    )
    pazzles.style.opacity = 1
  }
  const initializeDimensions = () => {
    width = document.querySelector('.pazzles').getBoundingClientRect().width
    height = document.querySelector('.pazzles').getBoundingClientRect().height
  }
  // ---Initialization values---
  let countPazzle = 0
  let clipPathPazzle1 = null, clipPathPazzle2 = null, clipPathPazzle3 = null, clipPathPazzle4 = null
  let pazzles = null, pazzle1 = null, pazzle2 = null, pazzle3 = null, pazzle4 = null
  let pazzleCCA1 = null, pazzleCCA2 = null, pazzleCCA3 = null, pazzleCCA4 = null
  let tweenPazzle1 = null, tweenPazzle2 = null, tweenPazzle3 = null, tweenPazzle4 = null
  let width = null, height = null

  initiliazePazzles()
  initializeDimensions()
  // ---Run animation change color background pazzles---
  initializePazzleChangeColorAnimation()
  // --Run animation transform pazzles---
  initializeTweenPazzlesAnimation()


  let pazzlesArray = [pazzle1, pazzle2, pazzle3, pazzle4]
  const tweenPazzlesArray = [tweenPazzle1, tweenPazzle2, tweenPazzle3, tweenPazzle4]
  const pazzleChangeColorArray = [pazzleCCA1, pazzleCCA2, pazzleCCA3, pazzleCCA4]
  const clipPathPazzleArray = [clipPathPazzle1, clipPathPazzle2, clipPathPazzle3, clipPathPazzle4]





  // ---Listener to re-run animation pazzle---
  document.querySelector('.compliment-title').addEventListener('click', e => {
    for (let i = 0; i < 4; i++) {
      pazzlesArray[i].style.clipPath = clipPathPazzleArray[i]
      pazzleChangeColorArray[i].play()
      tweenPazzlesArray[i].duration(1).reverse()
    }
  })
}

export { runPuzzle }