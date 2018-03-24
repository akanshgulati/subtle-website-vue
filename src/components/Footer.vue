<template>
  <footer
    class="footer-container flex flex-justify-space-between font-small"
    v-if="!hideOn || hideOn.indexOf(currentRoute) === -1">
    <div>
      <p class="footer-copyright">@2018 Subtle Tab. All rights reserved.</p>
      <p class="footer-links">
        <a href="mailto: contact@subtletab.com" class="pr-5">Contact Us</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfj1M9SYtPXzqM1C0KN8DlJio6vGSfZnOWWUVDXArMMSo-GNA/viewform"
           target="_blank" class="ph-5">Feedback</a>
        <router-link to="privacy" class="ph-5">Privacy Policy</router-link>
      </p>
    </div>

    <div class="flex flex-center">
      <p class="mar-0">Follow us on:</p>
      <ul class="ml-10">
        <li class="inline-block mr-10">
          <a href="https://facebook.com/subtletab">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 455.73 455.73" style="enable-background:new 0 0 455.73 455.73;" xml:space="preserve">
<path style="fill:#ffffff" d="M0,0v455.73h242.704V279.691h-59.33v-71.864h59.33v-60.353c0-43.893,35.582-79.475,79.475-79.475
	h62.025v64.622h-44.382c-13.947,0-25.254,11.307-25.254,25.254v49.953h68.521l-9.47,71.864h-59.051V455.73H455.73V0H0z"/>

</svg>
          </a>
        </li>
        <li class="inline-block">
          <a href="https://twitter.com/subtletab">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 410.155 410.155" style="enable-background:new 0 0 410.155 410.155;" xml:space="preserve">
<path style="fill:#fff;" d="M403.632,74.18c-9.113,4.041-18.573,7.229-28.28,9.537c10.696-10.164,18.738-22.877,23.275-37.067
	l0,0c1.295-4.051-3.105-7.554-6.763-5.385l0,0c-13.504,8.01-28.05,14.019-43.235,17.862c-0.881,0.223-1.79,0.336-2.702,0.336
	c-2.766,0-5.455-1.027-7.57-2.891c-16.156-14.239-36.935-22.081-58.508-22.081c-9.335,0-18.76,1.455-28.014,4.325
	c-28.672,8.893-50.795,32.544-57.736,61.724c-2.604,10.945-3.309,21.9-2.097,32.56c0.139,1.225-0.44,2.08-0.797,2.481
	c-0.627,0.703-1.516,1.106-2.439,1.106c-0.103,0-0.209-0.005-0.314-0.015c-62.762-5.831-119.358-36.068-159.363-85.14l0,0
	c-2.04-2.503-5.952-2.196-7.578,0.593l0,0C13.677,65.565,9.537,80.937,9.537,96.579c0,23.972,9.631,46.563,26.36,63.032
	c-7.035-1.668-13.844-4.295-20.169-7.808l0,0c-3.06-1.7-6.825,0.485-6.868,3.985l0,0c-0.438,35.612,20.412,67.3,51.646,81.569
	c-0.629,0.015-1.258,0.022-1.888,0.022c-4.951,0-9.964-0.478-14.898-1.421l0,0c-3.446-0.658-6.341,2.611-5.271,5.952l0,0
	c10.138,31.651,37.39,54.981,70.002,60.278c-27.066,18.169-58.585,27.753-91.39,27.753l-10.227-0.006
	c-3.151,0-5.816,2.054-6.619,5.106c-0.791,3.006,0.666,6.177,3.353,7.74c36.966,21.513,79.131,32.883,121.955,32.883
	c37.485,0,72.549-7.439,104.219-22.109c29.033-13.449,54.689-32.674,76.255-57.141c20.09-22.792,35.8-49.103,46.692-78.201
	c10.383-27.737,15.871-57.333,15.871-85.589v-1.346c-0.001-4.537,2.051-8.806,5.631-11.712c13.585-11.03,25.415-24.014,35.16-38.591
	l0,0C411.924,77.126,407.866,72.302,403.632,74.18L403.632,74.18z"/>
                </svg>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
  export default {
    props :{
      hideOn: {
        type: Array | Boolean,
        default: false
      }
    },
    computed: {
      currentRoute() {
        return this.$route.name
      }
    }
  }
</script>
<style scoped>
  footer {
    background-color: rgb(51, 51, 51);
    border-top: 1px solid #ccc;
    padding: 15px 2%;
    color: #fff;
  }

  .footer-container a {
    color: #fff;
    font-size: 0.8rem;
  }

  .footer-links a:not(:last-of-type) {
    border-right: 2px solid rgba(169, 169, 169, 0.51);
  }

  .footer-container a:active, .footer-container a:link, .footer-container a:visited {
    color: #fff;
  }

  svg {
    width: 1rem;
    height: 1rem;
    fill: #ffffff
  }

  p {
    margin: 0;
    color: #a9a9a9;
  }
</style>
