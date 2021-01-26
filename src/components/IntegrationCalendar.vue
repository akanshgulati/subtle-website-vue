<template>
  <section class='flex flex-flow-column integration-section flex-center'>
    <div
      class="flex flex-center flex-justify-center pv-30">
      <img src="../assets/images/google-calendar-logo.png" alt="Calendar Logo">
      <h3 class="ph-10 mar-0">Google Calendar Integration</h3>
    </div>
    <template v-if="isLoading">
      <img src="../assets/images/loading.gif" alt="loading gif"
           width="100px">
      <span>Please Wait...</span>
    </template>
    <template v-else>
      <div
        v-if="!code"
        class="pv-10 flex-center flex flex-flow-column">
        <img src="/static/img/integrations/integrate_google_calendar.png"
             alt="Google Integration with Subtle tab" width="213px" class="pv-30">
        <button
          @click="startAuthentication()"
          v-if="authUrl"
          class="btn btn-large mt-30 btn-blue btn-rounded">
          Start Integration
        </button>
        <p>Want to learn how to integrate?
          <router-link :to="{name: 'kb.calendar'}">Click Here!</router-link>
        </p>
      </div>
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
    </template>
    <support/>
  </section>
</template>
<script>
  import {Http} from '../utils/common'
  import Support from './support'

  export default {
    data() {
      return {
        copyButtonTxt: 'Copy',
        counter: 0,
        code: '',
        isLoading: true,
        authUrl: ''
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
          self.isLoading = false
          if (resp.authUrl) {
            self.authUrl = resp.authUrl
          } else {
            self.code = resp.code
          }
        })
      },
      startAuthentication() {
        window.location.href = this.authUrl
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
    created() {
      this.get()
    },
    components: {
      Support
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
