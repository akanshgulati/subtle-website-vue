<template>
  <div>
    <header class="pv-30 ph-30">
      <div class="center">
        <time class="post-meta-date" :datetime="meta.createTime">{{date}}</time>
        <h1 class="post-meta-title">{{meta.title}}</h1>
      </div>
    </header>
    <figure class="post-full-image mar-0"
            :style="{backgroundImage: `url(${meta.image.url})`}"></figure>
  </div>
</template>
<script>
  export default {
    props: {
      meta: {
        required: true
      }
    },
    computed: {
      date() {
        const date = new Date(this.meta.createTime);
        return `${date.toLocaleDateString()}`
      }
    }
  }
</script>
<style scoped>
  header {
    /*background: url('/static/img/kb/kb_header_bg.png') center no-repeat;
    background-size: cover;*/
    padding: 6vw 3vw 3vw;
  }
  time.post-meta-date {
    color: rgb(49, 153, 230);
    text-transform: uppercase;
  }
  h1.post-meta-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: black;
    margin-left: auto;
    margin-right: auto;
  }
  .post-full-image {
    width: 100%;
    height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
