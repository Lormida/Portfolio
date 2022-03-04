import gsap from './gsap.min.js'
import Swiper from './swiper.min'

function createSliderProjects() {
  const swiperContainer = document.querySelector(".swiper-container")
  let directionSlider = 'horizontal'
  if (innerWidth <= 810) {
    directionSlider = 'vertical'
  }

  let slider = new Swiper(swiperContainer, {
    slidesPerView: 'auto',
    spaceBetween: 150,
    direction: directionSlider,
    centeredSlides: true,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
    },
  })
  setTimeout(() => {
    swiperContainer.style.opacity = 1
  }, 200)

  slider.on('slideChange', function () {
    gsap.to('.swiper-slide-active', .5, {
      scale: .7
    })
  })

  slider.on('slideChangeTransitionEnd', function () {
    gsap.to('.swiper-slide-active', .5, {
      scale: 0.9,
      ease: Power4.easeOut,
    })
  })
}

function initializeQuestionHintSliderProjects() {
  let questionHints = document.querySelectorAll('.hintQ')
  questionHints.forEach(hint => {
    hint.addEventListener('mouseenter', (e) => {
      let textClass = e.currentTarget.dataset.hintq
      document.querySelector(`.slide-text-info-${textClass}`).style.opacity = '1'
    })
    hint.addEventListener('mouseleave', (e) => {
      let textClass = e.currentTarget.dataset.hintq
      document.querySelector(`.slide-text-info-${textClass}`).style.opacity = '0'
    })
  })
}

export default function initializeSliderProjectAnimation() {
  //---Create slider projects---
  createSliderProjects()
  //---Initialize question hint inside sliders projects---
  initializeQuestionHintSliderProjects()
}
