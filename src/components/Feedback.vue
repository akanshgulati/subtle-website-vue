<template>
  <section class="rating-section pv-10 center">
    <h4>Enjoying Subtle Tab?</h4>
    <p>Rate us on <a>Chrome</a> | <a>Firefox</a></p>
    <p>
      <svg v-for="i in 5" :key="i" version="1.1" x="0px" y="0px" viewBox="0 0 53.867 53.867"
           style="enable-background:new 0 0 53.867 53.867;" class="ml-5">
        <polygon style="fill:#EFCE4A;" points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798
	        10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
      </svg>
    </p>
  </section>
</template>
<script>
  export default {}
</script>
<style scoped>
  a {
    color: rgb(49, 153, 230);
    border-bottom: 1px dotted rgb(49, 153, 230);
  }
  .rating-section {
    background: #f3f3f3;
  }
  svg {
    width: 1.2rem;
  }
</style>
