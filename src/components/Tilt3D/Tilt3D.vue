<template>
  <div class="about-me-container">
    <div class="compliment">
      <h2 class="title-header compliment-title">KEY SKILLS</h2>
      <p class="compliment-title-small">(praise myself)</p>
    </div>

    <div class="about-me-wrapper">
      <CardTilt
        class="card-tilt"
        :title="leftTitleTilt"
        :textArray="leftTextTilt"
        :extraClass="extraClassLeft"
        :image="imageTiltLeft"
      >
      </CardTilt>

      <Pazzles
        class="pazzles"
        :pazzlesImageSrcArray="pazzlesImageSrcArray"
        :pazzlesTitleArray="pazzlesTitleArray"
        :pazzlesTextArray="pazzlesTextArray"
      ></Pazzles>

      <CardTilt
        class="card-tilt"
        :title="rightTitleTilt"
        :textArray="rightTextTilt"
        :extraClass="extraClassRight"
        :image="imageTiltRight"
      >
      </CardTilt>
    </div>
  </div>
  <!-- //* --------------- *// -->
</template>

<script>
import Pazzles from '../UI/Pazzles.vue'
import CardTilt from '../UI/CardTilt.vue'
import { onMounted } from 'vue'
import useLeftCardTilt from '@/composition/useLeftCardTilt.js'
import useRightCardTilt from '@/composition/useRightCardTilt.js'
import usePazzles from '@/composition/usePazzles.js'

export default {
  components: {
    Pazzles,
    CardTilt
  },
  name: 'Tilt3D',
  setup() {

    const { leftTitleTilt, leftTextTilt, extraClassLeft, imageTiltLeft } = useLeftCardTilt()
    const { rightTitleTilt, rightTextTilt, extraClassRight, imageTiltRight } = useRightCardTilt()
    const { pazzlesImageSrcArray, pazzlesTitleArray, pazzlesTextArray } = usePazzles()

    onMounted(() => {
    })
    return {
      leftTitleTilt, leftTextTilt, extraClassLeft, imageTiltLeft,
      rightTitleTilt, rightTextTilt, extraClassRight, imageTiltRight,
      pazzlesImageSrcArray, pazzlesTitleArray, pazzlesTextArray
    }
  }

}
</script>

<style lang="scss">
.about-me-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  overflow: hidden;
}
.about-me-wrapper {
  z-index: 1;
  // transform-style: preserve-3d;
  perspective: 5000px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;

  @media (max-width: 810px) {
    flex-direction: column;
  }

  .card-tilt {
    order: 2;
    width: 25%;
    @media (max-width: 810px) {
      width: 50%;
      margin-top: 75px;
    }
    @media (max-width: 414px) {
      width: 75%;
    }
  }
  .pazzles {
    perspective: 700px;
    height: 60vh;
    width: 40%;
    order: 2;
    // transform-style: preserve-3d;
    @media (max-width: 810px) {
      order: 1;
      width: 78%;
      height: 40vh;
      margin-top: 130px;
      margin-bottom: -65px;
    }
    @media (max-width: 414px) {
      width: 90%;
    }
    @media (max-width: 360px) {
      height: 50vh;
    }
  }
  .about-me {
    // height: fit-content !important;
    &:nth-of-type(1)::before {
      transform: translateZ(-20px);
      content: "";
      position: absolute;
      top: -3rem;
      left: -3rem;
      width: calc(100% + 0.25rem);
      height: calc(100% + 0.25rem);
      background-color: rgba(255, 255, 255, 0.5);
    }
    &:nth-of-type(1)::after {
      transform: translateZ(-40px);
      content: "";
      position: absolute;
      top: -6rem;
      left: -6rem;
      width: calc(100% + 0.25rem);
      height: calc(100% + 0.25rem);
      background-image: linear-gradient(
        45deg,
        #f79533,
        #f37055,
        #ef4e7b,
        #a166ab,
        #5073b8,
        #1098ad,
        #07b39b,
        #6fba82
      );
      background-size: 200%;
      opacity: 0.6;
    }
    &:nth-of-type(2)::before {
      transform: translateZ(-20px);
      content: "";
      position: absolute;
      top: -3rem;
      left: 3rem;
      width: calc(100% + 0.25rem);
      height: calc(100% + 0.25rem);
      background-color: rgba(255, 255, 255, 0.5);
    }
    &:nth-of-type(2)::after {
      transform: translateZ(-40px);
      content: "";
      position: absolute;
      top: -6rem;
      left: 6rem;
      width: calc(100% + 0.25rem);
      height: calc(100% + 0.25rem);
      background-image: linear-gradient(
        45deg,
        #f79533,
        #f37055,
        #ef4e7b,
        #a166ab,
        #5073b8,
        #1098ad,
        #07b39b,
        #6fba82
      );
      opacity: 0.6;
    }
  }
}

.compliment {
  position: relative;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-title {
    transform-style: preserve-3d;
    font-size: 5rem;
    font-weight: 700;
    color: #fff;
    transition: all 2s ease;

    @media (max-width: 414px) {
      font-size: 4rem;
    }

    &:hover {
      cursor: pointer;
      color: transparent;
      -webkit-text-stroke: 1px rgba(255, 255, 255, 1);
      transform: scale(1.3);
    }
  }
  &-title-small {
    font-size: 2rem;
    font-weight: 300;
    z-index: 100;
  }
}
</style>