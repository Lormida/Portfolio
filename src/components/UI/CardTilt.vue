<template>
  <section :class="classes">
    <img :src="require(`@/assets/img/${image}`)" alt="" />
    <h2 class="about-me__title">{{ title }}</h2>

    <p class="about-me__text" v-for="text of textArray" :key="text">
      {{ text }}
    </p>
  </section>
</template>

<script>
export default {
  name: 'CardTilt',
  props: {
    extraClass: String,
    textArray: Array,
    title: String,
    image: String
  },
  setup(props) {
    let getImage = `../../assets/img/${props.image}`
    const classes = 'about-me ' + `${props.extraClass}`
    return { classes, getImage }
  }
}
</script>

<style lang="scss" scoped>
.about-me {
  transform-style: preserve-3d;
  position: relative;
  padding: 1rem;
  color: #fff;
  background-color: #000;
  z-index: 2;
  height: auto;
  display: flex;
  padding: 3% 0.5%;
  flex-basis: 20%;
  flex-direction: column;
  align-items: center;
  border: 5px solid #fff;
  transform: scale(0.9);
  img {
    margin: 10px;
    clip-path: polygon(
      20% 0%,
      80% 0%,
      100% 20%,
      100% 80%,
      80% 100%,
      20% 100%,
      0% 80%,
      0% 20%
    );
    width: 150px;
    height: auto;
    transform-style: preserve-3d;
    transition: all 1s ease;
    border: 1px solid #fff;
  }
  &__title {
    transform: translateZ(20px);
    margin: 1rem;
    font-weight: 700;
    font-size: 2.6rem;
    @media (max-width: 1080px) {
      font-size: 2.2rem;
    }
    @media (max-width: 810px) {
      font-size: 2.6rem;
    }
  }
  &__text {
    transform: translateZ(5px);
    padding: 0px 10px;
    width: 100%;
    margin: 10px;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.4;
    @media (max-width: 1080px) {
      font-size: 1.2rem;
    }
    @media (max-width: 810px) {
      font-size: 1.7rem;
    }
    @media (max-width: 414px) {
      font-size: 1.5rem;
    }
  }
}
.about-me-right {
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
    rgba(240, 46, 170, 0.05) 25px 25px;
}
.about-me-left {
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
    rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px,
    rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
}
</style>