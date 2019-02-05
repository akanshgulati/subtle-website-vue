<template>
  <KbBody>
    <div class="article-body">
      <p>Google calendar integration lets user access daily calendar on every new-tab. It
        not only makes it easy to access calendar events but also helps in reminding user
        about the upcoming events. Calendar widget in Subtle tab let user to access next and
        previous dates events too along with pinned option to always keep calendar widget open on
        every new-tab.
      </p>
      <p>
        <Youtube id="IivUy_mc7g0"/>
      </p>
      <h6 class="bold">Steps to integrate:</h6>
      <ol class="steps">
        <li>
          Open this
          <router-link :to="{name: 'integrations.calendar'}"
                       target="_blank">link
          </router-link>
          to start integration. Click on <strong>Start
          Integration</strong> button.
          <img src="/static/img/kb/g_integration_webhome.png" alt="" data-retina>
        </li>

        <li><em>(Google Sign In page will open)</em> Choose your
          account
          whose calendar
          events you want to sync in Subtle tab.
          <img src="/static/img/kb/g_integration_account.png" alt="" data-retina>
        </li>
        <li>
          Enter your password if Google asks for or skip to next step.
          <img src="/static/img/kb/g_integration_password.png" alt="" data-retina>
        </li>
        <li>
          Click on <strong>Allow</strong> to give Subtle tab
          permission to let you view events on new tab.
          <img src="/static/img/kb/g_integration_permission.png" data-retina
               alt="">
        </li>
        <li>
          <em>(Once you click allow, you will be redirected to
            <strong>Google
              Calendar
              Integration Success</strong> window with Authentication
            Code)</em> Click on <strong>Copy</strong> button to copy
          the
          code.
          <img src="/static/img/kb/g_integration_copy_code.png" data-retina
               alt="">
        </li>

        <li>Paste
          the authentication code in the box and click
          <strong>Save</strong> button.
          <img src="/static/img/kb/g_integration_paste_code.png" data-retina
               alt="">
        </li>
        <li>
          <strong>(Only for Chrome users) Allow</strong> the
          additional
          permission in order to access calendar events <em>(You will
          see
          the success message in customize menu in case all goes
          right)</em>
          <img
            src="/static/img/kb/g_integration_optional_permission.png"
            alt="">
        </li>
      </ol>
    </div>
    <div class="article-extra">
      <h6 class="bold">Please note:</h6>
      <ol>
        <li>In case you face any issue during integration, please
          contact
          <a
            href="mailto: support@subtletab.com">Support</a> along
          with
          screenshots of error.
        </li>
        <li>Subtle tab does not access or store any of your personal
          data
          during the entire process and while using this feature on
          new
          tab.
        </li>
      </ol>
    </div>
  </KbBody>
</template>
<script>
  import KbHeader from '../shared/KbHeader'
  import Youtube from '../shared/Youtube'
  import KbBody from '../shared/KbBody'

  export default {
    components: {
      KbHeader,
      Youtube,
      KbBody
    },
    mounted() {
      if (window.devicePixelRatio > 1) {
        let imgs = document.querySelectorAll('img[data-retina]');
        imgs.forEach(img => {
          let dotLocation = img.src.lastIndexOf('.');
          img.src = (img.src.substring(0, dotLocation) + '-2x') +
            img.src.substring(dotLocation, img.src.length)
        })
      }
    }
  }
</script>
<style>
  .steps img {
    display: block;
    max-width: 90%;
    max-height: 320px;
    margin: 1rem auto;
  }

  .article-body p.steps li {
    font-size: 1rem;
    margin-bottom: 2rem;
    max-width: 930px;
  }
</style>
