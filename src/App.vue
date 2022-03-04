<template>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="in-out">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </main>
</template>

<script>

export default {
  setup() {
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap");
.button-next {
  position: fixed;
  top: 5%;
  right: 10%;
  width: 90px;
  height: 90px;
  mask-image: url("../public/assets/svg/skip.svg");
  mask-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 9999999;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
    transform: scale(1.3);
    cursor: pointer;
  }
  @media (max-width: 450px) {
    width: 60px;
    height: 60px;
  }
}

.title-header {
  user-select: none;
  text-transform: uppercase;
  font-size: 4.5rem;
  line-height: 1.2;
  color: #fff;
  font-weight: 700;
  text-align: center;
  padding: 0 10px;
  margin: 25px auto 0 auto;
  transition: all 1s ease;
  @media (max-width: 414px) {
    font-size: 3rem;
    margin: 1rem 0;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  @media (max-width: 1080px) {
    font-size: 3.5rem;
  }
}

.btn-start {
  position: absolute;
  top: 10%;
  left: 10%;
  color: red;
}

.btn-magic {
  top: 0%;
  left: 20%;
  color: red;
}

@keyframes pathWay {
  0% {
    color: #fff;
  }

  100% {
    color: #000;
  }
}

[v-cloak] {
  display: none;
}

#canvas-ray {
  z-index: 0;
  position: absolute;
  top: 40%;
  right: 0;
  @media (max-width: 810px) {
    left: 31%;
  }
  @media (max-width: 414px) {
    width: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease 0s;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>