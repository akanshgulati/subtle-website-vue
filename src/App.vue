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
  .ph-10 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .ph-20 {
    padding-left: 20px;
    padding-right: 20px;
  }

  .ph-30 {
    padding-left: 30px;
    padding-right: 30px;
  }

  .pv-10 {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .pv-20 {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .mar-0 {
    margin: 0 !important;
  }
  .bold{
    font-weight: bold;
  }
  .flex {
    display: flex !important;
  }

  .flex-center {
    align-items: center;
  }

  .flex-justify-center {
    justify-content: center;
  }
  .flex-justify-space-around {
    justify-content: space-around;
  }
  .flex-justify-space-between {
    justify-content: space-between;
  }
  .flex-justify-space-evenly {
    justify-content: space-between;
  }

  .flex-flow-column {
    flex-flow: column;
  }

  .lh-1 {
    line-height: 1
  }

  .font-small {
    font-size: 0.875rem;
  }

  .font-large {
    font-size: 1.2rem;
  }

  .font-xlarge {
    font-size: 1.5rem;
  }

  .font-xxlarge {
    font-size: 2rem;
  }

  .font-normal {
    font-weight: 400;
  }
  ul {
    padding-left: 0;
    list-style-type: none;
  }

  h4 {
    font-size: 2rem;
  }
</style>
