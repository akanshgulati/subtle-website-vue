<template>
  <section class="feature-section flex flex-center">
    <template v-if="contentRight">
      <div class="feature-img">
        <img :src="featureImg" alt="">
      </div>
      <div class="feature-desc ">
        <h3>{{heading}}</h3>
        <p>{{ desc }}</p>
      </div>
    </template>
    <template v-else>
      <div class="feature-desc ">
        <h3>{{heading}}</h3>
        <p>{{ desc }}</p>
      </div>
      <div class="feature-img">
        <img :src="featureImg" alt="">
      </div>
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
      }
    }
  }
</script>
<style>
  .feature-img {
    width: 50%;
  }

  .feature-img img {
    max-width: 100%;
  }

  .feature-desc {
    width: 60%;
    padding: 0 5rem;
  }

  .feature-desc h3 {
    font-size: 2.25rem;
  }
</style>
