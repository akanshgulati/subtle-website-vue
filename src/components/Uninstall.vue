<template>
  <section id="uninstall">
    <div id="uninstall-heading">
      <h1 class="font-xxlarge bold mar-0">We are sorry to see you go!</h1>
    </div>
    <div id="uninstall-form">
      <div class="container">
        <h2 class="font-large center color-light-grey">Your 30 seconds can help us make it better!</h2>
        <form id="uninstallForm">
          <div class="question">
            <h2 class="font-xlarge">Why did you uninstall ? <sup class="required-label">*required</sup></h2>
            <div class="ques-desc">You can select multiple reasons</div>
            <div class="ph-20 answer">
              <ul>
                <li>
                  <input
                    id='ans1'
                    type="checkbox"
                    class="filled-in"
                    value="Didn't have feature you wanted"
                    v-model="formData.reason1"
                    name="reason1" />

                  <label for="ans1">
                    <p class="mar-0 font-normal">Didn't have the feature you wanted</p>
                    <div class="ans-desc">You can tell us about the feature you miss in Subtle tab</div>
                  </label>
                </li>
                <li>
                  <input v-model="formData.reason1" id='ans2' type="checkbox" class="filled-in" value="Faced issue in wallpaper widget" name="reason1" />
                  <label for="ans2">
                    <p class="mar-0 font-normal">Faced issue in wallpaper widget</p>
                    <div class="ans-desc">Was it in selecting custom wallpapers or changing interval of wallpapers?</div>
                  </label>
                </li>
                <li>
                  <input v-model="formData.reason1" id='ans3' type="checkbox" class="filled-in" value="Faced issue in weather widget" name="reason1" />
                  <label for="ans3">
                    <p class="mar-0 font-normal">Faced issue in weather widget</p>
                    <div class="ans-desc">Was it in selecting custom location or choosing unit of temperature?</div>
                  </label>
                </li>
                <li>
                  <input v-model="otherChecked" id='other' type="checkbox" class="filled-in" value="other"/>
                  <label for="other">
                    <p class="mar-0 font-normal">Other</p>
                    <div class="ans-desc">Didn't find any suitable reason above, you can tell us in box below</div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <transition>
            <div class="question" v-if="showTextArea">
              <h2 class="font-xlarge">Tell us about it</h2>
              <div class="answer">
              <textarea
                name="reason2"
                id="reason"
                cols="30"
                rows="10"
                class="materialize-textarea mar-0 no-pad"
                placeholder="If you have a moment, please tell us more about the issue or give us any feedback here"
                v-model="formData.reason2"/>
              </div>
            </div>
          </transition>
          <div class="submit">
            <button
              class="btn waves-effect waves-light flex flex-center"
              :class="{'disabled': !enableSubmit}"
              @click="submit">
              {{submitText}}
              <svg height="16" viewBox="0 0 48 48" width="16" xmlns="http://www.w3.org/2000/svg" class="ml-10">
                <path d="M4.02 42l41.98-18-41.98-18-.02 14 30 4-30 4z"/>
                <path d="M0 0h48v48h-48z" fill="none"/>
              </svg>
            </button>
            <transition>
              <div class="error">{{errorMessage}}</div>
            </transition>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        formData: {},
        otherChecked: false,
        isSubmitting: false,
        submitText: 'Submit',
        isSubmitted: false
      }
    },
    beforeMount() {
      this.formData = this.resetFormData()
    },
    methods: {
      resetFormData() {
        return {
          reason1: [],
          reason2: ''
        }
      },
      submit(e) {
        e.preventDefault();
        this.sendEvent('submit');
        const qs = `?reason1=${this.formData.reason1.join(',')}&reason2=${this.formData.reason2}`
        this.send(qs);
      },
      sendEvent(string) {
        if (this.$ga) {
          this.$ga.event('clicked', 'uninstall', string)
        }
      },
      send(string) {
        this.isSubmitting = true
        this.submitText = 'Submitting...'
        let url = 'https://script.google.com/macros/s/AKfycbwM6ekE7r19F_WdNXh4zrnhxkdIv0wlg8FZjCpO7VUAHmdph-dr/exec'
        url = url + encodeURI(string)
        const xhttp = new XMLHttpRequest()
        const self = this
        xhttp.onreadystatechange = function () {
          if (this.readyState === 4 && this.status >= 200 && this.status < 300) {
            self.submitText = 'Thank you :)'
            self.sendEvent('submit success')
            self.formData = self.resetFormData()
            self.isSubmitting = false
            self.isSubmitted = true
          }
        }
        xhttp.open('GET', url, true)
        xhttp.send()
      }
    },
    computed: {
      enableSubmit() {
        return this.formData && this.formData.reason1.length || (this.otherChecked && this.formData && this.formData.reason2.length)
      },
      showTextArea() {
        return this.formData && this.formData.reason1.length || this.otherChecked
      },
      errorMessage() {
        if (this.isSubmitted) {
          return
        }

        if (this.formData.reason1.length === 0 && !this.otherChecked) {
          return '*Atleast check one reason to submit'
        } else if (this.otherChecked && this.formData.reason1.length === 0 && this.formData.reason2.length === 0) {
          return '*Please write something before submitting'
        }
      }
    }
  }
</script>
<style scoped>
  #uninstall {
    background: linear-gradient(to bottom, #41C2B7 300px, #464646 300px);
    min-height: calc(100vh - 64px);
  }

  #uninstall-heading {
    height: 200px;
    width: 100%;
  }

  #uninstall-heading h1 {
    font-size: 2.5rem;
    color: white;
    line-height: 100px;
    text-align: center;
  }

  #uninstall-form {
    margin-top: -100px;
    padding-bottom: 3rem;
  }

  #uninstall-form .container {
    background: #fff;
    padding: 10px 40px;
    width: 50%;
    max-width: 800px;
  }

  [type="checkbox"] + label {
    height: 20px;
    padding-left: 25px;
    font-size: 1rem;
  }

  [type="checkbox"].filled-in:checked + label:before {
    top: 3px;
    left: 0;
    width: 7px;
    height: 12px;
    border: 2px solid transparent;
    border-right-color: #fff;
    border-bottom-color: #fff;
    -webkit-transform: rotateZ(42deg);
    transform: rotateZ(42deg);
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }

  [type="checkbox"].filled-in:checked + label:after {
    width: 17px;
    height: 17px;
    border: 1px solid #41C2B7;
    background-color: #41C2B7;
    top: 4px;
  }

  [type="checkbox"].filled-in:not(:checked) + label:after {
    height: 15px;
    width: 15px;
    background-color: transparent;
    border: 2px solid #666;
    top: 5px;
  }

  input[type=text]:focus, textarea.materialize-textarea:focus {
    border-bottom: 1px solid #41C2B7;
    -webkit-box-shadow: 0 1px 0 0 #41C2B7;
    box-shadow: 0 1px 0 0 #41C2B7
  }
  textarea.materialize-textarea {
    padding-bottom: 1rem;
    max-height: 75px;
    overflow-y: auto;
  }

  .question, .submit {
    margin-bottom: 2rem;
  }
  .question h2 {
    margin: 1.2rem 0 1rem 0;
  }
  .ans-desc, .ques-desc {
    margin-top: -5px;
    top: 0;
    font-size: 75%;
    color: #b3b3b3;
  }

  .answer, .answer li {
    margin-bottom: 0.7rem;
  }

  .required-label, .error {
    font-size: 0.7rem;
    color: red;
    top: -0.8rem;
    height: 1rem;
  }
  .btn svg {
    fill: #fff;
    transition: all .3s ease-out
  }
  .btn.disabled svg{
    fill: #9F9F9F;
  }
</style>
