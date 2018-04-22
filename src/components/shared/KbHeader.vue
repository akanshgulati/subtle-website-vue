<template>
  <header class="pv-30 ph-30">
    <div class="container center">
      <h1>{{title}}</h1>
    </div>
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
    background: url('/static/img/kb/kb_header_bg.png') center no-repeat;
    background-size: cover;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    color: white;
    padding: 3rem 0;
    margin-left: auto;
    margin-right: auto;
  }
</style>
