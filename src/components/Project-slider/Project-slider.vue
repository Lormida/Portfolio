<template>
  <div class="container-project-slider slider">
    <h2 class="title-header slider__title">my last works</h2>
    <div class="slider__background-text-wrapper">
      <p class="slider__background-text">projects</p>
    </div>

    <div class="swiper swiper-container">
      <div class="swiper-wrapper">
        <template
          v-for="(photo, index) of arrayOfHomeImagesPortfolio"
          :key="index"
        >
          <div class="swiper-slide">
            <div class="img-wrapper">
              <img
                class="photo front-photo"
                :src="require(`@/assets/img/${photo}1.webp`)"
                alt=""
              />
              <img
                class="photo back-photo"
                :src="require(`@/assets/img/${photo}2.webp`)"
                alt=""
              />
              <router-link
                :to="`/details/${photo}`"
                class="hintQ"
                :data-hintQ="index"
              >
                <!-- <router-link :to="`/details/${index}`"> -->
                <i class="far fa-question-circle question-circle"></i>
                <!-- </router-link> -->
              </router-link>
              <a :href="linksToGithub[photo]" target="_blank">
                <i class="fas fa-external-link-alt external-link"></i>
              </a>
              <span :class="`slide-text-info slide-text-info-${index}`">
                {{ photo }}
              </span>
            </div>
          </div>
        </template>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import initSlider from "@/../public/js/initialize-slider-project-animation.js"
import { useStore } from 'vuex'
import { onMounted } from 'vue'
export default {
  name: 'ProjectSlider',
  setup() {
    const store = useStore()
    let arrayOfHomeImagesPortfolio = ['natours', 'portfolio', 'arcanoid', 'coach']
    let linksToGithub = {
      natours: 'https://github.com/Lormida/Natours',
      portfolio: 'https://github.com/Lormida/Portfolio',
      arcanoid: 'https://github.com/Lormida/MultiArcanoid',
      coach: 'https://github.com/Lormida/Coach'
    }

    onMounted(() => {
      initSlider()
    })

    return { arrayOfHomeImagesPortfolio, linksToGithub }
  }

}
</script>

<style lang="scss" scoped>
@import url("https://unpkg.com/swiper@7/swiper-bundle.min.css");

@mixin adaptive-value($property, $start-size, $min-size) {
  $add-size: $start-size - $min-size;
  $max-width: 1920;
  $min-width: 360;
  #{$property}: calc(
    (#{$min-size + px}) +
      ($add-size * (100vw - (#{$min-width + px})) / ($max-width - $min-width))
  );
}
.container-project-slider {
  opacity: 0.8;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.slider__title {
  width: 100%;
  height: fit-content;
  @media (max-width: 414px) {
    font-size: 3rem;
    margin: 1rem 0;
  }
}
.slider__background-text-wrapper {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}
.slider__background-text {
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
  @include adaptive-value(letter-spacing, -22, -10);
  @include adaptive-value(font-size, 420, 110);
}

.swiper {
}
.swiper-container {
  overflow: hidden;
  opacity: 0;
  margin-top: 25px;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: 810px) {
    height: 80vh;
  }
}
.swiper-wrapper {
  @media (max-width: 810px) {
    width: 100%;
  }
  //
}
.swiper-slide {
  border-radius: 10px !important;
  transform: scale(0.8);
  width: 800px;
  height: 500px;
  @media (max-width: 810px) {
    width: 100%;
    height: 40vh;
  }
}
.img-wrapper {
  box-shadow: 0px 0px 12px 2px rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 1);
  border-radius: 15px;
  position: relative;
  width: 100%;
  height: 100%;
  &:hover {
    .front-photo {
      opacity: 0;
    }
    .back-photo {
      opacity: 1;
    }
  }
}
.photo {
  border-radius: 15px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 1s linear;
}
.front-photo {
  opacity: 1;
}
.back-photo {
  opacity: 0;
}
.hintQ {
  padding: 10px;
  width: 90px;
  height: auto;
  color: #fff;
  top: 50%;
  transform: translateY(-50%);
  left: 1%;
  z-index: 3;
  position: absolute;
  opacity: 0.5;
  transition: all 0.7s ease;
  &:hover {
    transform: translateY(-50%) scale(1.4);
    cursor: pointer;
    opacity: 1;
    color: #fff;
  }
}

.question-circle {
  width: 100%;
  height: auto;
}

.external-link {
  padding: 10px;
  width: 90px;
  height: auto;
  color: #fff;
  top: 50%;
  transform: translateY(-50%);
  right: 1%;
  z-index: 3;
  position: absolute;
  opacity: 0.5;
  transition: all 0.7s ease;
  &:hover {
    transform: translateY(-50%) scale(1.4);
    cursor: pointer;
    opacity: 1;
  }
}
.swiper-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  position: relative !important;
  left: 50% !important;
  margin-top: 20px;
  border-radius: 5px;
  transform: translateX(-50%) !important;
  width: fit-content !important;
  background-color: rgba(255, 255, 255, 0.15) !important;
}

.swiper-container {
  //
}

.slide-text-info {
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 55px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 900;
  color: #fff;
  transition: all 1s ease;
}
</style>