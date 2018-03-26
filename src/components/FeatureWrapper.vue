<template>
  <div id="features">
    <FeatureNavbar class="hide-on-med-and-down"/>
    <h3 class="hide-on-large-only center-align"> Features</h3>
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
<style>
  #features {
    width: 90%;
    margin: 0 auto;
    max-width: 1280px;
  }
</style>
