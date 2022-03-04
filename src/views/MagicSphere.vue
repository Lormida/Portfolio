<template>
  <div>
    <div class="magic-transition"></div>
    <div class="button-next" @click="earlyTransition"></div>
    <div class="overlay-escape">
      <div class="overlay">
        <div class="portal" @click="toTeleport"></div>
        <Sphere @vanish-sphere="vanishSphere"></Sphere>
      </div>
    </div>
  </div>
</template>

<script>
import Sphere from '../components/UI/Sphere.vue'
import { useRouter } from 'vue-router'
import { onMounted, onBeforeUnmount } from 'vue'
export default {
  components: {
    Sphere
  },
  setup() {
    let timelinePortal = null
    const router = useRouter()

    const vanishSphere = () => {
      timelinePortal.play()
    }

    const toTeleport = () => {
      timelinePortal.play()
    }
    const earlyTransition = () => {
      if (innerWidth < 1080 || innerHeight > innerWidth) {
        router.push({ path: '/' })
      } else {
        router.push({ path: '/catastrophe' })
      }
    }

    const clearTraces = () => {
      timelinePortal.pause()
      timelinePortal = null

    }

    onMounted(() => {
      timelinePortal = gsap.timeline()
      // Схлопывание сферы
      timelinePortal.fromTo('.container',
        {
          // y: 0,
        },
        {
          scaleX: 0,
          scaleY: 0,
          duration: 0.5,
          ease: "none",
        },
      )
      // Приближение поратала и ожидание нажатия
      timelinePortal.fromTo('.portal',
        {

        },
        {
          onComplete: () => {
            timelinePortal.pause()
          },
          z: 400,
          duration: 1,
          ease: "power4.in",
        }, "=0"
      )

      // Залет в телепорт
      timelinePortal.fromTo('.overlay',
        {
          z: 1,
        },
        {
          z: 1500,
          duration: 1,
          ease: "power3.in",
        }, "=0"
      )

      // Смена локации
      timelinePortal.fromTo('.magic-transition',
        {

        },
        {
          onStart: () => {
            initTransition()
          },
          onComplete: () => {
            setTimeout(() => {
              let path = '/catastrophe'
              if (innerWidth < 1080 || innerHeight > innerWidth) {
                path = '/'
              }
              router.push({ path: path })
            }, 100)
          },
          duration: 0.2,
          ease: "power3.inOut",
          scaleY: 0,
        }, "=0"
      )

      timelinePortal.pause()

      const magicTransition = document.querySelector('.magic-transition')
      const overlayEscape = document.querySelector('.overlay-escape')

      const initTransition = () => {
        magicTransition.style.opacity = 1
        setTimeout(() => {
          overlayEscape.style.backgroundColor = 'rgb(0,0,0)'
        }, 300)
      }

    })

    onBeforeUnmount(() => {
      clearTraces()
    })

    return { toTeleport, vanishSphere, earlyTransition, clearTraces }
  }

}
</script>

<style scoped>
.overlay-escape {
  perspective: 1000px;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  overflow: hidden;
  display: flex;
}

.overlay {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  perspective: 1000px;
  display: flex;
  align-items: center;
  background: url("../../public/assets/bg1.webp") center/cover;
  overflow: hidden;
  opacity: 0.9;
  transform: translateZ(1px);
}

.portal {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateZ(-50000px);
  width: 200px;
  height: 240px;
  z-index: 10;
  border-radius: 50%;
  border: 20px solid white;
  background-color: rgb(255, 255, 255, 0.5);
  box-shadow: 0 0 50px rgb(243, 24, 71), inset 0 0 50px rgb(233, 9, 58);
}
.portal:hover {
  cursor: pointer;
}

.magic-transition {
  opacity: 0;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  z-index: 0;
  width: 100%;
  height: 30%;
  background-color: #000;
}
</style>