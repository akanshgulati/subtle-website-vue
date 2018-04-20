<template>
  <div>
    <Navbar sticky="true" :show-buttons="['home', 'kb.calendar']"/>
    <router-view></router-view>
    <Footer :hide-on="['uninstall']"/>
  </div>
</template>
<script>
  import Footer from './Footer'
  import Navbar from './Navbar'

  export default {
    components: {
      Footer,
      Navbar
    }
  }
</script>
<style>
  @import '../assets/css/util.css';

  #home section h2, section#privacy h2 {
    text-align: center;
    font-size: 36px;
    line-height: 1.4em;
  }
  section h3 {
    font-size: 2rem;
    line-height: 1.1;
  }

  section.full-width {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
</style>
