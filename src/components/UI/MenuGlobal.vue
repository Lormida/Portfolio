<template>
  <div class="menu-global">
    <template v-for="(item, index) of menuItemsName" :key="index">
      <div class="menu-global__item">
        <div class="side" @click="triggerMenuItem" :data="index">
          <a
            class="side__link"
            style="
              width: 100%;
              min-height: 100%;
              text-align: center;
              text-decoration: none;
              color: #fff;
            "
            href="#"
            v-scroll-to="{
              el: `#section${index}`,
              duration: 1000,
              lazy: false,
              easing: 'ease-out',
              offset: 0,
              force: true,
              cancelable: true,
              x: false,
              y: true,
            }"
            >{{ item }}</a
          >
        </div>
      </div>
    </template>
    <div class="menu-global__item">
      <div class="side">
        <router-link
          class="side__link"
          style="
            width: 100%;
            min-height: 100%;
            text-align: center;
            text-decoration: none;
            color: #fff;
          "
          to="/start"
          >RESTART</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['menuItemsName'],
  name: 'MenuGlobal',
  setup(props) {
    const triggerMenuItem = () => {

    }
    return { triggerMenuItem }
  }
}
</script>

<style lang="scss" scoped>
// ===Global menu===
.menu-global {
  // transform-style: preserve-3d;
  position: fixed;
  z-index: 2;
  margin-left: 70px;
  margin-top: 50px;
  width: 500px;
  height: 500px;
  display: none;
  perspective: 0;
  flex-direction: column;
  will-change: perspective;

  @media (max-width: 414px) {
    margin: 0 auto;
    margin-top: 30px;
    width: 100%;
    display: flex !important;
    flex-direction: column;
    align-items: flex-end;
  }

  &__item {
    will-change: transform;
    display: flex;
    margin: 10px auto;
    margin-left: 120px;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 60px;
    width: 400px;
    box-shadow: -38px -11px 21px 3px rgb(72 202 228 / 18%);
    transform-style: preserve-3d;
    transform: rotateX(-10deg) rotateY(25deg) rotateZ(0deg);

    &:nth-of-type(1) {
      transform: rotateX(-10deg) rotateY(25deg) translateZ(-40px);
    }
    &:nth-of-type(2) {
      transform: rotateX(-10deg) rotateY(25deg) translateZ(-30px);
    }
    &:nth-of-type(3) {
      transform: rotateX(-10deg) rotateY(25deg) translateZ(-20px);
    }
    &:nth-of-type(4) {
      transform: rotateX(-10deg) rotateY(25deg) translateZ(-10px);
    }
    @media (max-width: 414px) {
      margin-left: 0;
      margin-right: 2.5%;
      width: 80%;
      transform-style: flat;
      transform: none !important;
    }
  }
  .side {
    position: absolute;
    user-select: none;
    opacity: 0.7;
    color: #fff;
    font-size: 3rem;
    border: 2px solid rgba(255, 255, 255, 1);
    width: 400px;
    height: 60px;
    background-color: rgba(22, 22, 22, 0.25);
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: rgba(239, 230, 229, 0.9);
      transform: translateZ(80px);
      color: #000;
      border-color: transparent;
    }
    @media (max-width: 414px) {
      transform-style: flat;
      width: 100%;
    }
  }
}
.side__link {
  width: 100%;
  min-height: 100% !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>