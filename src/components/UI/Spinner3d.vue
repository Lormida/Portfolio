<template>
  <section class="spinner-3d">
    <div class="container-wrapper">
      <title-details>Details puctures</title-details>
      <div class="slider">
        <div
          class="spinner"
          :style="`transform: rotateX(-17.5deg) rotateY(${angle}deg);
          transform-origin: 50% 50% ${-transOrigin()}px`"
        >
          <img
            v-for="idx of amountOfImages"
            :style="`transform: rotateY(${angleOffset * idx}deg);
transform-origin: 50% 50% ${-transOrigin()}px`"
            :data-id="idx"
            :key="idx"
            class="image-slider"
            :src="require(`@/../public/assets/details/${id}/${idx}.webp`)"
            alt=""
          />
        </div>
      </div>

      <div class="wheel-arrows">
        <span class="wheel-arrows__left" @click="imageRotate('-')"
          ><i class="fas left-arrow fa-chevron-left"></i
        ></span>
        <span class="wheel-arrows__right" @click="imageRotate('+')"
          ><i class="fas right-arrow fa-chevron-right"></i
        ></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['id', 'angle', 'transOrigin', 'imageRotate', 'projectSrcCode', 'amountOfImages', 'angleOffset']

}
</script>

<style lang="scss" scoped>
.spinner-3d {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 414px) {
    margin-top: 2rem;
  }
  @media (max-height: 640px) {
    margin-top: 4rem;
  }

  .container-wrapper {
    background: linear-gradient(
      to right,
      rgba(253, 252, 239, 0.5),
      rgba(217, 167, 199, 0.3)
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
    @media (max-width: 810px) {
      border-radius: 5px;
    }
  }
  .slider {
    z-index: 1;
    height: 350px;
    width: 450px;
    perspective: 800px;
    position: relative;
    top: -10%;
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 810px) {
      transform: scale(0.7);
    }
    @media (max-width: 414px) {
      transform: scale(0.45);
    }
    @media (max-width: 360px) {
      transform: scale(0.4) translateY(-70px);
    }
  }
  .spinner {
    transform: rotateX(-17.5deg);
    transform-style: preserve-3d;
    transition: all 1s ease;
    img {
      transition: all 1s ease;
      position: absolute;
      min-height: 270px;
      width: 450px;
      object-fit: scale-down;
    }
  }
  .wheel-arrows {
    position: relative;
    bottom: 5%;
    width: 60%;
    display: flex;
    justify-content: space-between;
  }
  .wheel-arrows__left,
  .wheel-arrows__right {
    font-size: 8rem;
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 1080px) {
      font-size: 5rem;
    }
  }
}
</style>