<template>
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="bars"
    class="burger-menu-global"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
    ></path>
  </svg>
  <MenuGlobal :menuItemsName="menuItemsName"></MenuGlobal>
  <MenuLinks :menuItemLinks="menuItemLinks"></MenuLinks>
</template>

<script>
import MenuLinks from '@/components/UI/MenuLinks'
import MenuGlobal from '@/components/UI/MenuGlobal'
import { onMounted } from 'vue'
import runInitMenuAnimation from '@/components/Menu3D/initialize-menu-animation'
import useMenu3D from '@/composition/useMenu3D'

export default {
  props: ['menuLinks', 'menuItemsName'],
  name: 'Menu3D',
  components: {
    MenuGlobal,
    MenuLinks
  },
  setup() {
    onMounted(() => {
      runInitMenuAnimation()
    })
    const { menuItemLinks, menuItemsName } = useMenu3D()
    return { menuItemLinks, menuItemsName }
  }
}
</script>

<style lang="scss" scoped>
.burger-menu-global {
  color: #fff;
  z-index: 11;
  position: fixed;
  top: 50%;
  left: -3%;
  transform: translateY(-50%);
  width: 100px;
  height: 100px;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: translateY(-50%) scale(1.3);
  }
  @media (max-width: 414px) {
    width: 60px;
  }
}
</style>