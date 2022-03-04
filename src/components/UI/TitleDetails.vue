<template>
  <h2 class="title">&lt;/<slot>Default text</slot>&gt;</h2>
</template>

<script>
export default {
  name: 'TitleDetails'
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 45px;
  text-align: center;
  color: #001219;
  margin: 20px auto 30px auto;
  width: fit-content;
  // position: relative;
  padding: 5px 10px;
  text-align: center;
  line-height: 1.1;
  text-transform: uppercase;
  font-weight: 500;
  border-bottom: 4px solid #fff;
  border-top: 4px solid #fff;
  @media (max-width: 414px) {
    font-size: 3rem;
  }
}
</style>