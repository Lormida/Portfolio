<template>
  <div class="pazzles">
    <template v-for="item of pazzlesImageSrcArray.length" :key="item">
      <div class="pazzles__item" :class="`item${item}`">
        <div class="pazzles__content">
          <img
            :src="require(`@/assets/img/${pazzlesImageSrcArray[item - 1]}`)"
            alt=""
          />
          <span class="pazzles__item-title">
            {{ pazzlesTitleArray[item - 1] }}
          </span>
          <span class="pazzles__item-text">
            {{ pazzlesTextArray[item - 1] }}</span
          >
        </div>
      </div>
    </template>
  </div>
</template>

<script>

export default {
  props: ['pazzlesImageSrcArray', 'pazzlesTitleArray', 'pazzlesTextArray'],
}
</script>

<style lang="scss" scoped>
.pazzles {
  opacity: 0;
  z-index: 0;
  position: relative;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  // transform-style: preserve-3d;
  top: -5%;

  // .pazzles__item

  &__item {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    // transform-style: preserve-3d;
    background-color: #222;
    position: relative;
    width: 40%;
    height: 40%;
  }

  // .pazzle-content

  &__content {
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }

  // .pazzles__item-title

  &__item-title {
    margin-top: 5%;
    font-size: 2.5rem;
    font-weight: 700;
    position: relative;
    line-height: 1.5;
    @media (max-width: 414px) {
      line-height: 1.2;
      font-size: 1.8rem;
    }
  }

  // .pazzles__item-text

  &__item-text {
    margin-top: 1rem;
    font-size: 1.2rem;
    width: 70%;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: 1.2rem;
    }
    @media (max-width: 414px) {
      top: 5%;
      line-height: 1.2;
    }
  }

  img {
    position: relative;
    max-width: 45px;
    height: auto;
    @media (max-width: 414px) {
      max-width: 30px;
    }
  }
}

.item1 {
  z-index: 3;
  position: absolute;
  height: 50%;
  width: 58.33%;
  left: 0;
  top: 0;

  .pazzles__content {
    top: 15%;
    @media (max-width: 414px) {
      top: 5%;
    }
  }
  .pazzles__item-text {
    text-align: left;
    align-self: flex-start;
    padding-left: 5%;
  }
  clip-path: polygon(
    0 0,
    0 100%,
    28.57% 100%,
    28.57% 83.34%,
    57% 83.34%,
    57% 100%,
    85.71% 100%,
    85.71% 66.66%,
    100% 66%,
    100% 33.33%,
    85.71% 33.33%,
    85.71% 0
  );
}
.item2 {
  z-index: 2;
  .pazzles__content {
    top: 15%;
    @media (max-width: 414px) {
      top: 5%;
    }
  }
  .pazzles__item-text {
    text-align: right;
    align-self: flex-end;
    padding-right: 5%;
  }
  position: absolute;
  right: 0;
  top: 0;

  width: 50%;
  height: 58.33%;
  clip-path: polygon(
    0 0,
    0 28.57%,
    16.66% 28.57%,
    16.66% 57.14%,
    0 57.14%,
    0 85.71%,
    33.33% 85.71%,
    33.33% 100%,
    66.66% 100%,
    66.66% 85.71%,
    100% 85.71%,
    100% 0
  );
}
.item3 {
  .pazzles__content {
    bottom: 25%;
    @media (max-width: 414px) {
      bottom: 15%;
    }
    /*  @media (max-width: 360px) {
      bottom: 5%;
    } */
  }
  .pazzles__item-text {
    text-align: left;
    align-self: flex-start;
    padding-left: 5%;
  }
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 58.33%;
  clip-path: polygon(
    0% 100%,
    0 14.28%,
    33.33% 14.28%,
    33.33% 0,
    66.66% 0,
    66.66% 14.28%,
    100% 14.28%,
    100% 42.85%,
    83.33% 42.85%,
    83.33% 71.42%,
    100% 71.42%,
    100% 100%
  );
  .pazzles__content {
  }
}
.item4 {
  .pazzles__content {
    bottom: 25%;
    @media (max-width: 414px) {
      bottom: 15%;
    }
  }
  .pazzles__item-text {
    text-align: right;
    align-self: flex-end;
    padding-right: 5%;
  }
  z-index: 3;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 58.33%;
  height: 50%;
  clip-path: polygon(
    14.28% 100%,
    14.28% 66.66%,
    0 66.66%,
    0 33.33%,
    14.28% 33.33%,
    14.28% 0,
    42.85% 0,
    42.85% 16.66%,
    71.42% 16.66%,
    71.42% 0,
    100% 0,
    100% 100%
  );
}
</style>