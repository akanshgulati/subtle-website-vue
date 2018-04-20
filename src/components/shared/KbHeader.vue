<template>
  <header class="pv-30 ph-30">
    <h1>{{title}}</h1>
  </header>
</template>
<script>
  export default {
    props: {
      title: {
        required: true
      }
    }
  }
</script>
<style scoped>
  header {
    background: url('/static/img/kb/green_gradient_bg.png') center no-repeat;
    background-size: cover;
  }
  h1 {
    font-size: 2.5rem;
    font-height: 100%;
    color: white;
    padding: 3rem 0;
  }
</style>
