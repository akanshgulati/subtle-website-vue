<template>
  <div class="youtube-player"></div>
</template>
<script>
  export default {
    props: ['id'],
    mounted() {
      let div, v = this.$el;
      div = document.createElement('div')
      div.innerHTML = this.thumb(this.id)
      div.onclick = this.iframe
      v.appendChild(div)
    },
    methods: {
      thumb(id) {
        let thumb = '<img src="https://i.ytimg.com/vi/ID/maxresdefault.jpg">',
          play = '<div class="play"></div>'
        return thumb.replace('ID', id) + play
      },
      iframe(e) {
        let iframe = document.createElement('iframe')
        let embed = `https://www.youtube.com/embed/${this.id}?autoplay=1`
        iframe.setAttribute('src', embed)
        iframe.setAttribute('frameborder', '0')
        iframe.setAttribute('allowfullscreen', '1')
        e.currentTarget.parentNode.replaceChild(iframe, e.currentTarget)
      }
    }
  }
</script>
<style>
  .youtube-player {
    position: relative;
    padding-bottom: 56.23%;
    /* Use 75% for 4:3 videos */
    height: 0;
    overflow: hidden;
    max-width: 100%;
    background: #000;
    margin: 5px;
  }

  .youtube-player iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: transparent;
  }

  .youtube-player img {
    bottom: 0;
    display: block;
    left: 0;
    margin: auto;
    max-width: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    border: none;
    height: auto;
    cursor: pointer;
    -webkit-transition: .4s all;
    -moz-transition: .4s all;
    transition: .4s all;
  }

  .youtube-player img:hover {
    -webkit-filter: brightness(75%);
  }

  .youtube-player .play {
    height: 72px;
    width: 72px;
    left: 50%;
    top: 50%;
    margin-left: -36px;
    margin-top: -36px;
    position: absolute;
    background: url("//i.imgur.com/TxzC70f.png") no-repeat;
    cursor: pointer;
  }
</style>
