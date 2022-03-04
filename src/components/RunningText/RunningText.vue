<template>
  <div class="text-wrapper">
    <div class="text-wrapper__element element">
      <a
        href="https://resume.io/r/8Z9wX94Nf"
        class="element__link"
        target="_blank"
      >
        <i class="fas fa-external-link-alt element__link-to-cv"></i>
      </a>
      <h1 class="running-line">{{ firstWord }}</h1>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import runInitTextAnimation from '@/components/RunningText/initialize-runText-animation'
export default {
  props: ['words', 'firstWord'],
  name: 'RunningText',
  setup(props) {
    onMounted(() => {
      const runText = document.querySelector('.running-line')
      runInitTextAnimation(props.words, runText)
    })
  },
}
</script>


<style lang="scss" scoped>
.text-wrapper {
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transform: translateX(-50%);
  position: absolute;
  left: 50%;
  top: 35%;
  width: 50%;
  height: 20vh;

  @media (max-width: 810px) {
    height: 15vh;
    width: 70%;
  }
  @media (max-width: 810px) {
    height: 10vh;
    width: 70%;
  }
  @media (max-width: 414px) {
    width: 90%;
  }
  // .text-wrapper__element

  &__element {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.element__link-to-cv {
  font-size: 40px;
  color: #fff;
  opacity: 0.6;
  position: absolute;
  top: 4%;
  right: 1%;
  transition: all 0.4s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.5);
    color: #fff;
    opacity: 1;
  }
  @media (max-width: 414px) {
    font-size: 30px;
  }
  @media (max-width: 360px) {
    font-size: 20px;
  }
}

.element {
  // transform-style: preserve-3d;
  filter: drop-shadow(10mm -10mm 4px rgba(255, 255, 255, 0.3));
  background-color: rgba(80, 74, 74, 0.5);
}

.running-line {
  font-size: 90px;
  color: white;
  text-transform: uppercase;
  animation-name: pathWay;
  animation-duration: 4s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: paused;
  animation-timing-function: easy-in;
  transition: all 0.4s ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transform: scale(1.03);
  }
  @media (max-width: 1080px) {
    font-size: 70px;
  }
  @media (max-width: 414px) {
    font-size: 40px;
  }
}
</style>