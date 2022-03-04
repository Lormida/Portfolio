<template>
  <div class="container-galaxy">
    <div class="button-next" @click="earlyTransition"></div>
    <div class="panorama">
      <div class="magic-transition"></div>
      <div class="overlay-alert"></div>
      <img class="planet" src="../../public/assets/galaxy/planet.webp" alt="" />
      <img
        class="asteroids"
        src="../../public/assets/galaxy/asteroids.webp"
        alt=""
      />
      <img class="pot" src="../../public/assets/galaxy/pot.webp" alt="" />
      <div class="galaxy-wrapper">
        <img
          class="galaxy"
          src="../../public/assets/galaxy/bgcircle-2.webp"
          alt=""
        />
      </div>
      <div class="cabin-wrapper">
        <img class="cabin" src="../../public/assets/gates/cabinM.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { onMounted, onBeforeUnmount } from 'vue'
export default {
  setup() {
    const router = useRouter()
    let timerAsteroidCollision = null
    let timelineGalaxyCollision = null
    let timerDimensionJump = null

    const clearTraces = () => {
      timelineGalaxyCollision.pause()
      timelineGalaxyCollision = null
      clearTimeout(timerAsteroidCollision)
      clearTimeout(timerDimensionJump)
    }
    const earlyTransition = () => {
      router.push({ path: '/' })
    }


    onMounted(() => {
      const galaxyWrapper = document.querySelector('.galaxy-wrapper')
      const galaxy = document.querySelector('.galaxy')
      const asteroids = document.querySelector('.asteroids')
      const planet = document.querySelector('.planet')
      const pot = document.querySelector('.pot')
      const panorama = document.querySelector('.panorama')
      const cabinWrapper = document.querySelector('.cabin-wrapper')
      const magicTransition = document.querySelector('.magic-transition')

      let overlayAlert = document.querySelector('.overlay-alert')
      let alertEl = null
      let alertTextWrapper = null
      let signAlert = null
      let alertText = null

      let promptsCollisionAsteroids = null
      let promptsDimensionalJump = null

      timelineGalaxyCollision = gsap.timeline({
        onStart: () => {
        },
        onReverseComplete: () => {
        }
      })

      // Приближение к астероидам
      timelineGalaxyCollision.fromTo(asteroids,
        {
          x: 1200,
          z: -1500,
        },
        {
          rotateZ: 25,
          z: 400,
          x: -100,
          duration: 9,
          ease: "power1.in",
        }, "=1"
      )

      // Столкновение с астероидами
      timelineGalaxyCollision.fromTo(asteroids,
        {
          y: 0,
          // rotationZ: 16,
        },
        {
          z: 2100,
          rotationZ: 80,
          x: -700,
          y: 250,
          duration: 6,
          ease: "power1.inOut",
          onStart: () => {
            startCollisionAsteroids()
            promptsCollisionAsteroids = addPromptCollisionAsteroids()
            timerAsteroidCollision = setTimeout(() => {
              endCollisionAsteroids()
              removePrompts(promptsCollisionAsteroids)
            }, 7000)
          },
          onComplete: () => {

          },
        }, '=0'
      )

      // Приближение к планете
      timelineGalaxyCollision.fromTo(planet,
        {
          z: 0,
        },
        {
          z: 1800,
          duration: 15,
          ease: 'power2.in',
        }, '=-16')

      // Поворот направо
      timelineGalaxyCollision.fromTo(galaxyWrapper,
        {
          x: 0,
        },
        {
          x: -450,
          duration: 1,
          ease: 'power1.inOut',
        }, '=1')

      timelineGalaxyCollision.fromTo(galaxyWrapper,
        {
          z: 0,
        },
        {
          onStart: () => {
            startSpaceJump()
            promptsDimensionalJump = addPromptsGravityField()
            timerDimensionJump = setTimeout(() => {
              removePrompts(promptsDimensionalJump)
            }, 7000)
          },
          z: 500,
          duration: 8,
          // ease: 'expo.in',
          ease: "elastic.in(1, 1)",
        }, '=-0')

      // Прыжок в гиперпространство
      timelineGalaxyCollision.fromTo(galaxy,
        {
        },
        {
          onComplete: () => {
          },
          xPercent: -45,
          z: 9500,
          duration: 3,
          ease: "elastic.in(1, 1)",
        }, '=-0')

      // Чайник рассела
      timelineGalaxyCollision.fromTo(pot,
        {
          x: 0,
          y: 0,
          z: 0,
          rotationZ: 0,
        },

        {
          rotationZ: 720,
          x: 1400,
          y: 500,
          z: 1800,
          duration: 2,
          ease: "none",
        }, "=-6.5",
      )

      // Схлопывание пространства
      timelineGalaxyCollision.fromTo(magicTransition,
        {
        },
        {
          onStart: () => {
            magicTransition.style.opacity = 1
          },
          onComplete: () => {
            setTimeout(() => {
              router.push({ path: '/' })
            }, 0)
          },
          duration: 0.2,
          scaleY: 0,
          ease: "none",
        }, '=-0')

      function startCollisionAsteroids() {
        panorama.classList.add('shake-hard')
        panorama.classList.add('shake-constant')
      }

      function endCollisionAsteroids() {
        panorama.classList.remove('shake-hard')
        startLittleShaking()
      }

      function startDefaultShaking() {
        panorama.classList.add('shake')
        panorama.classList.add('shake-constant')
      }
      function startLittleShaking() {
        panorama.classList.add('shake')
      }
      function startSpaceJump() {
        panorama.classList.remove('shake')
        panorama.classList.add('shake-hard')
        panorama.classList.add('shake-constant')
      }

      function runAlertFlicker(text, colorPrompt, colorText, colorBorder, flick, showImage = true) {
        let alertDOM = createAlert()
        let alertEl = adjuctDOMAlert(alertDOM, {
          text, colorPrompt, colorText, colorBorder, flick, showImage
        })
        return alertEl
      }
      function stopAlertFlicker(alertEl) {
        overlayAlert.style.backgroundColor = "rgba(250, 44, 54, 0.1)"
        alertEl.style.animationPlayState = 'paused'
        alertEl.parentNode.remove()
      }
      function createAlert() {
        let alertDOM = document.createElement('div')
        alertDOM.classList.add('alert-wrapper')
        alertDOM.style.width = "40%"
        alertDOM.innerHTML = `
  <div class="alert">
    <div class="alert-text-wrapper">
        <div class="alert-text"> some text </div>
    </div>
  </div>`
        if (document.querySelector('.overlay-alert')) {
          document.querySelector('.overlay-alert').append(alertDOM)
        }
        return alertDOM
      }
      function adjuctDOMAlert(alertDOM, options) {
        // INITIALIZATION
        const { text, colorPrompt, colorText, colorBorder, flick, showImage } = options
        alertEl = alertDOM.querySelector('.alert')
        alertTextWrapper = alertDOM.querySelector('.alert-text-wrapper')
        alertTextWrapper.style.height = "100%"
        signAlert = alertDOM.querySelector('.sign-alert')
        alertText = alertDOM.querySelector('.alert-text')

        // Set default overlay color
        overlayAlert.style.backgroundColor = 'rgba(250, 44, 54, 0.2)'

        // Set prompt

        if (!showImage) {
          let images = alertDOM.getElementsByTagName('img')
          for (let img of images) {
            img.style.display = 'none'
          }
        }
        if (flick) {
          alertEl.style.animationPlayState = 'running'
        }
        alertText.innerText = text
        alertEl.style.backgroundColor = colorPrompt
        alertEl.style.borderTop = `7px solid ${colorBorder}`
        alertEl.style.borderBottom = `7px solid ${colorBorder}`
        alertEl.style.padding = `5% 1%`
        alertEl.style.fontSize = `8rem`
        alertEl.style.marginBottom = `30px`
        alertEl.style.textAlign = `center`
        alertEl.style.lineHeight = `1.3`
        alertText.style.color = colorText
        overlayAlert.style.opacity = 1

        return alertEl
      }

      function addPromptCollisionAsteroids() {
        let dangerCollision = runAlertFlicker('WARNING :: Asteroids collision',
          'rgba(250, 44, 54, 0.3)', 'red', 'rgba(250, 44, 54, 0.8)', true)

        let attentionControl = runAlertFlicker(`Destabilization of the ship\'s control. \n Switching to automatic mode.`,
          'rgba(255, 220, 22, 0.3)', 'yellow', 'rgba(255, 220, 22, 0.8)', false, false)

        return [dangerCollision, attentionControl]
      }
      function addPromptsGravityField() {
        let dangerGravityField = runAlertFlicker('WARNING :: Falling into the gravitational field of the black hole',
          'rgba(250, 44, 54, 0.3)', 'red', 'rgba(250, 44, 54, 0.8)', true)

        let attentionJump = runAlertFlicker('Preparing for an interdimensional jump',
          'rgba(255, 220, 22, 0.3)', 'yellow', 'rgba(255, 220, 22, 0.8)', false, false)

        return [dangerGravityField, attentionJump]
      }

      function removePrompts(prompts) {
        prompts.forEach(prompt => stopAlertFlicker(prompt))
      }
    })

    onBeforeUnmount(() => {
      clearTraces()
    })

    return { clearTraces, earlyTransition }
  }

}
</script>

<style lang="scss" scoped>
.body {
  max-width: 1920px;
  overflow: hidden;
  margin: 0 auto;
}
.container-galaxy {
  overflow: hidden;
  width: 100%;
  height: 100vh;
}
.panorama {
  overflow: hidden;
  position: relative;
  top: -5vh;
  left: -5%;
  width: 110%;
  min-height: 110vh;
  perspective: 2000px;
  z-index: 4;
}
.galaxy-wrapper {
  background: url("../../public/assets/gates/ground.webp");
  perspective: 10000px;
  position: fixed;
  top: 0;
  left: 0;
  width: 150%;
  height: 100vh;
  z-index: 3;
}
.galaxy {
  position: absolute;
  top: 20vh;
  left: 50%;
  mix-blend-mode: lighten;
  border-radius: 50%;
  transform: translate3d(0, 0px, -300000px);
  z-index: 3;
  width: 500px;
  object-fit: contain;
  height: 500px;
  box-shadow: 0px 5px 37px 2px rgba(34, 60, 80, 0.2);
}
.planet {
  position: fixed;
  background: transparent;
  top: 15%;
  left: 5%;
  width: 40%;
  z-index: 5;
}
.asteroids {
  position: fixed;
  background: transparent;
  top: 45%;
  right: 3%;
  transform: translateZ(-900px);
  z-index: 5;
}
.pot {
  position: fixed;
  background: transparent;
  top: -20%;
  left: -20%;
  z-index: 5;
}
.cabin-wrapper {
  position: fixed;
  background: transparent;
  top: -5vh;
  left: -3%;

  min-width: 106%;
  min-height: 110vh;
  z-index: 9999;
}
.cabin {
  position: absolute;
  left: 0%;
  top: 6vh;
  z-index: 9999;
  min-width: 100%;
  max-width: 100%;
  min-height: 106%;
  background: transparent;
}

@keyframes flicker {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.overlay-alert {
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 6;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.alert-wrapper {
  min-width: 55%;
  width: 50%;
  margin: 20px 0;
  z-index: 1000000;
}
.alert {
  animation: 1.5s linear 0s infinite normal forwards paused flicker;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 20vh;
  text-align: center;
}

.alert-text-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sign-alert {
  height: 90px;
  width: auto;
  padding: 0 30px;
}

.alert-text {
  width: 100%;
  font-size: 2.3em;
  font-weight: bold;
  text-align: center;
}
.magic-transition {
  opacity: 0;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  z-index: 10;
  width: 100%;
  height: 40%;
  background-color: rgba(255, 255, 255, 0.9);
}
</style>