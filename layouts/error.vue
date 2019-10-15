<template>
  <div class="d-flex flex-column jc-center ai-center w-100">
    <h1 class="fs-xxxl">{{error.statusCode}}</h1>
    <h3 class="fs-xxl mt-4">{{error.message}}</h3>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'blog' // 你可以为错误页面指定自定义的布局
  }
</script>

<style scoped>

</style>
