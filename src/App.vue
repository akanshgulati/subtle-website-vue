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
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&text=1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz%20%27%60%2A%2C%40%26');
  @import 'assets/css/materialize.css';
  @import 'assets/css/flexboxgrid.min.css';

  * {
    font-family: "Open Sans", sans-serif;;
    font-weight: 400;
    font-style: normal;
    color: #666;
  }
  body{
    font-size: 16px;
  }
</style>
