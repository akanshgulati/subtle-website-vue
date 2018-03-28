<template>
  <section class="feature-section row flex-center">
    <template v-if="contentRight && isDesktop">
      <div class="feature-img col s12 l6">
        <img :src="featureImg" alt="">
      </div>
      <div class="feature-desc  col s12 l6">
        <h3 class="light font-black">{{heading}}</h3>
        <p>{{ desc }}</p>
      </div>
    </template>
    <template v-else>
      <div class="feature-desc col s12 l6">
        <h3 class="light font-black">{{heading}}</h3>
        <p class="show-on-large hide-on-med-and-down">{{ desc }}</p>
      </div>
      <div class="feature-img col s12 l6 right-align">
        <img :src="featureImg" alt="">
      </div>
      <p class="hide-on-large-only">{{ desc }}</p>
    </template>
  </section>
</template>
<script>
  export default {
    props: {
      heading: {
        required: true
      },
      desc: {
        required: true
      },
      img: {
        required: true
      },
      contentRight: {
        default: true
      }
    },
    computed:{
      featureImg() {
        return require('../assets/images/' + this.img)
      },
      isDesktop(){
        return window.innerWidth > 993
      }
    }
  }
</script>
<style>

  .feature-img img {
    max-width: 100%;
  }

  .feature-desc {
    padding: 0 5rem;
  }

  .feature-desc h3 {
    font-size: 2.25rem;
  }
</style>
