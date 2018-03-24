<template>
  <div id="features">
    <FeatureNavbar/>
    <Feature
      v-for="(feature, key, $index) in features"
      :key="$index"
      :desc="feature.desc"
      :heading="feature.heading"
      :img="feature.img"
      :id="feature.id"
      :contentRight="isEven($index)"
    />
  </div>
</template>
<script>
  import * as features from '../assets/data/feature'
  import Feature from './Feature'
  import FeatureNavbar from './FeatureNavbar'

  export default {
    data() {
      return {
        features
      }
    },
    methods: {
      isEven(num) {
        return num % 2 === 0
      }
    },
    components: {
      Feature,
      FeatureNavbar
    }
  }
</script>
<style scoped>
  #features {
    width: 90%;
    margin: 0 auto;
    max-width: 1280px;
  }
</style>
