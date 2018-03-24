<template>
  <button class="plugin-button flex flex-center" @click="install">
    <span class="chrome-plugin-button flex flex-center" v-if="isChrome">
      <img src="../assets/images/chrome-store-icon.png" alt="chrome icon"
           class="icon--plugin">
      Add to Chrome
    </span>
    <span class="firefox-plugin-button flex flex-center" v-if="isFirefox">
      <img src="../assets/images/firefox-store-icon.png" alt="firefox icon"
           class="icon--plugin">
      Add to Firefox
    </span>
  </button>
</template>
<script>
  export default {
    computed: {
      isChrome() {
        return window.navigator.userAgent.indexOf('Chrome') > -1
      },
      isFirefox() {
        return window.navigator.userAgent.indexOf('firefox') > -1
      }
    },
    methods: {
      install() {
        if (this.isChrome && window.chrome.webstore) {
          window.chrome.webstore.install()
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
    padding: 1rem 1.5rem;
    border-radius: 50px;
    font-size: 1.2rem;
    box-shadow: none;
    margin: 0 auto;
    transition: all 0.3s ease-in;
  }

  .plugin-button:hover {
    box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, .2);
    background-color: #2591E4;
  }

  .plugin-button span {
    display: none;
    color: white;
  }

  .icon--plugin {
    width: 32px;
    height: 32px;
    margin-right: 0.5rem;
  }
</style>
