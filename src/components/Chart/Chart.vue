<template>
  <div class="canvas-container">
    <h1 class="chart-title title-header">way of development</h1>
  </div>
</template>

<script>
export default {
  name: 'Chart',
  setup() {
  }
}
</script>

<style lang="scss" scoped>
.canvas-container {
  position: relative;
  width: 65%;
  height: auto;
  @media (max-width: 810px) {
    width: 90%;
  }
}
.chart-title {
  @media (max-width: 1080px) {
    font-size: 3.5rem;
  }
  @media (max-width: 414px) {
    font-size: 2.8rem;
    margin: 2.5rem 0;
  }
  @media (max-width: 360px) {
    font-size: 3rem;
    margin: 2rem 0;
  }
}
canvas#chart {
  width: 100%;
}
</style>