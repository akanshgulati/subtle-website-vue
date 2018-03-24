<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
  @import 'assets/css/materialize.css';

  * {
    font-family: "Helvetica Neue", sans-serif;;
    font-weight: 400;
    font-style: normal;
    color: #666;
  }
  body{
    font-size: 16px;
  }
</style>
