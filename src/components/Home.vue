<template>
  <div>
    <Navbar/>
    <HeroSection/>
    <section id="intro">
      <h2>Bye Bye boring tabs, hello Subtle Tab!</h2>
      <p class="center font-large">
        Subtle tab, a new tab chrome extension, gives rejoicing experience to relieve stress
        with eye soothing wallpapers,
        keeps you updated about time and weather, provides you widgets like notes and to-do to better manage your daily
        tasks
      </p>
    </section>
    <FeatureWrapper/>
    <Feedback/>
    <Footer/>
  </div>
</template>
<script>
  import FeatureWrapper from './FeatureWrapper'
  import HeroSection from './HeroSection'
  import Feedback from './Feedback'
  import Navbar from './Navbar'
  import Footer from './Footer'

  export default {
    components: {
      Navbar,
      FeatureWrapper,
      HeroSection,
      Feedback,
      Footer
    }
  }
</script>
