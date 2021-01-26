<template>
  <div id="home">
    <HeroSection class="pv-30"/>
    <section id="intro" class="pv-30 mt-30">
      <h2 class="light font-black">Bye Bye boring tabs, hello Subtle Tab!</h2>
      <p class="center font-xlarge light" style="max-width: 800px">
        Subtle tab, a new tab utility,
        gives rejoicing experience to relieve stress, increases focus and productivity.
      </p>
    </section>
    <FeatureWrapper class="pv-20"/>
    <Feedback/>
    <support/>
  </div>
</template>
<script>
  import FeatureWrapper from './FeatureWrapper'
  import HeroSection from './HeroSection'
  import Feedback from './Feedback'
  import Support from './support'

  export default {
    components: {
      FeatureWrapper,
      HeroSection,
      Feedback,
      Support
    }
  }
</script>
<style>

  #intro p {
    max-width: 75%;
    margin: 0 auto;
  }
</style>
