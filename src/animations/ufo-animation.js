import { gsap } from 'gsap'
function runUfo(animateRay) {
  animateRay()
  animateDrunkUfo()
  animateCanvasRay()
  animateSurfaceText()

  function animateDrunkUfo() {
    let tweenUfoDrunked = gsap.timeline({ repeat: -1 })

    tweenUfoDrunked.fromTo('.ufo',
      {
        opacity: 1,
        x: 0,
        y: 0,
      },
      {
        opacity: 0.75,
        x: 5,
        y: -5,
        duration: 2,
        ease: "power2.inOut"
      })
    tweenUfoDrunked.to('.ufo', {
      opacity: 0.5,
      x: 0,
      y: 5,
      duration: 2,
      ease: "power2.inOut"
    })

    tweenUfoDrunked.to('.ufo', {
      opacity: 0.75,
      x: -5,
      y: 5,
      duration: 2,
      ease: "power2.inOut"
    })
    tweenUfoDrunked.to('.ufo', {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 2,
      ease: "power2.inOut"
    })
  }
  function animateCanvasRay() {
    let timelineCanvasRayDrunked = gsap.timeline({ repeat: -1 })

    timelineCanvasRayDrunked.fromTo('#canvas-ray',
      {
        opacity: 1,
        x: 0,
        y: 0,
      },
      {
        opacity: 0.85,
        x: 5,
        y: -5,
        duration: 2,
        ease: "power2.inOut"
      })
    timelineCanvasRayDrunked.to('#canvas-ray', {
      opacity: 0.7,
      x: 0,
      y: 5,
      duration: 2,
      ease: "power2.inOut"
    })

    timelineCanvasRayDrunked.to('#canvas-ray', {
      opacity: 0.85,
      x: -5,
      y: 5,
      duration: 2,
      ease: "power2.inOut"
    })
    timelineCanvasRayDrunked.to('#canvas-ray', {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 2,
      ease: "power2.inOut"
    })
  }
  function animateSurfaceText() {
    let timelineSurfaceText = gsap.timeline({ repeat: -1 })

    timelineSurfaceText.fromTo('.surface',
      {
        transform: "rotateY(-40deg) rotateZ(4deg) rotateX(25deg) translateX(-45px) translateY(0px)",
      },
      {
        transform: "rotateY(8deg) rotateZ(4deg) rotateX(1deg) translateX(0px) translateY(-60px)",
        duration: 4,
        ease: "power2.inOut"
      })
    timelineSurfaceText.to('.surface', {
      transform: "rotateY(-40deg) rotateZ(4deg) rotateX(25deg) translateX(-45px) translateY(0px)",
      duration: 4,
      ease: "power2.inOut"
    })
  }
}

function runAppearanceUfo(animateRay) {
  gsap.fromTo('.ufo',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      ease: "power4.in",
      duration: 2,
      delay: 0,
      onComplete: () => {
        runUfo(animateRay)
      }
    },
  )
  document.querySelector('.ufo').style.visibility = 'visible'
}
export { runAppearanceUfo }
