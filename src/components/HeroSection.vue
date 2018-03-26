<template>
  <section class="hero-section flex flex-flow-column flex-center flex-justify-center">
    <div class="hero-section-bg placeholder" data-src="hero-image.jpg" data-src-medium="hero-image@1440.webp" data-src-large="hero-image@1920.webp">
      <img src="data:image/jpeg;base64,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" alt="placeholder" class="img-small">
    </div>
    <div class="content center-align">
      <h1>Get personalized experience on every new tab</h1>
      <AddToButton/>
    </div>
  </section>
</template>
<script>
  import AddToButton from './AddToButton'
  export default {
    components: {
      AddToButton
    },
    date(){
      return {
        imageUrl: ''
      }
    },
    methods: {
      isChrome() {
        return window.navigator.userAgent.indexOf('Chrome') > -1
      },
      getImage(){
        let element = document.querySelectorAll('.placeholder')[0];
        this.imageUrl = element.getAttribute('data-src');
        if (this.isChrome()) {
          if (window.screen.width <= 1440) {
            this.imageUrl = element.getAttribute('data-src-medium')
          } else if (window.screen.width <= 1920) {
            this.imageUrl = element.getAttribute('data-src-large')
          }
        }
        this.loadImage(element);
      },
      loadImage(element) {
        let image = new Image()
        image.src = this.imageSrc
        image.onload = function () {
          image.classList.add('image-loaded')
        }
        element.appendChild(image)
      }
    },
    computed:{
      imageSrc() {
        return require('../assets/images/' + this.imageUrl)
      }
    },
    mounted(){
      this.getImage();
    }
  }
</script>
<style>
  .hero-section {
    height: 30rem;
    padding: 0;
    position: relative;
    width: 100vw;
  }
  .hero-section .hero-section-bg {
    height: 30rem;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 0;
  }
  .hero-section .content {
    position: relative;
    z-index: 1;
  }

  .hero-section h1 {
    color: white;
    font-size: 3rem;
    margin-bottom: 6.5rem;
  }
  .placeholder {
    background-size: cover;
    background: #f6f6f6 no-repeat;
    position: relative;
    overflow: hidden;
  }
  .placeholder img {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    min-width: 100%;
    height: 100%;
    transition: opacity 0.5s linear;
  }
  .placeholder .image-loaded {
    opacity: 1;
  }
  .placeholder .img-small {
    opacity: 1;
    filter: blur(50px);
    width: 100vw;
  }
</style>
