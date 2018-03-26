<template>
    <nav class="nav-wrapper ph-30" :class="{sticky: sticky}">
      <router-link to='/' class="brand-logo flex flex-center">
        <img src="../assets/images/subtletab.png" alt="Logo" class="brand-logo-img">
        <span class="font-normal">Subtle tab</span>
      </router-link>
      <ul id="nav-mobile"
          class="right hide-on-med-and-down"
          v-if="showButtons && showButtons.indexOf(currentRoute) > -1">
        <li class="flex flex-center">
          <a class="nav-button" href="https://goo.gl/LXE9fK">
            <span class="font-xsmall">Download for</span><br/>
            <span>Chrome</span>
          </a>
        </li>
        <li class="flex flex-center">
          <a class="nav-button border-left" href="https://goo.gl/SiGMxu">
            <span class="font-xsmall">Download for</span><br/>
            <span>Firefox</span>
          </a>
        </li>
      </ul>
    </nav>
</template>
<script>
  export default {
    props: {
      sticky: {
        type: String,
        default: 'false'
      },
      showButtons: {
        type: Array
      }
    },
    computed: {
      currentRoute(){
        return this.$route.name;
      }
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
    color: #000 !important;
    font-size: 1.5rem;
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
    border-left: 1px solid rgb(204, 204, 204);
  }

  #nav-mobile li {
    height: 64px
  }
  .sticky{
    position: sticky;
    top: 0;
    z-index: 2;
  }
</style>
