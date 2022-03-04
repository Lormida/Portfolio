import { gsap } from "gsap"

function initializeMenusAnimation(homeOverlay, burgerMenuGlobal, menuGlobal, menuLinks, runningText) {

  const html = document.querySelector('html')
  let clickesBurger = 0
  const timeLineMenuGlobal = gsap.timeline({
    onStart: () => {
      menuGlobal.style.display = 'flex'
    },
    onReverseComplete: () => {
      menuGlobal.style.display = 'none'
    }
  })

  timeLineMenuGlobal.fromTo(menuGlobal,
    {
      scale: 0,
    },
    {
      perspective: 500,
      scale: 1,
      duration: 1.33,
      ease: "power1.inOut",
    })
  timeLineMenuGlobal.fromTo(menuGlobal,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.33,
      ease: "power4.inOut",
    }, '=-1.33')
  timeLineMenuGlobal.pause()

  const tweenMenuLinks = gsap.fromTo(menuLinks,

    {
      x: 200,
      opacity: 0,
      progress: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.inOut",
      progress: 1,
      paused: true,
      onStart: () => {
        homeOverlay.style.filter = `brightness(5%)`
        menuLinks.style.display = 'flex'
      },
      onReverseComplete: () => {
        homeOverlay.style.filter = `brightness(100%)`
        menuLinks.style.display = 'none'
      }
    },
  )

  burgerMenuGlobal.addEventListener('click', () => {
    clickesBurger++
    if (clickesBurger % 2 == 1) {
      timeLineMenuGlobal.play()
      tweenMenuLinks.play()
    }
    if (clickesBurger % 2 == 0) {
      timeLineMenuGlobal.reverse()
      tweenMenuLinks.reverse()
    }
  })

  menuGlobal.addEventListener('click', e => {
    if (e.target.tagName == 'A') {
      // Click menu item
      // Imitation clicking burget to get rid of menu
      clickesBurger++
      homeOverlay.style.filter = `brightness(50%)`
      timeLineMenuGlobal.reverse()
      tweenMenuLinks.reverse()
    }
  })
}

export { initializeMenusAnimation }