<template>
  <div class="container-text">
    <div class="button-next" @click="earlyTransition"></div>
    <div class="intro-section"></div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { onMounted, onBeforeUnmount, onUnmounted } from 'vue'
export default {
  setup() {
    let stopBlinkTimer = null
    let initRouteTransition = null
    let timeline = null
    let startBlink = null
    let stopBlink = null
    const router = useRouter()

    const earlyTransition = () => {
      router.push({ path: '/magic-sphere' })
    }

    onMounted(() => {
      const introSection = document.querySelector('.intro-section')
      const stepsConstant = 2.35 // symbols * C
      const widthConstant = 0.50 // symbols * C
      let textArray = [`The year is 2022.  `,
        `People still make resume in txt file.  `,
        'It\'s time to change everything...  ']

      timeline = gsap.timeline()

      const createParagraphTyping = (boxToInsert, content, index) => {
        let newP = document.createElement('p')
        newP.classList.add('line')
        newP.classList.add(`line${index}`)
        if (index == 1) {
          newP.classList.add('anime-typewriter')
        }
        newP.innerText = content
        boxToInsert.append(newP)
      }

      // Start creating P => (text data , box for inserting , timeline control)
      createParagraph(textArray, introSection, timeline)

      startBlink = (line) => document.querySelector(`.${line}`).classList.add('anime-typewriter')

      stopBlink = (line, delay) => {
        stopBlinkTimer = setTimeout(() => {
          document.querySelector(`.${line}`)?.classList.remove('anime-typewriter')
        }, delay * 1000)
      }


      function createParagraph(textArray, boxToInsert, timeline) {
        textArray.forEach((content, index) => {
          // Add paragraph to DOM
          createParagraphTyping(boxToInsert, content, index + 1)

          // Config value for current P
          let width = (content.length * widthConstant).toFixed(2)
          let steps = (content.length * stepsConstant).toFixed(2)
          let time = Math.ceil(content.length / 24)
          let delayBlink = 2

          // Set up animation
          timeline.fromTo(`.line${index + 1}`,
            {
              width: 0,
            },
            {
              onStart: () => {
                startBlink(`line${index + 1}`)
              },
              onComplete: () => {
                stopBlink(`line${index + 1}`, delayBlink)
              },
              width: `${width}em`,
              duration: time,
              ease: `steps(${steps})`,
            }, `=${delayBlink}`
          )
        })

        timeline.to('.intro-section',
          {
            onComplete: () => {
              initRouteTransition = setTimeout(() => {
                router.push({ path: '/magic-sphere' })
              }, 1000)
            },
            height: 0,
            duration: 0.25,
            paddingTop: 0,
            paddingBottom: 0,
            ease: 'power1.inOut',
          }, "=0.5"
        )
      }

    })
    const clearTraces = () => {
      timeline.pause()
      timeline = null
      clearTimeout(stopBlinkTimer)
      clearTimeout(initRouteTransition)
    }

    onBeforeUnmount(() => {
      clearTraces()
    })

    return { earlyTransition, clearTraces }
  }

}
</script>

<style lang="scss">
@mixin adaptive-value($property, $start-size, $min-size) {
  $add-size: $start-size - $min-size;
  $max-width: 1920;
  $min-width: 360;
  #{$property}: calc(
    (#{$min-size + px}) +
      ($add-size * (100vw - (#{$min-width + px})) / ($max-width - $min-width))
  );
}

.container-text {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: rgba(255, 255, 255, 0.75);
  background: rgba(22, 22, 22, 1);
}
.intro-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  padding: 10px;
  min-width: 90%;
  width: auto;
  height: 500px;
  border-left: 3px solid rgba(255, 255, 255, 1);
  background: rgba(22, 22, 22, 0.5);
  overflow: hidden;
}

.line {
  font-family: "Share Tech Mono", monospace;
  font-weight: 100;
  color: #fff;
  margin: 10px 0;
  border-right: 10px solid rgba(22, 22, 22, 0.75);
  text-shadow: 2px 2px rgba(255, 255, 255, 0.45);
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);
  @include adaptive-value(font-size, 70, 18);
  @include adaptive-value(letter-spacing, -5, -2);
}
.anime-typewriter {
  animation: blinkTextCursor 500ms steps(40) infinite normal;
}

@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}
</style>