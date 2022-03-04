<template>
  <!-- <BackgroundSpace></BackgroundSpace> -->
  <div>
    <Menu3D></Menu3D>
    <div class="home-overlay">
      <div class="container-greetings" id="section0">
        <RunningText :words="words" firstWord="meaning of life"></RunningText>
      </div>

      <div class="container-about" id="section1">
        <Tilt3D></Tilt3D>
      </div>

      <!-- HOME', 'KEY SKILLS', 'WAY OF DEV', 'LAST WORKS -->
      <div class="container-skills" id="section2">
        <Chart></Chart>
        <Ufo></Ufo>
      </div>

      <ProjectSlider
        class="container-slider"
        id="section3"
        v-cloak
      ></ProjectSlider>
    </div>
  </div>
</template>

<script>
import Menu3D from '../components/Menu3D/Menu3D.vue'
import RunningText from '../components/RunningText/RunningText.vue'
import Tilt3D from '../components/Tilt3D/Tilt3D.vue'
import Chart from '../components/Chart/Chart.vue'
import Ufo from '../components/Ufo/Ufo.vue'

// Async animation
import runInitTilt3D from '../components/Tilt3D/runInitTilt3D'
import { runInitChartAnimation } from '../components/Chart/initialize-chart-animation'
import { runInitUfoAnimation } from '../components/Ufo/initialize-ufo-animation'

import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {
    Menu3D,
    RunningText,
    Tilt3D,
    Chart,
    Ufo,
  },
  setup() {
    const store = useStore()
    const words = store.getters.getWords

    const useDebounce = (fn, ms, limiter) => {
      let isCooldown = false
      return function () {
        if (isCooldown || limiter) return
        limiter = fn()
        isCooldown = true
        setTimeout(() => {
          isCooldown = false
        }, ms)
      }
    }
    const watchScrollYPuzzles = () => {
      if (scrollY / innerHeight > 0.8 && scrollY / innerHeight < 2) {
        runInitTilt3D()
        return true
      }
    }
    const watchScrollYChartAndUfo = () => {
      if (scrollY / innerHeight > 1.8 && scrollY / innerHeight < 3) {
        runInitChartAnimation()
        runInitUfoAnimation()
        return true
      }
    }

    const watchScrollYPuzzlesAdvanced = useDebounce(watchScrollYPuzzles, 100, false)
    const watchScrollYChartAndUfoAdvanced = useDebounce(watchScrollYChartAndUfo, 100, false)

    onMounted(() => {
      if (innerHeight < 700 || innerWidth < 1080) {
        runInitTilt3D()
        runInitChartAnimation()
        runInitUfoAnimation()

      } else {
        window.addEventListener('scroll', function () {
          watchScrollYPuzzlesAdvanced()
          watchScrollYChartAndUfoAdvanced()
        })
      }
    })

    return { words }
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
html {
}

.home-overlay {
  height: auto;
  width: 100%;
  background: linear-gradient(to right, #8f3c66, #012754);
}
.container-greetings {
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: auto;
  overflow: hidden;
  border-bottom: 4px solid rgba(255, 255, 255, 0.4);
}
.container-skills {
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: auto;
  overflow: hidden;
  @media (max-width: 810px) {
    flex-direction: column;
    align-items: center;
  }
}
.container-about {
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  min-height: 100vh;
  height: auto;
  margin-top: 35px;
  color: #fff;
  font-size: 62.5%;
  // perspective: 500px;
  border-bottom: 4px solid rgba(255, 255, 255, 0.4);
}
.container-slider {
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: auto;
  overflow: hidden;
  border-top: 4px solid rgba(255, 255, 255, 0.4);
}
#chart {
  width: 100% !important;
  height: 80vh;
  @media (max-width: 414px) {
    height: 70vh;
    transform: scale(0.95);
  }
}
#canvas-ray {
  @media (max-width: 810px) {
    width: 70%;
    left: 15%;
    top: 30%;
    height: 50vh;
  }
  @media (max-width: 414px) {
    width: 60%;
    left: 20%;
    height: 50vh;
  }
}
</style>
