<template>
  <div class="container">
    <div class="spinner-container">
      <h1 class="title-details">Project details</h1>

      <a
        :href="`${projectSrcCode}`"
        target="_blank"
        class="project-name vertical-text"
        >{{ id }}</a
      >

      <div class="spinner-container__wrapper-spinner3d">
        <Spinner3d
          :id="id"
          :angle="angle"
          :transOrigin="transOrigin"
          :imageRotate="imageRotate"
          :projectSrcCode="projectSrcCode"
          :amountOfImages="amountOfImages"
          :angleOffset="angleOffset"
        ></Spinner3d>
      </div>

      <a
        :href="`${projectSrcCode}`"
        target="_blank"
        class="project-source-code vertical-text"
        >code</a
      >
    </div>

    <div class="details-container">
      <div class="details-container__wrapper-details">
        <details-section
          :id="id"
          :projectDesc="projectDesc"
          :projectSheetLeft="projectSheetLeft"
          :projectSheetRight="projectSheetRight"
        ></details-section>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { onMounted } from 'vue'
import Spinner3d from '../components/UI/Spinner3d.vue'
import DetailsSection from '../components/UI/DetailsSection.vue'

export default {
  props: ['id'],
  components: {
    Spinner3d,
    DetailsSection
  },
  setup(props) {
    console.log(props.id);

    const store = useStore()
    let spinner = null
    let angle = ref(0)
    let countScaleImage = 0
    let amountOfImages = 0

    if (props.id == 'natours') {
      amountOfImages = 9
    } else if (props.id == 'portfolio') {
      amountOfImages = 10
    } else if (props.id == 'arcanoid') {
      amountOfImages = 6
    } else if (props.id == 'coach') {
      amountOfImages = 7
    }

    let angleOffset = 360 / amountOfImages


    onMounted(() => {
      listenImage()
    })

    const listenImage = () => {
      spinner = document.querySelector('.spinner')
      spinner.addEventListener('click', (e) => {
        let imageRotateOld = Math.floor(angle.value / 360) * 360 + 360 - angleOffset * e.target.dataset.id

        let config = angleOffset * e.target.dataset.id

        if (++countScaleImage % 2 == 1) {

          e.currentTarget.setAttribute('style', `transform: rotateX(-5deg) rotateY(${imageRotateOld}deg);
           transform-origin: 50% 50% ${-transOrigin()}px`)

          e.target.setAttribute('style', `transform: rotateX(0deg) rotateY(${config}deg) scale(1.75) translateY(-10px);
          transform-origin: 50% 50% ${-transOrigin()}px;`)
        } else {

          e.currentTarget.setAttribute('style', `transform: rotateX(-17.5deg) rotateY(${imageRotateOld}deg);
          transform-origin: 50% 50% ${-transOrigin()}px`)

          e.target.setAttribute('style', `transform: rotateX(0deg) rotateY(${config}deg) scale(1.0) translateZ(0px);
       transform-origin: 50% 50% ${-transOrigin()}px;`)
        }

      })
    }
    let transOrigin = () => {
      let pixels = (20 / 3) * (-17 + 13 * amountOfImages)
      return pixels
    }

    let projectDesc = store.getters.getCurrentProjectDesc(props.id)
    let projectSheetFull = store.getters.getCurrentProjectSheet(props.id)
    let projectSrcCode = store.getters.getCurrentProjectSrcCode(props.id)
    if (projectSheetFull) {
      var psfLength = projectSheetFull.length
      var projectSheetLeft = projectSheetFull.slice(0, Math.round(psfLength / 2))
      var projectSheetRight = projectSheetFull.slice(Math.round(psfLength / 2))
    }


    const imageRotate = (sign) => {
      if (sign == '-') {
        angle.value -= angleOffset
      } else {
        angle.value += angleOffset
      }
      spinner.setAttribute('style', `transform: rotateX(-17.5deg) rotateY(${angle.value}deg);
      transform-origin: 50% 50% ${-transOrigin()}px;`)
    }

    return {
      projectDesc, projectSheetLeft, projectSheetRight, imageRotate, listenImage,
      amountOfImages, angleOffset, transOrigin, projectSrcCode, angle
    }
  }

}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: auto;
  overflow: hidden;
  background: linear-gradient(
    to top,
    rgba(59, 141, 153, 0.75),
    rgba(107, 107, 131, 0.75),
    rgba(170, 75, 107, 0.75)
  );
}
.spinner-container {
  position: relative;
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 810px) {
    height: 80vh;
  }
  @media (max-width: 414px) {
    width: 95%;
    height: 65vh;
  }
}
.project-name {
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 15%;
  left: 0%;
  position: absolute;
  text-decoration: none;
  color: #000;
  font-weight: 700;
  align-self: flex-start;
  transform: rotate(180deg) translateX(0px) /* translateY(-40px) */;
  @media (max-width: 1080px) {
    left: -10%;
  }
}
.project-source-code {
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25%;
  right: 0%;
  text-decoration: none;
  color: #000;
  font-weight: 700;
  align-self: flex-end;
  transform: rotate(180deg) translateX(0px) /* translateY(40px) */;
  @media (max-width: 1080px) {
    right: -10%;
  }
}

.title-details {
  box-sizing: border-box;
  position: absolute;
  top: 3%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 66px;
  text-align: center;
  color: #001219;
  width: fit-content;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  border: 7px solid #222;
  padding: 5px 10px;

  @media (max-width: 1080px) {
    font-size: 55px;
  }
  @media (max-width: 810px) {
    width: 70%;
  }
  @media (max-width: 414px) {
    width: 90%;
    font-size: 3.5rem;
    border-width: 4px;
  }
}
.spinner-container__wrapper-spinner3d {
  position: absolute;
  left: 50%;
  width: 100%;
  height: 75%;
  transform: translateX(-50%);
  bottom: 5%;
  @media (max-width: 810px) {
    // height: 50vh;
  }
  @media (max-width: 360px) {
    height: 80%;
  }
  @media (max-height: 640px) {
    height: 85%;
  }
}

.vertical-text {
  border: 7px solid rgba(255, 255, 255, 0.9);
  writing-mode: vertical-rl;
  padding: 20px 5px;
  display: flex;
  justify-content: center;
  line-height: 1.1;
  font-size: 70px;
  text-transform: uppercase;
  transition: all 0.5s ease;
  user-select: none;
  &:hover {
    color: #fff;
    border: 7px solid rgba(22, 22, 22);
  }
  @media (max-width: 1366px) {
    font-size: 5rem;
  }
  @media (max-width: 1080px) {
    font-size: 4rem;
  }
  @media (max-width: 414px) {
    display: none;
  }
}

.details-container {
  position: relative;
  min-height: 90vh;
  height: auto;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 414px) {
    width: 95%;
  }
}

.details-container__wrapper-details {
  margin: 0 auto;
  margin-top: 50px;
  width: 100%;
  min-height: 92%;
  background: linear-gradient(
    to right,
    rgba(22, 22, 22, 0.3),
    rgba(200, 200, 200, 0.3)
  );
  border-radius: 10px;
}
</style>