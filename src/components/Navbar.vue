<template>
    <nav class="nav-wrapper ph-30" :class="{sticky: sticky}">
      <router-link to='/' class="brand-logo flex flex-center">
        <img src="../assets/images/subtletab.png" alt="Logo" class="brand-logo-img">
        <strong class="bold">Subtle Tab</strong>
      </router-link>
      <ul id="nav-mobile"
          class="right hide-on-med-and-down"
          v-if="showButtons && showButtons.indexOf(currentRoute) > -1">
        <li class="flex flex-center">
          <a class="nav-button" href="https://goo.gl/LXE9fK"
             @click="downloadClicked" :class="{'highlight': highlightDownloadBtn}">
            <span class="font-xsmall">Download for</span><br/>
            <span class="font-black">Chrome</span>
          </a>
        </li>
        <li class="flex flex-center">
          <a class="nav-button border-left" href="https://goo.gl/SiGMxu"
             @click="downloadClicked" :class="{'highlight': highlightDownloadBtn}">
            <span class="font-xsmall">Download for</span><br/>
            <span class="font-black">Firefox</span>
          </a>
        </li>
      </ul>
    </nav>
</template>
<script>
  let scrollListener;
  export default {
    data(){
      return {
        highlightDownloadBtn: false
      }
    },
    props: {
      sticky: {
        type: String,
        default: 'false'
      },
      showButtons: {
        type: Array
      }
    },
    mounted() {
      const self = this;
      scrollListener = window.addEventListener('scroll', () => {
        self.highlightDownloadBtn = window.scrollY > window.innerHeight
      })
    },
    computed: {
      currentRoute(){
        return this.$route.name;
      }
    },
    methods: {
      downloadClicked() {
        this.$ga.event('website', 'downloadBtn', 'clicked')
      }
    },
    destroyed(){
      window.removeEventListener(scrollListener, true)
    }
  }
</script>
<style>
  nav {
    background: rgb(255, 255, 255);
    color: #666 !important;
    user-select: none;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
  }

  nav a {
    color: #666 !important;
  }

  nav .brand-logo {
    color: #333 !important;
    font-size: 1.2rem;
  }

  nav .brand-logo-img {
    width: 40px;
    margin-right: 0.5rem;
  }

  nav ul a {
    color: #666 !important;
    padding: 16px 15px;
  }

  nav ul a:hover {
    background: none;
  }

  nav ul li:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .nav-button {
    line-height: 1;
  }

  .border-left {
    border-left: 1px solid rgb(236, 236, 236);
  }

  #nav-mobile li {
    height: 64px
  }
  .sticky{
    position: sticky;
    top: 0;
    z-index: 2;
  }
  .highlight span {
    transition: all 0.3s ease-in;
    color: rgb(49, 153, 230);
  }
</style>
