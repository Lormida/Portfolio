<template>
  <canvas width="100%" height="100vh" id="space-canvas"></canvas>
</template>

<script>
import createCanvasBackground from '@/components/BackgroundSpace/background-space'
import { onMounted } from 'vue'
export default {
  name: 'BackgroundSpace',
  setup() {
    onMounted(() => {
      //* === Creating canvas background ===
      createCanvasBackground()
    })
  }
}
</script>

<style lang="scss">
// ===Canvas background===
#space-canvas {
  position: fixed;
  left: 0%;
  top: 0%;
  z-index: -1;
}
</style>