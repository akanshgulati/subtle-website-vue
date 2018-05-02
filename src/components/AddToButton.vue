<template>
  <div class="plugin-button inline-flex flex-center pointer" @click="install" v-if="isChrome || isFirefox">
      <template v-if="isChrome" class="white">
        <img src="../assets/images/chrome-store-icon.png" alt="chrome icon"
             class="icon--plugin">
        <span class="mr-5 white-text">Add to Chrome</span>
        <span class="free-text bold">It's free</span>
      </template>
    <template v-else-if="isFirefox">
      <img src="../assets/images/firefox-store-icon.png" alt="firefox icon"
           class="icon--plugin">
      <span class="mr-5 white-text">Add to Firefox</span>
      <span class="free-text bold">It's free</span>
    </template>
  </div>
</template>
<script>
  export default {
    computed: {
      isChrome() {
        return window.navigator.userAgent.indexOf('Chrome') > -1
      },
      isFirefox() {
        return window.navigator.userAgent.indexOf('Firefox') > -1
      }
    },
    methods: {
      install() {
        this.$ga.event('website', 'addToButton', 'clicked')
        if (this.isChrome && window.chrome.webstore) {
          window.chrome.webstore.install(
            'https://chrome.google.com/webstore/detail/ngigalmiikbffkcabedaikboeodibhga',
            () => {
              this.$ga.event('website', 'addToButton', 'install-success')
            }, () => {
              this.$ga.event('website', 'addToButton', 'install-failed')
            })
        } else if (this.isFirefox) {
          window.location.href = 'https://addons.mozilla.org/en-US/firefox/addon/subtletab'
        } else {
          window.location.href = 'https://chrome.google.com/webstore/detail/ngigalmiikbffkcabedaikboeodibhga'
        }
      }
    }
  }
</script>
<style>

  button:focus {
    outline: none;
    background-color: #3199e6;
  }

  .plugin-button {
    background-color: #3199e6;
    border: none;
    padding: 1.2rem 1.5rem;
    border-radius: 50px;
    font-size: 1.2rem;
    box-shadow: none;
    margin: 0 auto;
    transition: all 0.2s ease-in;
  }

  .plugin-button:hover {
    box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, .2);
    background-color: #2591E4;
  }

  .icon--plugin {
    width: 32px;
    height: 32px;
    margin-right: 0.5rem;
  }
  .free-text {
    color: rgba(6, 29, 47, 0.5)
  }
</style>
