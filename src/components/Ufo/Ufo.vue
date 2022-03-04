<template>
  <div class="ufo-container ufo">
    <h1 class="ufo__title title-header">Other things i have experience with</h1>
    <img class="ufo__image" src="@/assets/img/ufo3.webp" alt="" />

    <div class="surface-wrapper">
      <h3 class="surface">Axios, Postman, Parcel</h3>
      <h3 class="surface">Materialize CSS, Bootstrap, Chart.js</h3>
      <h3 class="surface">Mapbox, Stripe, Admin Bro, Mailtrap</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ufo',
  setup() {

  }

}
</script>

<style lang="scss" scoped>
.ufo-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  order: 1;
  position: relative;
  width: 35%;
  height: 100vh;
  @media (max-width: 810px) {
    width: 90%;
    height: 90vh;
  }
}
.ufo {
  visibility: hidden;

  // .ufo__title

  &__title {
    z-index: 2;
    @media (max-width: 414px) {
      font-size: 2.8rem;
      margin: 2.5rem 0;
    }
    @media (max-width: 360px) {
      font-size: 3rem;
      margin: 2rem 0;
    }
  }

  // .ufo__image

  &__image {
    z-index: 1;
    position: absolute;
    top: 24%;
    height: 20%;
    width: auto;
    @media (max-width: 810px) {
      top: 15%;
    }
    @media (max-width: 414px) {
      width: 90%;
      top: 20%;
    }
  }
}

.surface-wrapper {
  width: 100%;
  height: 50%;
  z-index: 1;
  perspective: 500px;
  // transform-style:preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 40%;
  right: 0;
  @media (max-width: 810px) {
    top: 30%;
  }
  @media (max-width: 414px) {
    top: 40%;
  }
}

.surface {
  transform: rotateY(-40deg) rotateZ(4deg) rotateX(25deg) translateX(-45px)
    translateY(0px);
  z-index: 2;
  transform-style: preserve-3d;
  width: fit-content;
  border: 3px solid #fff;
  color: #fff;
  font-size: 1.7rem;
  margin: 10px 0;
  background-color: #000;
  padding: 0.25em 1rem;
  @media (max-width: 810px) {
    font-size: 2rem;
  }
}
.surface:nth-of-type(1) {
  align-self: center;
}
.surface:nth-of-type(2) {
  align-self: center;
}
.surface:nth-of-type(3) {
  align-self: center;
}
</style>