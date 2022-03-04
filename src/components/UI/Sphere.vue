<template>
  <!-- Внешняя обертка для контейнера сферы которая позволяет той путешствовать в 3д (?) -->
  <div class="surface-external" @click="$emit('vanish-sphere')">
    <!-- Контейнер для сферы и шариков -->
    <div class="container" @click="vanishSphere">
      <div class="container__sphere"></div>

      <!--  Двигающуюся шарик по орбите Х -->
      <div id="orbit-x">
        <div class="ball-x"></div>
      </div>

      <!--  Двигающуюся шарик по орбите Y -->
      <div id="orbit-y">
        <div class="ball-y"></div>
      </div>

      <!-- Двигающаяся по кругу плоскость -->
      <div class="text-wrapper">
        <span class="text-curved" data-text="click to start">
          click to start
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.surface-external {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  perspective: 1000px;
}

.container {
  transform: rotateZ(-25deg);
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  perspective: 1000px;
  transform-style: preserve-3d;
  width: 450px;
  height: 450px;
  margin: 0 auto;
  z-index: 1;
  display: flex;
  justify-content: center;
  position: relative;
}
.container:hover {
  cursor: pointer;
  transform: rotateZ(-25deg) scale(0.995);
  opacity: 0.5;
}

.container__sphere {
  width: 100%;
  height: 450px;
  background: url("../../../public/assets/balls/ball2.webp") center/contain
    no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.95;
  z-index: -1;
  font-size: 20em;
  text-align: center;
  text-shadow: 20px 20px 40px #000000;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(243, 84, 84, 0.589) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media (max-width: 414px) {
    width: 350px;
    height: 350px;
  }
}

#orbit-x {
  position: absolute;
  width: 100px;
  height: 100px;
  transform-origin: center center;
  transform-style: preserve-3d;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: orbitX 1s linear infinite;
}
.ball-x {
  background: url("../../../public/assets/balls/ball-min.webp") center/contain;
  width: 50%;
  height: 50%;
  animation: antispinX 1s linear infinite;
}

#orbit-y {
  position: absolute;
  width: 100px;
  height: 100px;
  transform-origin: center center;
  transform-style: preserve-3d;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: orbitY 1.5s linear infinite;
}
.ball-y {
  background: url("../../../public/assets/balls/ball2-min.webp") center/contain;
  width: 50%;
  height: 50%;
  animation: antispinY 1.5s linear infinite;
}

.text-wrapper {
  padding: 5px 0;
  position: absolute;
  width: fit-content;
  height: auto;
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: textWrapperX 6s linear infinite;
}
@keyframes orbitX {
  0% {
    transform: rotateY(0deg) translateZ(225px);
  }
  50% {
    transform: rotateY(180deg) translateZ(225px);
  }
  100% {
    transform: rotateY(360deg) translateZ(225px);
  }
}
@keyframes textWrapperX {
  0% {
    transform: rotateY(0deg) translateZ(220px);
  }
  45% {
    transform: rotateY(90deg) translateZ(220px);
  }
  50% {
    transform: rotateY(180deg) translateZ(220px);
  }
  55% {
    transform: rotateY(270deg) translateZ(220px);
  }
  100% {
    transform: rotateY(360deg) translateZ(220px);
  }
}

@keyframes antispinX {
  0% {
    transform: rotateY(360deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}

@keyframes orbitY {
  0% {
    transform: rotateX(0deg) translateZ(225px);
  }
  50% {
    transform: rotateX(180deg) translateZ(225px);
  }
  100% {
    transform: rotateX(360deg) translateZ(225px);
  }
}

@keyframes antispinY {
  0% {
    transform: rotateX(360deg);
  }
  50% {
    transform: rotateX(180deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes textX {
  0% {
    transform: translateZ(0px);
  }
  50% {
    /* transform: translateZ(-0px); */
  }
  100% {
    transform: translateZ(0px);
  }
}

@keyframes super-shadow {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}

.text-wrapper {
  overflow: hidden;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-curved {
  height: 50%;
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 3rem;
  padding: 3rem;
  letter-spacing: 0px;
  text-transform: uppercase;
  animation: textX 6s linear infinite;
  @media (max-width: 414px) {
    font-size: 2.5rem;
  }
}
.text-curved:before,
.text-curved:after {
  padding: 30px;
  color: white;
  content: attr(data-text);
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  overflow: hidden;
  top: 0;
}
.text-curved:before {
  left: 3px;
  text-shadow: -2px 0 red;
  animation: glitch-1 2s linear infinite reverse;
}
.text-curved:after {
  left: -3px;
  text-shadow: -2px 0 blue;
  animation: glitch-2 2s linear infinite reverse;
}
@keyframes glitch-1 {
  0% {
    clip: rect(132px, auto, 101px, 30px);
  }
  5% {
    clip: rect(17px, auto, 94px, 30px);
  }
  10% {
    clip: rect(40px, auto, 66px, 30px);
  }
  15% {
    clip: rect(87px, auto, 82px, 30px);
  }
  20% {
    clip: rect(137px, auto, 61px, 30px);
  }
  25% {
    clip: rect(34px, auto, 14px, 30px);
  }
  30% {
    clip: rect(133px, auto, 74px, 30px);
  }
  35% {
    clip: rect(76px, auto, 107px, 30px);
  }
  40% {
    clip: rect(59px, auto, 130px, 30px);
  }
  45% {
    clip: rect(29px, auto, 84px, 30px);
  }
  50% {
    clip: rect(22px, auto, 67px, 30px);
  }
  55% {
    clip: rect(67px, auto, 62px, 30px);
  }
  60% {
    clip: rect(10px, auto, 105px, 30px);
  }
  65% {
    clip: rect(78px, auto, 115px, 30px);
  }
  70% {
    clip: rect(105px, auto, 13px, 30px);
  }
  75% {
    clip: rect(15px, auto, 75px, 30px);
  }
  80% {
    clip: rect(66px, auto, 39px, 30px);
  }
  85% {
    clip: rect(133px, auto, 73px, 30px);
  }
  90% {
    clip: rect(36px, auto, 128px, 30px);
  }
  95% {
    clip: rect(68px, auto, 103px, 30px);
  }
  100% {
    clip: rect(14px, auto, 100px, 30px);
  }
}
@keyframes glitch-2 {
  0% {
    clip: rect(129px, auto, 36px, 30px);
  }
  5% {
    clip: rect(36px, auto, 4px, 30px);
  }
  10% {
    clip: rect(85px, auto, 66px, 30px);
  }
  15% {
    clip: rect(91px, auto, 91px, 30px);
  }
  20% {
    clip: rect(148px, auto, 138px, 30px);
  }
  25% {
    clip: rect(38px, auto, 122px, 30px);
  }
  30% {
    clip: rect(69px, auto, 54px, 30px);
  }
  35% {
    clip: rect(98px, auto, 71px, 30px);
  }
  40% {
    clip: rect(146px, auto, 34px, 30px);
  }
  45% {
    clip: rect(134px, auto, 43px, 30px);
  }
  50% {
    clip: rect(102px, auto, 80px, 30px);
  }
  55% {
    clip: rect(119px, auto, 44px, 30px);
  }
  60% {
    clip: rect(106px, auto, 99px, 30px);
  }
  65% {
    clip: rect(141px, auto, 74px, 30px);
  }
  70% {
    clip: rect(20px, auto, 78px, 30px);
  }
  75% {
    clip: rect(133px, auto, 79px, 30px);
  }
  80% {
    clip: rect(78px, auto, 52px, 30px);
  }
  85% {
    clip: rect(35px, auto, 39px, 30px);
  }
  90% {
    clip: rect(67px, auto, 70px, 30px);
  }
  95% {
    clip: rect(71px, auto, 103px, 30px);
  }
  100% {
    clip: rect(83px, auto, 40px, 30px);
  }
}

@keyframes animate {
  0% {
    box-shadow: 0 0 50px #0f0, inset 0 0 50px #0f0;
    filter: hue-rotate(0deg);
  }
  20% {
    box-shadow: 0 0 60px #0f0, inset 0 0 60px #0f0;
  }
  40% {
    box-shadow: 0 0 40px #0f0, inset 0 0 40px #0f0;
  }
  60% {
    box-shadow: 0 0 80px #0f0, inset 0 0 80px #0f0;
  }
  80% {
    box-shadow: 0 0 100px #0f0, inset 0 0 100px #0f0;
  }
  100% {
    box-shadow: 0 0 50px #0f0, inset 0 0 50px #0f0;
    filter: hue-rotate(360deg);
  }
}
</style>