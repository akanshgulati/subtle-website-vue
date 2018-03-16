<template>
  <div>
    <Navbar/>
    <router-view></router-view>
    <Footer/>
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

  .icon--chrome {
    width: 32px;
    height: 32px;
    margin-right: 0.5rem;
  }



  .verify-section {
    background: #f5f5f5;
    height: calc(100vh - 130px);
  }

  #auth-code {
    display: block;
    margin: 0 auto;
    border: 1px solid #ccc;
    padding: 15px 30px;
    font-size: 1.2rem;
    color: green;
    width: 850px;
    text-align: center;
    background: white;
  }

</style>
