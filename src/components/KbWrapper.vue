<template>
  <article class="fixed-width-article">
    <KbHeader :meta="meta"></KbHeader>
    <router-view></router-view>
  </article>
</template>
<script>
  import articles from './kb/article'
  import KbHeader from './shared/KbHeader'

  export default {
    data() {
      return {
        meta: articles[this.$route.name.slice(3)]
      }
    },
    components: {
      KbHeader
    }
  }
</script>
<style>
  h1 {
    font-size: 2.92rem;
    line-height: 110%;
    margin: 1.46rem 0 1.168rem 0;
  }

  h2 {
    font-size: 2.28rem;
    line-height: 110%;
    margin: 1.14rem 0 0.912rem 0;
  }

  h3 {
    font-size: 1.64rem;
    line-height: 110%;
    margin: 0.82rem 0 0.656rem 0;
  }

  h4 {
    font-size: 1.2rem;
    line-height: 110%;
    margin: 0.5rem 0 0.4rem 0;
  }

  .article-body, .article-extra {
    max-width: 43.75rem;
    margin: 0 auto 1.5rem;
  }
  .article-body > p {
    margin: 1.5rem auto;
  }
  .article-body > p:first-child{
    margin-top: 0;
  }
  .fixed-width-article {
    max-width: 1040px;
    margin: 0 auto;
    z-index: 50;
  }
  .article-content-wrapper {
    position: relative;
    background: white;
  }
   .article-content-wrapper:before, .article-content-wrapper:after {
     content: "";
     position: absolute;
     top: -500px;
     z-index: -1;
     display: block;
     width: 20px;
     height: 900px;
     background: rgba(39,44,49,.08);
     filter: blur(9px);
   }
  .article-content-wrapper:after {
    right: -3px;
    transform: rotate(1deg);
  }
</style>
