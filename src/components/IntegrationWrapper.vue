<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
  import Navbar from './Navbar'
  import Footer from './Footer'

  export default {
    components: {
      Navbar,
      Footer
    }
  }
</script>
