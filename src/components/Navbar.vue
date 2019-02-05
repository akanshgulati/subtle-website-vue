<template>
    <!--<nav class="nav-wrapper ph-30" :class="{sticky: sticky}">
      <router-link to='/' class="brand-logo flex flex-center">
        <img src="../assets/images/subtletab.png" alt="Logo" class="brand-logo-img">
        <strong class="bold">Subtle Tab</strong>
      </router-link>
      <ul>
        <li>
          <a href="#">Integrations</a>
          <ul class="list">
            <li>Google Calendar</li>
            <li>Todoist</li>
            <li>Wunderlist</li></ul>
        </li>
        <li>
          <router-link to="kb">Blog</router-link>
        </li>
      </ul>
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
    </nav>-->
  <nav class="navbar" role="navigation" aria-label="main navigation" :class="{sticky: sticky}">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../assets/images/subtletab.png" class="brand-logo-img">
        <strong class="bold">Subtle Tab</strong>
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>

        <a class="navbar-item">
          Documentation
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="nav-button" href="https://goo.gl/LXE9fK"
               @click="downloadClicked" :class="{'highlight': highlightDownloadBtn}">
              <span class="font-xsmall">Download for</span><br/>
              <span class="font-black">Chrome</span>
            </a>
            <a class="nav-button" href="https://goo.gl/SiGMxu"
               @click="downloadClicked" :class="{'highlight': highlightDownloadBtn}">
              <span class="font-xsmall">Download for</span><br/>
              <span class="font-black">Firefox</span>
            </a>
          </div>
        </div>
      </div>
    </div>
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
