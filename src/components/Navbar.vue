<template>
  <nav>
    <div class="nav-wrapper ph-30">
      <div href="#" class="brand-logo flex flex-center">
        <img src="../assets/images/subtletab.png" alt="Logo" class="brand-logo-img">
        <span class="font-normal">Subtle tab</span>
      </div>
      <ul id="nav-mobile" class="right hide-on-med-and-down flex flex-center">
        <!--<li><a href="#intro" class="font-small">About</a></li>
        <li><a class="font-small">FAQ</a></li>-->
        <li class="flex flex-center">
          <a class="nav-button" href="">
            <span class="font-xsmall">Download for</span><br/>
            <span>Chrome</span>
          </a>
        </li>
        <li class="flex flex-center">
          <a class="nav-button border-left" href="">
            <span class="font-xsmall">Download for</span><br/>
            <span>Firefox</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
  export default {}
</script>
<style scoped>
  nav {
    background: rgb(255, 255, 255);
    color: #666 !important;
    user-select: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  nav a {
    color: #666 !important;
  }

  nav .brand-logo {
    color: #000 !important;
    font-size: 1.5rem;
    height: 100%;
  }

  nav .brand-logo-img {
    width: 40px;
    margin-right: 0.5rem;
  }

  nav ul a {
    color: #666 !important;
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
</style>
