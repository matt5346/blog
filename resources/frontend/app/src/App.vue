<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer
      @open-contacts="openContacts"
    />
    <ContactForm
      :modalShow="modalShow"
      @modal-close="modalClose"
    />
  </div>
</template>

<script>
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ContactForm from '@/components/contactForm/ContactForm'

export default {
  name: 'App',
  data () {
    return {
      modalShow: false
    }
  },
  components: {
    Header,
    Footer,
    ContactForm
  },
  methods: {
    openContacts () {
      this.modalShow = true
      console.log(this.modalShow, 'appmodalshow')
    },
    modalClose () {
      console.log('modalClosemodalClosemodalClose')
      this.modalShow = false
    }
  }
}
</script>

<style lang="css">
  @import "./resources/fonts/Roboto-mono/font.css";

  @import "./resources/fonts/Roboto-usual/roboto-black/font.css";
  @import "./resources/fonts/Roboto-usual/roboto-bold/font.css";
  @import "./resources/fonts/Roboto-usual/roboto-medium/font.css";
  @import "./resources/fonts/Roboto-usual/roboto-regular/font.css";
</style>
