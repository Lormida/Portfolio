<template>
  <div class="text-wrapper">
    <title-details>Details description</title-details>

    <template v-if="projectDesc">
      <p class="text-wrapper__text">{{ projectDesc[0] }}</p>

      <p class="text-wrapper__text" v-if="id == 'natours'">
        This project was developed completely from scratch as a course in
        <a
          class="text-wrapper__link"
          target="_blank"
          href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
          >udemy</a
        >.
      </p>
      <p
        class="text-wrapper__text"
        v-for="el of projectDesc.length - 1"
        :key="el"
      >
        {{ projectDesc[el] }}
      </p>
    </template>

    <title-details>Stack technologies</title-details>
    <div class="techsheet-wrapper">
      <ul class="techsheet-wrapper__list">
        <li
          class="techsheet-wrapper__element"
          :style="`background: rgba(22,22,22,${
            0.1 + 0.07 * idx
          }); padding : 2% 5%;`"
          v-for="(el, idx) in projectSheetLeft"
          :key="el"
        >
          {{ el }}
        </li>
      </ul>

      <ul class="techsheet-wrapper__list">
        <li
          class="techsheet-wrapper__element"
          :style="`background: rgba(22,22,22,${
            0.1 + 0.07 * idx
          }); padding : 2% 5%;`"
          v-for="(el, idx) in projectSheetRight"
          :key="el"
        >
          {{ el }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TitleDetails from './TitleDetails.vue'
export default {
  components: { TitleDetails },
  props: ['projectDesc', 'projectSheetLeft', 'projectSheetRight', 'id']
}
</script>
<style lang="scss" scoped>
.text-wrapper {
  padding: 20px 0;
}
.text-wrapper__text {
  text-indent: 40px;
  padding: 5px 15px;
  font-size: 3.5rem;
  line-height: 1.2;
  color: rgba(22, 22, 22, 0.9);
  margin: 0 0;
  @media (max-width: 600px) {
    font-size: 2.7rem;
  }
  @media (max-width: 414px) {
    font-size: 2rem;
  }
}
.text-wrapper__link {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 4px solid #000;
  font-size: 3.5rem;
  transition: all 0.5s ease;
  &:hover {
    color: #000;
    border-bottom: 4px solid rgba(255, 255, 255, 0.5);
  }
  @media (max-width: 414px) {
    font-size: 2rem;
  }
}
.techsheet-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-content: center;
}
.techsheet-wrapper__list {
  padding: 0 10px 10px 10px;
  flex-basis: 40%;
  margin: 2% 5%;
  @media (max-width: 1000px) {
    flex-basis: 80%;
  }
}
.techsheet-wrapper__element {
  font-size: 35px;
  position: relative;
  list-style: none;
  @media (max-width: 600px) {
    font-size: 25px;
  }
  &::before {
    font-family: "Font Awesome 5 Free";
    content: "\f14a";
    padding-right: 15px;
    font-weight: 900;
  }
  @media (max-width: 414px) {
    font-size: 2rem;
  }
}
</style>