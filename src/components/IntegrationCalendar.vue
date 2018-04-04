<template>
  <section class='flex flex-flow-column integration-section flex-center'>
    <div class="flex flex-center flex-justify-center pv-30">
      <img src="../assets/images/google-calendar-logo.png" alt="Calendar Logo">
      <h3 class="ph-10 mar-0">Google Calendar Integration</h3>
    </div>
      <template v-if="!code">
        <div class="pv-10 center">
          <img src="../assets/images/loading.gif" alt=""
               width="100px">
          <p v-if="!isLoading">
            You will be redirected to <strong>Google Calendar</strong> page
            to authorize <strong>Subtletab</strong> to access your
            calendar data.
          </p>
          <h4 v-if="!isLoading" v-show="counter">Redirect in {{counter}}...</h4>
        </div>
      </template>
      <template v-else>
        <div class="pv-20 center">
          <img src="../assets/images/success.png" alt="" width="100px">
          <h4>You are almost done!</h4>
        </div>
        <div class="pv-20">
          <div class="flex flex-justify-center">
            <input type="text" readOnly id="auth-code" onclick="this.select()"
                   :value="code" class="mar-0">
            <button class="btn btn-group auth-copy" @click="copyCode">
              {{copyButtonTxt}}
            </button>
          </div>
          <span class="font-small">
        Paste this <b>authentication code</b> in Subtletab customization menu
      </span>
        </div>
      </template>
  </section>
</template>
<script>
  import {Http} from '../utils/common'

  export default {
    data() {
      return {
        copyButtonTxt: 'Copy',
        counter: 0,
        code: '',
        isLoading: true
      }
    },
    methods: {
      get() {
        let url
        if (process.env.NODE_ENV === 'production') {
          url = 'https://api.subtletab.com/integrations/calendar'
        } else {
          url = 'http://localhost:8080/integrations/calendar'
        }
        const self = this

        Http(url, {withCredentials: true}).then(resp => {
          self.isLoading = false;
          if (resp.authUrl) {
            self.counter = 4
            self.startCounter()
            setTimeout(() => {
              window.location.href = resp.authUrl
            }, 4000)
          } else {
            self.code = resp.code
          }
        })
      },
      startCounter() {
        const self = this
        setInterval(() => {
          self.counter--
        }, 1000, true)
      },
      copyCode() {
        document.querySelector('#auth-code').select()
        document.execCommand('Copy')
        this.copyButtonTxt = 'Copied'
      }
    },
    mounted() {
      this.get()
    }
  }
</script>
<style>
  .integration-section {
    background: #fafafa;
    overflow-y: hidden;
    min-height: calc(100vh - 9rem);
  }

  #auth-code {
    border: 1px solid rgba(93, 182, 75, 0.33);
    padding: 0 10px;
    font-size: 0.8rem;
    min-width: 40vw;
    background: white;
    box-sizing: border-box;
  }

  .auth-copy {
    height: 3rem;
    border-top-left-radius: 0;
    box-shadow: none;
    border-bottom-left-radius: 0;
  }

  .auth-copy:hover {
    box-shadow: none;
  }
</style>
