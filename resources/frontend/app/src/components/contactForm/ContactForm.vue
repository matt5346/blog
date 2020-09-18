<template>
  <transition name="slide-fade">
    <div
      class="modal"
      v-if="modalShow"
    >
      <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__close" @click="modalClose">
            <svg class="modal__close__icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.5" y="1.5" width="27" height="27" rx="4.5" stroke="black" stroke-width="3"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0001 17.1213L8.56077 23.5606L6.43945 21.4393L12.8788 15L6.43945 8.56065L8.56077 6.43933L15.0001 12.8787L21.4395 6.43933L23.5608 8.56065L17.1214 15L23.5608 21.4393L21.4395 23.5606L15.0001 17.1213V17.1213Z" fill="black"/>
            </svg>
            <span class="modal__close__tip">{{$t('close')}}</span>
          </div>
          <form class="modal__form">
            <div class="modal__form-field">
              <h3>Your name</h3>
              <input name="name" placeholder="What is your name?" class="modal__form__input" required />
            </div>
            <div class="modal__form-field">
              <h3>Your email</h3>
              <input name="emailaddress" placeholder="What is your email?" class="modal__form__input" type="email" required />
            </div>
            <div class="modal__form-field">
              <h3>Your question or suggestion</h3>
              <textarea rows="4" cols="50" name="subject" placeholder="Your message" class="modal__form__textarea" required></textarea>
            </div>
            <button class="main-btn main-btn--contact" type="submit">
              <span class="main-btn__text">{{$t('send')}}</span>
            </button>
          </form>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'contactForm',
  props: {
    modalShow: Boolean
  },
  mounted () {
    console.log(this.modalShow, 'modalSHOW')
  },
  methods: {
    modalClose () {
      console.log(this.modalShow, 'modalClosemodalClose')
      this.$emit('modal-close', false)
    }
  }
}
</script>

<style lang="scss">
@import './style';
</style>
