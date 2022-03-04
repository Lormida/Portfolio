<template>
  <ul class="menu-links">
    <template v-for="menuItem of menuItemLinks" :key="menuItem.href">
      <li>
        <a :href="menuItem.href" target="_blank">
          <i :class="menuItem.class"></i>
        </a>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  props: ['menuItemLinks'],
  name: "MenuLinks",

}
</script>

<style lang="scss" scoped>
// ===Menu links===
.menu-links {
  position: fixed;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  right: 2%;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: auto;

  @media (max-width: 414px) {
    min-height: 20%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    top: 80%;
  }

  li {
    margin: 10px 0;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-right: 2px solid rgba(255, 255, 255, 0.2);
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: -1px -1px 5px rgba(255, 255, 255, 1);
    height: 120px;
    width: 120px;

    @media (max-width: 414px) {
      max-width: 80px;
      max-height: 80px;
    }

    a {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      overflow: hidden;
      font-size: 1rem;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        width: 50%;
        height: 100%;
        transform: skewX(45deg) translateX(-200%);
        left: 0;
        background-color: rgba(255, 255, 255, 0.3);
        z-index: 100;
        transition: 0.4s all ease;
      }
      &:hover::after {
        transform: skewX(45deg) translateX(300%);
      }
      svg {
        width: 100% !important;
        color: #fff;
        font-size: 4.5em;
        transition: all 0.2s ease;
        &:hover {
          color: #fff;
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>