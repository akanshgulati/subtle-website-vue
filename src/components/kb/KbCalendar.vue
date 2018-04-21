<template>
  <div>
    <KbHeader title="How to integrate Google Calendar in Subtle tab?"></KbHeader>
    <article class="container">
      <section class="article-description">
        <h5>Follow the below steps:</h5>
      </section>
      <section class="steps">
        <ol>
          <!--<li>Open the Calendar widget by clicking on clock widget. Click on
            <strong>Integrate</strong>
            button shown in Calendar widget as below.
            <img src="/static/img/kb/g_integration_subtle_extension.png" alt="">
          </li>-->
          <li>
            Open this <router-link :to="{name: 'integrations.calendar'}" target="_blank">link</router-link> to start integration. Click on <strong>Start Integration</strong> button.
            <img src="/static/img/kb/g_integration_webhome.png" alt="">
          </li>
          <li><em>(Google Sign In page will open)</em> Choose your account whose calendar
            events you want to sync in Subtle tab.
            <img src="/static/img/kb/g_integration_account.png" alt="">
          </li>
          <li>
            Enter your password if Google asks for or skip to next step.
            <img src="/static/img/kb/g_integration_password.png" alt="">
          </li>
          <li>
            Click on <strong>Allow</strong> to give Subtle tab permission to let
            you view events on new tab.
            <img src="/static/img/kb/g_integration_permission.png" alt="">
          </li>
          <li>
            <em>(Once you click allow, you will be redirected to <strong>Google
            Calendar
            Integration Success</strong> window with Authentication
              Code)</em> Click on <strong>Copy</strong> button to copy the
            code.
            <img src="/static/img/kb/g_integration_copy_code.png" alt="">
          </li>
          <li>Paste
            the authentication code in the box and click <strong>Save</strong> button.
            <em>(You will see the success message in case all goes right)</em>
            <img src="/static/img/kb/g_integration_paste_code.png" alt="">
          </li>
        </ol>
      </section>
      <section class="article-notes">
        <h5>Please note:</h5>
        <ol>
          <li>In case you face any issue during integration, please contact <a
            href="mailto: support@subtletab.com">Support</a> along with
            screenshots of error.
          </li>
          <li>Subtle tab does not access or store any of your personal data
            during the entire process and while using this feature on new tab.
          </li>
        </ol>
      </section>
    </article>
    <section class="sticky hide-on-small-and-down right-align"
             style="bottom: 0; margin-right: 20px;">
      <router-link
        :to="{name: 'integrations.calendar'}"
        tag="button"
        class="btn btn-blue">
        Start Integration
      </router-link>
    </section>
  </div>
</template>
<script>
  import KbHeader from '../shared/KbHeader'
  export default {
    components: {
      KbHeader
    }
  }
</script>
<style>
  .steps img {
    display: block;
    max-width: 100%;
    margin: 1rem auto;
  }
  article section {
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }
  article section.steps li {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 930px;
  }
</style>
